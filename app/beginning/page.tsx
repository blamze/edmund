import { BackgroundGradientAnimation } from '@/app/components/BackgroundGradientAnimation';
import Link from 'next/link';
import { MagicButton } from '@/app/components/MagicButton';

export default function Beginning() {
  return (
    <div>
      <BackgroundGradientAnimation containerClassName='absolute -z-10' />
      <Link href='/around-the-world'>
        <MagicButton className='w-full'>Travel around the world!</MagicButton>
      </Link>
    </div>
  );
}
