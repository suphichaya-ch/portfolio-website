import blenderImg from '../images/blender.png';
import projectImg from '../images/intro.png';
import weatherImg from '../images/weather.png'; 

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Intro",
    technologies: ["Portfolio Website"],
    link: "https://htmlpreview.github.io/?https://github.com/BorwonratSE/portfolio-website/blob/main/index.html",
    image: projectImg, // ใช้ import แทน path string
    github: "https://github.com/suphichaya-ch/portfolio-website.git"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts",
    technologies: ["Weather App"],
    link: "https://htmlpreview.github.io/?https://github.com/BorwonratSE/my-weather-app/blob/main/index.html",
    image: weatherImg, // ใช้ import แทน path string
    github: "https://github.com/suphichaya-ch/portfolio-website.git"
  },
  {
    id: 3,
    title: "Blender",
    description: "3D Model",
    image: blenderImg, // ใช้ import แทน path string
    technologies: ["Blender"],
  }
];