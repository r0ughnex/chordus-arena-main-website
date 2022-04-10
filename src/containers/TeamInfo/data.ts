import { TeamGridItem } from 'components/TeamGrid';
const imgPath = `${process.env.PUBLIC_URL}/images/team`;

export const teamInfoItems: TeamGridItem[] = [
  {
    id: 'alex-varshavsky',
    title: 'Alexander Varshavsky',
    text: ['Founder and Project Lead', 'passionate entrepreneur.'],
    linkedIn: 'https://www.linkedin.com/in/alexandervarshavsky/',
    picture: `${imgPath}/alex-varshavsky.jpg`,
    twitter: 'https://twitter.com/Byblik196',
  },

  {
    id: 'andrey-varshavsky',
    title: 'Andrey Varshavsky',
    text: ['Co-Founder and Lead Developer', 'seasoned software architect.'],
    linkedIn: 'https://www.linkedin.com/in/andreyvarshavsky/',
    picture: `${imgPath}/andrey-varshavsky.jpg`,
    twitter: 'https://twitter.com/ChordusArena',
  },

  {
    id: 'pradeep-sekar',
    title: 'Pradeep Sekar',
    text: ['Senior Software Engineer', 'evangelist of ImmutableX.'],
    linkedIn: 'https://www.linkedin.com/in/pradeepsekarg/',
    picture: `${imgPath}/pradeep-sekar.jpg`,
    twitter: 'https://twitter.com/r0ughnex',
  },

  {
    id: 'jonathan',
    title: 'Jonathan',
    text: ['Community and collaborations'],
    picture: `${imgPath}/jonathan.jpg`,
  },

  {
    id: 'yohe',
    title: 'Yohe',
    text: ['Community manager'],
    picture: `${imgPath}/yohe.jpg`,
  },

  {
    id: 'cathy',
    title: 'Cathy',
    text: ['Community manager'],
  },
];
