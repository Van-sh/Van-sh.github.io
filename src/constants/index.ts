import {
   CSSIcon,
   ExpressIcon,
   FormikIcon,
   HeroUIIcon,
   HTMLIcon,
   JavaScriptIcon,
   MongoDBIcon,
   ReactIcon,
   TailwindCSSIcon,
   TypeScriptIcon,
} from "../assets/TechIcons";
import { Project, Skill } from "./types";

export const isDesktop = window.innerWidth > 1024;

export const titleList: string[] = [
   "Software Developer",
   "Web Developer",
   "Frontend Developer",
   "React Developer",
   "Backend Developer",
   "Full Stack Developer",
];

export const links = {
   github: "https://github.com/Van-sh/",
   linkedin: "https://www.linkedin.com/in/Van-sh",
};

export const contact = {
   email: "vansh20005@gmail.com",
   phone: "+919717983709",
   discord: "van__sh",
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

export const skills: Skill[] = [
   { name: "HTML", icon: HTMLIcon, percentage: 90 },
   { name: "CSS", icon: CSSIcon, percentage: 85 },
   { name: "TypeScript", icon: TypeScriptIcon, percentage: 90 },
   { name: "JavaScript", icon: JavaScriptIcon, percentage: 80 },
   { name: "React", icon: ReactIcon, percentage: 85 },
   { name: "TailwindCSS", icon: TailwindCSSIcon, percentage: 85 },
   { name: "Formik", icon: FormikIcon, percentage: 75 },
   { name: "Express", icon: ExpressIcon, percentage: 90 },
   { name: "MongoDB", icon: MongoDBIcon, percentage: 80 },
];
