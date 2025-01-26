import ExternalLink from "../../assets/ExternalLink";
import Github from "../../assets/Github";
import { type Projects } from "../../constants/types";

type CardProps = {
   project: Projects;
};

const buttonClasses =
   "flex gap-1 p-1 bg-white/20 border border-white/40 rounded-sm shadow-white/50 shadow cursor-pointer duration-200 hover:bg-white/30 hover:rounded-md hover:scale-105 hover:shadow-md active:scale-95 active:shadow";

function Card({ project }: CardProps) {
   return (
      <div className="min-w-xs max-w-sm flex flex-col gap-1.5 justify-center items-center p-2 bg-white/20 border border-white/40 rounded-xl">
         <h3 className="text-xl">{project.title}</h3>
         <p className="text-left">{project.description}</p>
         <ul className="flex flex-wrap gap-2 justify-center">
            {project.stack.map((tech, index) => (
               <li key={index} className="flex gap-1 items-center">
                  <tech.icon height={24} />
                  {tech.name}
               </li>
            ))}
         </ul>
         <ul className="flex gap-3">
            <a className={buttonClasses} href={project.github} target="_blank">
               <Github /> GitHub
            </a>
            {!!project.link && (
               <a className={buttonClasses} href={project.link} target="_blank">
                  <ExternalLink /> Live Demo
               </a>
            )}
         </ul>
      </div>
   );
}

export default Card;
