import img1 from '../assets/images/project1.png';
import vaso from '../assets/images/vasil.png';
import img2 from '../assets/images/project2.png';
import JSIcon from '../assets/images/JSicon.svg';
import ReactIcon from '../assets/images/react.svg';
import TSIcon from '../assets/images/typescript.svg';

export const homeObjOne = {
  imgStart: false,
  headline: 'Kill your hunger',
  description:
    'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
  subtittle: 'React java router typescript',
  img: img1,
  alt: 'hello',
  start: false,
  primaryBtnLabel: 'live',
  secondaryBtnLabel: 'view code',
};

export const homeObjAbout = {
  imgStart: true,
  headline: 'I am web-developer based in Berlin',
  description: `A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.  Create and save new playlists of recommended tracks based on your existing playlists and more.`,
  subtittle: '',
  img: vaso,
  alt: 'hello',
  start: true,
  primaryBtnLabel: 'Download CV',
  secondaryBtnLabel: '',
};

export const homeObjThree = {
  imgStart: false,
  headline: 'Travel as a local',
  description:
    'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
  subtittle: 'React java router typescript',
  img: img2,
  alt: 'hello',
  start: false,
  primaryBtnLabel: 'live',
  secondaryBtnLabel: 'view code',
};

export const homeObjSkills = [
  { img: JSIcon, tittle: 'javaScript' },
  {
    img: TSIcon,
    tittle: 'TypeScript',
  },
  { img: ReactIcon, tittle: 'ReactJS' },
];
