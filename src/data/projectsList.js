import swImg from "../assets/images/sw.png";
import pbImg from "../assets/images/pb.png";
import msImg from "../assets/images/ms.png";
import psImg from "../assets/images/ps.png";
import wsImg from "../assets/images/ws.png";

export const projects = [
  {
    title: "Star Wars Destiny App",
    description:
      "This app is Star Wars Destiny card browser. You can browse all cards, filter them by type, set, and rarity, and create youir own collections. The app uses data from swdestinydb.com API and stores data in local storage. The app is written in React (Vite) and uses Zustand to manage state.",
    thumbnail: swImg,
    liveDemoLink: "https://pawelpalasinski.github.io/SWDDB/",
    githubLink: "https://github.com/PawelPalasinski/SWDDB",
  },
  {
    title: "Phonebook App",
    description:
      "A simple phone book application that allows you to register and store data (names and phone numbers). Application works with backend.",
    thumbnail: pbImg,
    liveDemoLink: "https://pp-phonebook.netlify.app",
    githubLink: "https://github.com/PawelPalasinski/goit-react-hw-08-phonebook",
  },
  {
    title: "TMDB Movie App",
    description:
      "TMDB Movie App is a web application that allows you to browse movies from The Movie Database (TMDB). The app is built using React and utilizes the TMDB API to fetch movie data.",
    thumbnail: msImg,
    liveDemoLink: "https://pp-tmdb-movie-app.netlify.app",
    githubLink: "https://github.com/PawelPalasinski/goit-react-hw-05-movies",
  },
  {
    title: "Pixabay Image Search App",
    description: "A simple website to search images on Pixabay",
    thumbnail: psImg,
    liveDemoLink: "https://pawelpalasinski.github.io/goit-js-hw-11/",
    githubLink: "https://github.com/PawelPalasinski/goit-js-hw-11",
  },
  {
    title: "WebStudio",
    description: "WebStudio - Landing page of Web Design Studio",
    thumbnail: wsImg,
    liveDemoLink: "https://pawelpalasinski.github.io/goit-markup-hw-08/",
    githubLink: "https://github.com/PawelPalasinski/goit-markup-hw-08",
  },
];
