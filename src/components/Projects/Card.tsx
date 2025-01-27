import ExternalLink from "../../assets/ExternalLink";
import Github from "../../assets/Github";
import { type Projects } from "../../constants/types";
import LinkButton from "../LinkButton";

type CardProps = {
   project: Projects;
};

function Card({ project }: CardProps) {
   return (
      <div className="min-w-xs max-w-sm flex flex-col gap-3 justify-start items-center p-2 bg-white/20 border border-white/40 rounded-xl">
         <span className="flex gap-2 self-start">
            {project.link ? (
               <a className="text-2xl hover:underline underline-offset-4" href={project.link} target="_blank">
                  {project.title}
                  <ExternalLink className="inline" height={20} />
               </a>
            ) : (
               <h3 className="text-2xl">{project.title}</h3>
            )}{" "}
            <LinkButton src={<Github />} href={project.github} />
         </span>
         <p className="text-left">{project.description}</p>
         <ul className="flex flex-wrap gap-2 justify-center">
            {project.stack.map((tech, index) => (
               <li
                  key={index}
                  className="p-0.5 flex gap-1 items-center bg-white/15 border rounded-sm cursor-default duration-200 hover:bg-white/20 hover:rounded-md hover:scale-110"
               >
                  <tech.icon height={24} />
                  {tech.name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Card;
