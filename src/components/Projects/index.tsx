import { projects } from "~/constants";
import Section from "../Section";
import Card from "./Card";

function Projects() {
   return (
      <Section>
         <h2 className="text-4xl">Projects</h2>
         <div className="flex w-[80vw] flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
               <Card key={index} project={project} />
            ))}
         </div>
      </Section>
   );
}

export default Projects;
