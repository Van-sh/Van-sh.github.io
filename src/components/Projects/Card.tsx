import { type Project } from "../../constants/types";

import ExternalLink from "../../assets/ExternalLink.svg?react";
import Github from "../../assets/Github.svg?react";
import LinkButton from "../LinkButton";

type CardProps = {
   project: Project;
};

function Card({ project }: CardProps) {
   return (
      <div className="min-w-xs max-w-sm flex flex-col gap-3 justify-start items-center p-2 bg-white/30 outline-3 outline-offset-3 outline-white/80 rounded-xl">
         <div className="w-full flex gap-2 self-start justify-between">
            <h3 className="text-2xl">{project.title}</h3>
            <div className="flex gap-2">
               {project.link && <LinkButton icon={<ExternalLink color="#fff" />} href={project.link} />}
               <LinkButton icon={<Github color="#fff" />} href={project.github} />
            </div>
         </div>
         <p className="text-left">{project.description}</p>
         <ul className="flex flex-wrap gap-2 justify-center">
            {project.stack.map((tech, index) => (
               <li
                  key={index}
                  className="p-1 flex gap-1 items-center bg-white/30 border border-transparent hover:border-white rounded-sm cursor-default duration-200 hover:bg-white/20 hover:rounded-md hover:scale-105"
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
