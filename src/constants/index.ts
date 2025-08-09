import {
   SiCss,
   SiCssHex,
   SiDrizzle,
   SiDrizzleHex,
   SiExpress,
   SiExpressHex,
   SiFormik,
   SiFormikHex,
   SiGit,
   SiGitHex,
   SiGithub,
   SiGithubHex,
   SiHeroui,
   SiHerouiHex,
   SiHtml5,
   SiHtml5Hex,
   SiJavascript,
   SiJavascriptHex,
   SiMongodb,
   SiMongodbHex,
   SiPostgresql,
   SiPostgresqlHex,
   SiReact,
   SiReactHex,
   SiShadcnui,
   SiShadcnuiHex,
   SiTailwindcss,
   SiTailwindcssHex,
   SiTypescript,
   SiTypescriptHex,
} from "@icons-pack/react-simple-icons";

import type { Project, Tech } from "./types";

export const titleList: string[] = [
   "Software Developer",
   "Web Developer",
   "Frontend Developer",
   "React Developer",
   "Backend Developer",
   "Full Stack Developer",
] as const;

export const links = {
   github: "https://github.com/Van-sh/",
   linkedin: "https://www.linkedin.com/in/Van-sh",
} as const;

export const contact = {
   email: "vansh20005@gmail.com",
   phone: "+919717983709",
   discord: "van__sh",
} as const;

export const projects: Project[] = [
   {
      title: "Grocery Planner",
      description:
         "Grocery Planner is a tool designed to simplify meal planning and grocery shopping by organizing recipes, generating shopping lists, and tracking pantry items.",
      stack: [
         { name: "React", icon: SiReact, color: SiReactHex },
         { name: "TypeScript", icon: SiTypescript, color: SiTypescriptHex },
         { name: "TailwindCSS", icon: SiTailwindcss, color: SiTailwindcssHex },
         { name: "Formik", icon: SiFormik, color: SiFormikHex },
         { name: "Next UI", icon: SiHeroui, color: SiHerouiHex },
      ],
      github: "https://github.com/Van-sh/Grocery-Planner",
      link: "https://grocery-planner.surge.sh/planner/ingredients",
   },
   {
      title: "CoordiNation",
      description:
         "CoordiNation aims to streamline communication, coordination, and resource management among city-level government departments to reduce delays and optimize resources.",
      stack: [
         { name: "HTML", icon: SiHtml5, color: SiHtml5Hex },
         { name: "CSS", icon: SiCss, color: SiCssHex },
         { name: "JavaScript", icon: SiJavascript, color: SiJavascriptHex },
         { name: "Express", icon: SiExpress, color: SiExpressHex },
         { name: "MongoDB", icon: SiMongodb, color: SiMongodbHex },
      ],
      github: "https://github.com/Van-sh/CoordiNation",
   },
] as const;

export const skills: Tech[] = [
   { name: "TypeScript", icon: SiTypescript, color: SiTypescriptHex },
   { name: "React", icon: SiReact, color: SiReactHex },
   { name: "ShadcnUI", icon: SiShadcnui, color: SiShadcnuiHex },
   { name: "TailwindCSS", icon: SiTailwindcss, color: SiTailwindcssHex },
   { name: "Express", icon: SiExpress, color: SiExpressHex },
   { name: "Drizzle", icon: SiDrizzle, color: SiDrizzleHex },
   { name: "PostgreSQL", icon: SiPostgresql, color: SiPostgresqlHex },
   { name: "JavaScript", icon: SiJavascript, color: SiJavascriptHex },
   { name: "MongoDB", icon: SiMongodb, color: SiMongodbHex },
   { name: "HTML", icon: SiHtml5, color: SiHtml5Hex },
   { name: "CSS", icon: SiCss, color: SiCssHex },
   { name: "Git", icon: SiGit, color: SiGitHex },
   { name: "GitHub", icon: SiGithub, color: SiGithubHex },
] as const;
