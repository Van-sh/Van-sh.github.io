import { projects } from "../../constants";
import Card from "./Card";

function Projects() {
   return (
      <section className="my-8 flex flex-col items-center justify-center gap-10">
         <h2 className="text-4xl">Projects</h2>
         <div className="flex w-[80vw] flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
               <Card key={index} project={project} />
            ))}
         </div>
      </section>
   );
}

export default Projects;
