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
  img: 'profile.jpeg',
  paragraphOne:
    'A graduate with a Bachelors of Engineering in Information Technology, based in Leicester, United Kingdom.',
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
    img: 'android-tip-calculator.png',
    title: 'Android Tip Calculator',
    info:
      'An intuitive and easy to use Tip Calculator app which allows the user to calculate the tip and also split the bill between a number of people.',
    info2:
      'This Android app is created by me using Android Studio and published on the Google Play Store. See the link below.',
    url: 'https://play.google.com/store/apps/details?id=com.appdevrj.tipcalculator',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'android-expense-manager.jpg',
    title: 'Android Expense Manager',
    info:
      'The app allows the user to create a local account. Once logged in, the user enters their monthly income, they will then need to enter their expenses. The user can also create different categories for their expenses or income.',
    info2:
      'Once the user has entered their monthly incomings and expenses, the app will present a pie chart to represent the data.',
    url: '',
    repo: 'https://github.com/RJamati/Android-Expenses-Manager',
  },
  {
    id: nanoid(),
    img: 'movie-booking.jpg',
    title: 'ASP.NET Online Movie Ticket Booking System',
    info:
      'This Movie Ticket Booking System was my final year project for my university course. Built from scratch using ASP .NET.',
    info2:
      'The web app allows you to create new listings for movies, showcase existing movies, and allows you to create bookings with the option to select which cinema and seat you would like. You can create multiple screens with different seating layouts. Once a seat has been booked, newer bookings will display that seat as unavailable. It even includes a snack ordering form!',
    url: '',
    repo: 'https://github.com/RJamati/ASP.NET-Movie-Ticket-Booking-System',
  },
  {
    id: nanoid(),
    img: 'RBDIMS.jpg',
    title: 'ASP.NET Registration of Birth & Death Information Management System',
    info:
      'This web app was the final year project for my College Diploma course. It was built using ASP .NET. The app was designed for the scenario of a local council who requires a system in order to enter residents births and deaths as well as generate certificates for them.',
    info2:
      'The user must login in order to view the admin panel, read and write permissions can be granted from the main admin account. Once logged in a user can fill in forms to create birth or death records, with these records created there is an option to export to PDF.',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'ios-weather.jpg',
    title: 'iOS Weather App',
    info:
      'This weather app was built as part of my iOS app development learning. Created using Xcode and Swift.',
    info2:
      'The app is dynamic and uses the users location in order to fetch the current weather from the OpenWeather API. The user can also search for the weather in other locations. The app also changes icons and styles according to the weather and time.',
    url: '',
    repo: 'https://github.com/RJamati/iOS-weather-app',
  },
  {
    id: nanoid(),
    img: 'ios-xylophone.jpg',
    title: 'iOS Xylophone App',
    info:
      'This app was built as a coding exercise whilst learning iOS app development. It was built using Xcode and Swift.',
    info2:
      'The app features a xylophone in which the user taps the keys and the corrosponding notes will sound. Building this app taught me important concepts such as audio playback and storyboard designing.',
    url: '',
    repo: 'https://github.com/RJamati/iOS-Xylophone-app',
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
