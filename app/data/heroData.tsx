const dialog1 = [
  'Hey,',
  'I',
  'was',
  'expecting',
  {
    text: 'you.',
    className: 'text-blue-500 dark:text-blue-500',
  },
];
const dialog2 = [
  'Could',
  'you',
  'help',
  {
    text: 'me?',
    className: 'text-amber-500 dark:text-amber-500',
  },
];
const dialog3 = [
  'Finally',
  'freeeeee!',
  {
    text: 'Muahahaha',
    className: 'text-red-500 dark:text-red-500',
  },
];

const mapDialog = (text: string | { text: string; className: string }) => {
  if (typeof text === 'string') {
    return { text };
  }
  return text;
};
export const heroDialogs = {
  dialog1: dialog1.map(mapDialog),
  dialog2: dialog2.map(mapDialog),
  dialog3: dialog3.map(mapDialog),
};
