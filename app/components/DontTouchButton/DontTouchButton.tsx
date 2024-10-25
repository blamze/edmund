import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import './DontTouchButtonStyle.css';

const ASSETS: Record<string, string> = {
  head: `dont-touch/head.svg`,
  waiting: `dont-touch/hand.svg`,
  stalking: `dont-touch/hand-waiting.svg`,
  grabbing: `dont-touch/hand.svg`,
  grabbed: `dont-touch/hand-with-cursor.svg`,
  shaka: `dont-touch/hand-surfs-up.svg`,
};

/**
 * Shared hooks
 */

// Hover state - https://dev.to/spaciecat/hover-states-with-react-hooks-4023
const useHover = () => {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  useEffect(() => {
    ref.current!.addEventListener('mouseenter', enter);
    ref.current!.addEventListener('mouseleave', leave);
    return () => {
      if (ref.current) {
        ref.current!.removeEventListener('mouseenter', enter);
        ref.current!.removeEventListener('mouseleave', leave);
      }
    };
  }, [ref]);

  return [ref, hovered];
};

// Mouse position
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', setFromEvent);

    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
  }, []);

  return position;
};

// Element position
const usePosition = () => {
  const ref = useRef<any>();
  const [position, setPosition] = useState<any>({});

  const handleResize = () => {
    setPosition(ref.current!.getBoundingClientRect());
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref.current]);

  return [ref, position];
};

/**
 * React Components
 */

export class DontTouchButton extends React.Component<
  { onMiss: () => void; onFinal: () => void },
  { cursorGrabbed: boolean; gameOver: boolean; missCount: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      cursorGrabbed: false,
      gameOver: false,
      missCount: 0,
    };

    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.handleCursorGrabbed = this.handleCursorGrabbed.bind(this);
  }

  handleCursorGrabbed() {
    this.setState({
      cursorGrabbed: true,
    });
    setTimeout(() => {
      this.setState({
        cursorGrabbed: false,
        missCount: this.state.missCount + 1,
      });
      this.props.onMiss();
      if (this.state.missCount > 0) {
        this.props.onFinal();
      }
    }, 2000);
  }

  handleButtonClicked() {
    this.setState({
      gameOver: true,
    });
    setTimeout(() => {
      this.setState({
        gameOver: false,
      });
    }, 4000);
  }

  render() {
    const { cursorGrabbed, gameOver } = this.state;
    const screenStyle = cursorGrabbed ? { cursor: 'none' } : {};
    const appClass = 'dont-touch';

    return (
      <div className={appClass} style={screenStyle}>
        <button className='trap-button' onClick={this.handleButtonClicked}>
          {gameOver && 'Nice one'}
          {cursorGrabbed && 'Gotcha!'}
          {!gameOver && !cursorGrabbed && 'Click ME!'}
        </button>

        <div className='grab-zone-wrapper'>
          <GrabZone
            onCursorGrabbed={this.handleCursorGrabbed}
            cursorGrabbed={cursorGrabbed}
            gameOver={gameOver}
          />
        </div>
      </div>
    );
  }
}

// GrabZone (The hover trigger zone)
const GrabZone = ({
  cursorGrabbed,
  gameOver,
  onCursorGrabbed,
}: {
  cursorGrabbed: boolean;
  gameOver: boolean;
  onCursorGrabbed: () => void;
}) => {
  const [outerRef, outerHovered] = useHover();
  const [innerRef, innerHovered] = useHover();
  const [isExtended, setExtendedArm] = useState(false);

  let state = 'waiting';
  if (outerHovered) {
    state = 'stalking';
  }
  if (innerHovered) {
    state = 'grabbing';
  }
  if (cursorGrabbed) {
    state = 'grabbed';
  }
  if (gameOver) {
    state = 'shaka';
  }

  // If state is grabbing for a long time, they're being clever!
  useEffect(() => {
    let timer: NodeJS.Timeout | null;
    if (state === 'grabbing') {
      timer = setTimeout(() => {
        // Not so clever now, are they?
        setExtendedArm(true);
        timer = null;
      }, 2000);
    }
    return () => {
      setExtendedArm(false);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [state]);

  return (
    <div className='grab-zone' ref={outerRef as any}>
      <div className='grab-zone__danger' ref={innerRef as any}>
        <Grabber
          state={state}
          gameOver={gameOver}
          extended={isExtended}
          onCursorGrabbed={onCursorGrabbed}
        />
      </div>
    </div>
  );
};

// Grabber (The graphic)
const Grabber = ({
  state,
  gameOver,
  extended,
  onCursorGrabbed,
}: {
  state: string;
  gameOver: boolean;
  extended: boolean;
  onCursorGrabbed: () => void;
}) => {
  const mousePos = useMousePosition();
  const [ref, position] = usePosition();

  // Calculate rotation of armWrapper
  const x = position.left + position.width * 0.5;
  const y = position.top + position.height * 0.5;
  const angle = gameOver
    ? 0
    : Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI);

  // Ensure value is within acceptable range (-75 to 75)
  const rotation = Math.min(Math.max(parseInt(String(angle)), -79), 79);

  const grabberClass = `grabber grabber--${state} ${extended && 'grabber--extended'}`;
  const wrapperStyle = { transform: `rotate(${rotation}deg)` };

  let handImageSrc = ASSETS[state];

  return (
    <div className={grabberClass}>
      <div className='grabber__body'></div>
      <img className='grabber__face' src={ASSETS.head} />
      <div
        className='grabber__arm-wrapper'
        ref={ref as any}
        style={wrapperStyle}
      >
        <div className='grabber__arm'>
          <img
            className='grabber__hand'
            src={handImageSrc}
            onMouseEnter={onCursorGrabbed}
          />
        </div>
      </div>
    </div>
  );
};
