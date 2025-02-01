import {
   CSSIcon,
   ExpressIcon,
   FormikIcon,
   HeroUIIcon,
   HTMLIcon,
   JavaScriptIcon,
   MongoDBIcon,
   ReactIcon,
   TailwindCSSIcon
} from "../assets/TechIcons";
import { Project } from "./types";

export const isDesktop = window.innerWidth > 1024;

export const links = {
   github: "https://github.com/Van-sh/",
   linkedin: "https://www.linkedin.com/in/Van-sh",
};

export const projects: Project[] = [
   {
      title: "Grocery Planner",
      description:
         "Grocery Planner is a tool designed to simplify meal planning and grocery shopping by organizing recipes, generating shopping lists, and tracking pantry items.",
      stack: [
         { name: "React", icon: ReactIcon },
         { name: "TailwindCSS", icon: TailwindCSSIcon },
         { name: "Formik", icon: FormikIcon },
         { name: "Next UI", icon: HeroUIIcon },
      ],
      github: "https://github.com/Van-sh/Grocery-Planner",
      link: "https://grocery-planner.surge.sh/",
   },
   {
      title: "CoordiNation",
      description:
         "CoordiNation aims to streamline communication, coordination, and resource management among city-level government departments to reduce delays and optimize resources.",
      stack: [
         { name: "HTML", icon: HTMLIcon },
         { name: "CSS", icon: CSSIcon },
         { name: "JavaScript", icon: JavaScriptIcon },
         { name: "Express", icon: ExpressIcon },
         { name: "MongoDB", icon: MongoDBIcon },
      ],
      github: "https://github.com/Van-sh/CoordiNation",
   },
];
