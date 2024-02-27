const dialog1 = [
  'Hello,',
  'I',
  'was',
  'expecting',
  {
    text: 'you.',
    className: 'text-blue-500 dark:text-blue-500',
  },
];
const dialog2 = [
  'Yes,',
  {
    text: 'you!',
    className: 'text-blue-500 dark:text-blue-500',
  },
];
const dialog3 = [
  'Could',
  'you',
  'help',
  {
    text: 'me?',
    className: 'text-amber-500 dark:text-amber-500',
  },
];
const dialog4 = [
  'Much',
  {
    text: 'better!',
    className: 'text-blue-500 dark:text-blue-500',
  },
];
const dialog5 = [
  'So',
  {
    text: 'smooth!',
    className: 'text-violet-500 dark:text-violet-500',
  },
];
const dialog6 = [
  'Look',
  'at',
  'me',
  {
    text: 'fly!',
    className: 'text-red-500 dark:text-red-500',
  },
];

const dialog7 = [
  'I',
  'will',
  'show',
  'you',
  {
    text: 'more!',
    className: 'text-violet-500 dark:text-violet-500',
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
  dialog4: dialog4.map(mapDialog),
  dialog5: dialog5.map(mapDialog),
  dialog6: dialog6.map(mapDialog),
  dialog7: dialog7.map(mapDialog),
};
