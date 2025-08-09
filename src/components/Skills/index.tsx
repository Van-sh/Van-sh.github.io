import { skills } from "~/constants";
import Section from "../Section";
import Card from "./Card";

function Skills() {
   return (
      <Section>
         <h2 className="text-4xl">Skills</h2>
         <div className="flex w-[80vw] flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
               <Card key={index} skill={skill} />
            ))}
         </div>
      </Section>
   );
}

export default Skills;
