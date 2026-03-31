import {
   SiBetterauthHex,
   SiBunHex,
   SiCssHex,
   SiDrizzleHex,
   SiExpressHex,
   SiFormik,
   SiFormikHex,
   SiGitHex,
   SiGithubHex,
   SiHtml5Hex,
   SiJavascriptHex,
   SiMongodbHex,
   SiNextdotjsHex,
   SiNodedotjsHex,
   SiPostgresqlHex,
   SiReactHex,
   SiShadcnuiHex,
   SiSolidHex,
   SiTailwindcssHex,
   SiTanstackHex,
   SiTursoHex,
   SiTypescriptHex,
   SiVscodiumHex,
} from "@icons-pack/react-simple-icons";
import {
   BetterAuthDark,
   BetterAuthLight,
   Bun,
   CSS,
   DrizzleORMDark,
   DrizzleORMLight,
   ElysiaJS,
   ExpressjsDark,
   ExpressjsLight,
   Git,
   GitHubDark,
   HeroUILight,
   HTML5,
   JavaScript,
   MongoDBDark,
   MongoDBLight,
   Nextjs,
   Nodejs,
   PostgreSQL,
   ReactDark,
   ReactLight,
   ShadcnUiDark,
   ShadcnUiLight,
   Solidjs,
   TailwindCSS,
   TanStack,
   TursoDark,
   TursoLight,
   TypeScript,
   VisualStudioCode,
} from "@ridemountainpig/svgl-react";

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
         "Grocery Planner is a tool designed to simplify meal planning and grocery shopping by " +
         "organizing recipes, generating shopping lists, and tracking pantry items.",
      stack: [
         { name: "React", icon: ReactLight },
         { name: "TypeScript", icon: TypeScript },
         { name: "TailwindCSS", icon: TailwindCSS },
         { name: "Formik", icon: SiFormik, color: SiFormikHex },
         { name: "Hero UI", icon: HeroUILight },
      ],
      github: "https://github.com/Van-sh/Grocery-Planner",
      link: "https://grocery-planner.surge.sh/planner/ingredients",
   },
   {
      title: "deURL",
      description:
         "A URL shortener built with TanStack Start (React + TanStack Router/Query), Elysia (API)" +
         ", Drizzle ORM (Turso/libSQL), and better-auth (Google + anonymous sessions).",
      stack: [
         { name: "Tanstack Start", icon: TanStack },
         { name: "ElysiaJS", icon: ElysiaJS },
         { name: "Bun", icon: Bun },
         { name: "better-auth", icon: BetterAuthLight },
         { name: "Turso", icon: TursoLight },
         { name: "Drizzle", icon: DrizzleORMLight },
         { name: "Shadcn UI", icon: ShadcnUiLight },
      ],
      github: "https://github.com/Van-sh/deurl",
      link: "https://1sh-deurl.vercel.app",
   },
   {
      title: "CoordiNation",
      description:
         "CoordiNation aims to streamline communication, coordination, and resource management " +
         "among city-level government departments to reduce delays and optimize resources.",
      stack: [
         { name: "HTML", icon: HTML5 },
         { name: "CSS", icon: CSS },
         { name: "JavaScript", icon: JavaScript },
         { name: "Express", icon: ExpressjsLight },
         { name: "MongoDB", icon: MongoDBLight },
      ],
      github: "https://github.com/Van-sh/CoordiNation",
   },
] as const;

export const skills: Tech[] = [
   { name: "VS Code", icon: VisualStudioCode, color: SiVscodiumHex },
   { name: "Bun", icon: Bun, color: SiBunHex },
   { name: "TypeScript", icon: TypeScript, color: SiTypescriptHex },
   { name: "Tanstack Start", icon: TanStack, color: SiTanstackHex },
   { name: "Next.js", icon: Nextjs, color: SiNextdotjsHex },
   { name: "React", icon: ReactDark, color: SiReactHex },
   { name: "ShadcnUI", icon: ShadcnUiDark, color: SiShadcnuiHex },
   { name: "TailwindCSS", icon: TailwindCSS, color: SiTailwindcssHex },
   { name: "Drizzle", icon: DrizzleORMDark, color: SiDrizzleHex },
   { name: "Turso", icon: TursoDark, color: SiTursoHex },
   { name: "better-auth", icon: BetterAuthDark, color: SiBetterauthHex },
   { name: "PostgreSQL", icon: PostgreSQL, color: SiPostgresqlHex },
   { name: "Node.js", icon: Nodejs, color: SiNodedotjsHex },
   { name: "JavaScript", icon: JavaScript, color: SiJavascriptHex },
   { name: "MongoDB", icon: MongoDBDark, color: SiMongodbHex },
   { name: "SolidJS", icon: Solidjs, color: SiSolidHex },
   { name: "Express", icon: ExpressjsDark, color: SiExpressHex },
   { name: "HTML", icon: HTML5, color: SiHtml5Hex },
   { name: "CSS", icon: CSS, color: SiCssHex },
   { name: "Git", icon: Git, color: SiGitHex },
   { name: "GitHub", icon: GitHubDark, color: SiGithubHex },
] as const;
