import { TeamGridItem } from 'components/TeamGrid';
const imgPath = `${process.env.PUBLIC_URL}/images`;

export const teamInfoItems: TeamGridItem[] = [
  {
    id: 'alex-varshavsky',
    title: 'Alexander Varshavsky',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linkedIn: 'https://www.linkedin.com/in/alexandervarshavsky/',
    picture: `${imgPath}/team/alex-varshavsky.jpg`,
    twitter: 'https://twitter.com/Byblik196',
  },

  {
    id: 'andrey-varshavsky',
    title: 'Andrey Varshavsky',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linkedIn: 'https://www.linkedin.com/in/andreyvarshavsky/',
    picture: `${imgPath}/team/andrey-varshavsky.jpg`,
    twitter: 'https://twitter.com/ChordusArena',
  },

  {
    id: 'john-doe',
    title: 'John Michael Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    linkedIn: 'https://www.linkedin.com/company/chordus-arena/',
    twitter: 'https://twitter.com/ChordusArena',
  },
];
