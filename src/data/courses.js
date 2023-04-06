import osCourseLogo from "../assets/os_react_course_logo.PNG";
import udemyCourseLogo from "../assets/udemy_react_course_logo.jpg";
import scrimbaCoursesLogo from "../assets/scrimba_courses_logo.PNG";
import codecademyCoursesLogo from "../assets/codecademy_courses_logo.PNG";

export const courses = [
  {
    platform: "OpenClassrooms",
    name: "JavaScript React Developer",
    courseLink:
      "https://openclassrooms.com/paths/517-javascript-react-developer",
    projectsLink:
      "https://github.com/stars/Dimterion/lists/openclassrooms-projects",
    image: osCourseLogo,
    info: "12 months Bachelor's-level program / 11 projects",
  },
  {
    platform: "Udemy",
    name: "React. Front to Back",
    courseLink: "https://www.udemy.com/course/react-front-to-back-2022",
    projectsLink: "https://github.com/stars/Dimterion/lists/udemy-projects",
    image: udemyCourseLogo,
    info: "20 hours course / 4 projects",
  },
  {
    platform: "Scrimba",
    name: "React / JavaScript / CSS / HTML",
    courseLink: "https://scrimba.com/allcourses",
    projectsLink: "https://github.com/stars/Dimterion/lists/scrimba-projects",
    image: scrimbaCoursesLogo,
    info: "Various courses with multiple projects",
  },
  {
    platform: "Codecademy",
    name: "JS / CSS / HTML",
    courseLink: "https://www.codecademy.com/catalog/all",
    projectsLink:
      "https://github.com/stars/Dimterion/lists/codecademy-projects",
    image: codecademyCoursesLogo,
    info: "Various courses with multiple projects",
  },
];
