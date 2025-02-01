import { skills } from "../../constants";
import Card from "./Card";

function Skills() {
   return (
      <section className="flex flex-col items-center justify-center gap-10 mt-8">
         <h2 className="text-4xl">Skills</h2>
         <div className="w-[80vw] flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
               <Card key={index} skill={skill} />
            ))}
         </div>
      </section>
   );
}

export default Skills;
