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
  secondaryBtnLink: 'https://github.com/vbit27/local-guide',
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
  secondaryBtnLink: 'https://github.com/vbit27/recipe-app',
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
  secondaryBtnLink: 'https://github.com/vbit27/find-the-character',
};

export const homeObjAbout = {
  imgStart: true,
  headline: 'A creative who loves to code',
  description: `Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with.  \n 
  I'm passionate about frontend - whether it's web based or mobile, with the intetion to always create intuitive and visually stunning user interfaces. I possess a deep knowledge of JavaScript, TypeScript and React as well as a great understanding of CSS and responsive layouts in particular. \n 
  In my free time, I learn new technologies, meet friends at Admiral's Brücke, or visit new countries.`,
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
  { img: MaterialUI, tittle: 'MaterialUI' },
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
