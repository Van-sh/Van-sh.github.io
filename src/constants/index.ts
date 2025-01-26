import { CSS, Express, HeroUI, HTML, JavaScript, MongoDB, React } from "../assets/TechIcons";
import { Projects } from "./types";

export const isDesktop = window.innerWidth > 1024;

export const LINKS = {
   github: "https://github.com/Van-sh/",
   linkedin: "https://www.linkedin.com/in/Van-sh",
};

export const PROJECTS: Projects[] = [
   {
      title: "Grocery Planner",
      description:
         "Grocery Planner is a tool designed to simplify meal planning and grocery shopping by organizing recipes, generating shopping lists, and tracking pantry items.",
      stack: [
         { name: "React", icon: React },
         { name: "Next UI", icon: HeroUI },
      ],
      github: "https://github.com/Van-sh/Grocery-Planner",
      link: "https://grocery-planner.surge.sh/",
   },
   {
      title: "CoordiNation",
      description:
         "CoordiNation aims to streamline communication, coordination, and resource management among city-level government departments to reduce delays and optimize resources.",
      stack: [
         { name: "HTML", icon: HTML },
         { name: "CSS", icon: CSS },
         { name: "JavaScript", icon: JavaScript },
         { name: "Express", icon: Express },
         { name: "MongoDB", icon: MongoDB },
      ],
      github: "https://github.com/Van-sh/CoordiNation",
   },
];
