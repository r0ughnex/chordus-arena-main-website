import { TeamGridItem } from 'components/TeamGrid';
const imgPath = `${process.env.PUBLIC_URL}/images`;

export const teamInfoItems: TeamGridItem[] = [
  {
    id: 'alex-varshavsky',
    title: 'Alexander Varshavsky',
    text: ['Founder and Project Lead', 'passionate entrepreneur'],
    linkedIn: 'https://www.linkedin.com/in/alexandervarshavsky/',
    picture: `${imgPath}/team/alex-varshavsky.jpg`,
    twitter: 'https://twitter.com/Byblik196',
  },

  {
    id: 'andrey-varshavsky',
    title: 'Andrey Varshavsky',
    text: ['Co-Founder and Lead Developer', 'seasoned software architect'],
    linkedIn: 'https://www.linkedin.com/in/andreyvarshavsky/',
    picture: `${imgPath}/team/andrey-varshavsky.jpg`,
    twitter: 'https://twitter.com/ChordusArena',
  },

  {
    id: 'pradeep-sekar',
    title: 'Pradeep Sekar',
    text: ['Senior Software Engineer', 'evangelist of ImmutableX.'],
    linkedIn: 'https://www.linkedin.com/in/pradeepsekarg/',
    picture: `${imgPath}/team/pradeep-sekar.jpg`,
    twitter: 'https://twitter.com/r0ughnex',
  },
];
