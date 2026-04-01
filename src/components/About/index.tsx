import { SiGithub } from "@icons-pack/react-simple-icons";

import { LinkedIn } from "~/assets";
import { aboutText, links, name, titleList } from "~/constants";
import LinkButton from "../LinkButton";
import Section from "../Section";
import Typewriter from "./Typewriter";

function About() {
   return (
      <Section>
         <div className="flex max-w-[80vw] flex-col items-center justify-center gap-5 lg:max-w-[60vw]">
            <h1 className="text-center text-6xl">
               I'm{" "}
               <span className="bg-linear-to-b from-blue-600 to-blue-300 bg-clip-text text-7xl text-transparent">
                  {name}
               </span>
            </h1>
            <h2 className="text-center text-3xl">
               A <Typewriter list={titleList} />
            </h2>
            <p className="text-center text-lg">{aboutText}</p>
            <ul className="flex gap-3">
               <li>
                  <LinkButton icon={<SiGithub />} href={links.github} />
               </li>
               <li>
                  <LinkButton icon={<LinkedIn />} href={links.linkedin} />
               </li>
            </ul>
         </div>
      </Section>
   );
}

export default About;
