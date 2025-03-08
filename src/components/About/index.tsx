import { links } from "../../constants";
import LinkButton from "../LinkButton";

import Github from "../../assets/Github.svg?react";
import LinkedIn from "../../assets/LinkedIn.svg?react";
import Typewriter from "./Typewriter";

function About() {
   return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-10 lg:flex-row">
         <div className="flex max-w-[80vw] flex-col items-center justify-center gap-5 lg:max-w-[60vw]">
            <h1 className="text-center text-6xl">
               I'm{" "}
               <span className="bg-linear-to-b from-blue-600 to-blue-300 bg-clip-text text-7xl text-transparent">
                  Vansh Shandilya
               </span>
            </h1>
            <h2 className="text-center text-3xl">
               A <Typewriter />
            </h2>
            <p className="text-center text-lg">
               I specialize in creating efficient, user-friendly web applications. With expertise in React, Formik, Next
               UI, Express, and MongoDB, I build seamless interfaces and scalable, robust back-end solutions. I thrive
               on solving complex problems and delivering impactful results through collaboration and innovation.
            </p>
            <ul className="flex gap-3">
               <li>
                  <LinkButton icon={<Github />} href={links.github} />
               </li>
               <li>
                  <LinkButton icon={<LinkedIn />} href={links.linkedin} />
               </li>
            </ul>
         </div>
      </section>
   );
}

export default About;
