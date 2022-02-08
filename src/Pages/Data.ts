import img1 from '../assets/images/project1.png';
import vaso from '../assets/images/vasil.png';
import img2 from '../assets/images/project2.png';
import img3 from '../assets/images/project3.png';
import HTMLIcon from '../assets/icons/html.svg';
import CSSIcon from '../assets/icons/css.svg';
import JSIcon from '../assets/icons/javascript.svg';
import ReactIcon from '../assets/icons/react.svg';
import TSIcon from '../assets/icons/typescript.svg';
import SAASicon from '../assets/icons/saas.svg';
import MaterialUI from '../assets/icons/material-ui.svg';
import StyledComponentsIcon from '../assets/icons/styledcomponents.svg';
import Git from '../assets/icons/git.svg';
import Github from '../assets/icons/github.svg';
import Node from '../assets/icons/node.svg';
import MongoDB from '../assets/icons/mongodb.svg';
import Linux from '../assets/icons/linux.svg';
import Firebase from '../assets/icons/firebase.svg';
import Netlify from '../assets/icons/netlify.svg';
import Wordpress from '../assets/icons/wordpress.svg';
import Webpack from '../assets/icons/webpack.svg';
import Figma from '../assets/icons/figma.svg';
import Illustrator from '../assets/icons/illustrator.svg';
import Photoshop from '../assets/icons/photoshop.svg';

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
    "A simple game where you have to search for the listed characters in the image. This project uses Firestore's NoSQL database to store the coordinates of the characters as well as the list of winners.",
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
  { img: HTMLIcon, tittle: 'HTML' },
  { img: CSSIcon, tittle: 'CSS' },
  { img: JSIcon, tittle: 'JavaScript' },
  { img: ReactIcon, tittle: 'React' },
  { img: TSIcon, tittle: 'TypeScript' },
  { img: SAASicon, tittle: 'SASS' },
  { img: MaterialUI, tittle: 'SASS' },
  { img: StyledComponentsIcon, tittle: 'Styled Components' },
  { img: Node, tittle: 'Node.js' },
  { img: MongoDB, tittle: 'MongoDB' },
  { img: Webpack, tittle: 'Webpack' },
  { img: Firebase, tittle: 'Firebase' },
  { img: Git, tittle: 'Git' },
  { img: Linux, tittle: 'Linux' },
  { img: Github, tittle: 'Github' },
  { img: Netlify, tittle: 'Netlify' },
  { img: Wordpress, tittle: 'Wordpress' },
  { img: Figma, tittle: 'Figma' },
  { img: Illustrator, tittle: 'Illustrator' },
  { img: Photoshop, tittle: 'Photoshop' },
];
