import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rukhsar Jamati | Software Developer based in Leicester, UK', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description:
    'Rukhsar Jamati - A Software Developer based in Leicester, United Kingdom. Specialising in Mobile Android & iOS App Development', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello! I'm",
  name: 'Rukhsar Jamati',
  subtitle: 'A Software Developer who enjoys working with Android, iOS & Java.',
  cta: 'More about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A graduate with a Bachelors in Information Technology, based in Leicester, United Kingdom.',
  paragraphTwo:
    'Hobbies include reading, gaming, watching TV & movies but my main passion is Mobile app development for Android and iOS.',
  paragraphThree:
    'I am always looking to acquire new skills and gain more experience. Check out some of my projects below.',
  resume: 'https://play.google.com/store/apps/developer?id=Rukhsar+Jamati', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: 'Email me',
  email: 'rujamati@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RJamati',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
