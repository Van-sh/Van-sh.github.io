import { SiGithub } from "@icons-pack/react-simple-icons";

import { ExternalLink } from "~/assets";
import { type Project } from "~/constants/types";
import LinkButton from "../LinkButton";

type CardProps = {
   project: Project;
};

function Card({ project }: CardProps) {
   return (
      <article className="group relative flex max-w-sm min-w-xs flex-col items-center justify-start gap-4 overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(180deg,rgba(var(--surface-rgb),0.78),rgba(var(--surface-rgb),0.52))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:ring-white/12">
         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--surface-glow-rgb),0.14),transparent_64%)] opacity-70 transition duration-300 group-hover:opacity-100" />
         <div className="pointer-events-none absolute inset-px rounded-[calc(var(--radius-3xl)-1px)] border border-white/6" />
         <div className="flex w-full justify-between gap-2 self-start">
            <h3 className="text-2xl text-white">{project.title}</h3>
            <div className="flex gap-2">
               {project.link && (
                  <LinkButton icon={<ExternalLink className="size-6" />} href={project.link} />
               )}
               <LinkButton icon={<SiGithub className="size-6" />} href={project.github} />
            </div>
         </div>
         <p className="text-left text-white/72">{project.description}</p>
         <ul className="flex flex-wrap justify-center gap-2">
            {project.stack.map((tech, index) => (
               <li
                  key={index}
                  className="flex cursor-default items-center gap-1 rounded-full border border-white/10 bg-white/7 px-3 py-1.5 text-sm text-white/80 transition duration-200 hover:scale-105 hover:border-white/20 hover:bg-white/12 hover:text-white"
               >
                  <tech.icon className="size-6" fill={tech.color} />
                  {tech.name}
               </li>
            ))}
         </ul>
      </article>
   );
}

export default Card;
