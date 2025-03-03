import { type Project } from "../../constants/types";

import ExternalLink from "../../assets/ExternalLink.svg?react";
import Github from "../../assets/Github.svg?react";
import LinkButton from "../LinkButton";

type CardProps = {
   project: Project;
};

function Card({ project }: CardProps) {
   return (
      <div className="flex max-w-sm min-w-xs flex-col items-center justify-start gap-3 rounded-xl bg-white/30 p-2 outline-3 outline-offset-3 outline-white/80">
         <div className="flex w-full justify-between gap-2 self-start">
            <h3 className="text-2xl">{project.title}</h3>
            <div className="flex gap-2">
               {project.link && <LinkButton icon={<ExternalLink color="#fff" />} href={project.link} />}
               <LinkButton icon={<Github color="#fff" />} href={project.github} />
            </div>
         </div>
         <p className="text-left">{project.description}</p>
         <ul className="flex flex-wrap justify-center gap-2">
            {project.stack.map((tech, index) => (
               <li
                  key={index}
                  className="flex cursor-default items-center gap-1 rounded-sm border border-transparent bg-white/30 p-1 duration-200 hover:scale-105 hover:rounded-md hover:border-white hover:bg-white/20"
               >
                  <tech.icon />
                  {tech.name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Card;
