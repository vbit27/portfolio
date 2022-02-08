import img1 from '../assets/images/project1.png';
import vaso from '../assets/images/vasil.png';
import img2 from '../assets/images/project2.png';
import img3 from '../assets/images/project3.png';
import JSIcon from '../assets/images/JSicon.svg';
import ReactIcon from '../assets/images/react.svg';
import TSIcon from '../assets/images/typescript.svg';

export const homeObjOne = {
  imgStart: false,
  headline: 'Your local guide',
  description:
    'A curated list of the most budget-friendly places in Saranda, Albania. This is a non-profit project created from volunteers. By using Google Maps API, users can see the exact coordinates of the place, as well as some additional information such as: a short description, price range, phone number, etc.',
  subtittle: 'Google-Maps-API Material-UI React Typescript',
  img: img1,
  alt: 'localguide website screenshot',
  start: false,
  primaryBtnLabel: 'live',
  secondaryBtnLabel: 'view code',
};

export const homeObjTwo = {
  imgStart: false,
  headline: 'Kill your hunger',
  description:
    'An App to help you decide your next meal in three easy steps. This App takes advantage of the Edamam API to show various recipes based on the main ingredient of your choice.',
  subtittle: 'Edamami-api React react-router typescript axios',
  img: img2,
  alt: 'kill your hunger app screenshots',
  start: false,
  primaryBtnLabel: 'live',
  secondaryBtnLabel: 'view code',
};

export const homeObjThree = {
  imgStart: false,
  headline: 'Find me if you can',
  description:
    'A simple game where you have to search for the listed characters in the image. The purpose of creating this game was to practice my knowledge of Firebase, a NoSQL database.',
  subtittle: 'Firebase Sass react typescript',
  img: img3,
  alt: 'hello',
  start: false,
  primaryBtnLabel: 'live',
  secondaryBtnLabel: 'view code',
};

export const homeObjAbout = {
  imgStart: true,
  headline: 'I am web-developer based in Berlin',
  description: `I’m  a front-end developer and general doodler with a keen eye for creating engaging UI, bringing products to life.`,
  subtittle: '',
  img: vaso,
  alt: 'hello',
  start: true,
  primaryBtnLabel: 'Download CV',
  secondaryBtnLabel: '',
};

export const homeObjSkills = [
  { img: JSIcon, tittle: 'JavaScript' },
  {
    img: TSIcon,
    tittle: 'TypeScript',
  },
  { img: ReactIcon, tittle: 'GitHub' },
  { img: ReactIcon, tittle: 'Jest' },
  { img: ReactIcon, tittle: 'HTML' },
  { img: ReactIcon, tittle: 'SASS' },
  { img: ReactIcon, tittle: 'Firgma' },
  { img: ReactIcon, tittle: 'Photoshop' },
  { img: ReactIcon, tittle: 'MaterialUI' },
  { img: ReactIcon, tittle: 'Firebase' },
];
