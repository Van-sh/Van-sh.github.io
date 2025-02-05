import { links, titleList } from "../../constants";
import useTypewriter from "../../hooks/useTypewriter";
import LinkButton from "../LinkButton";

import Github from "../../assets/Github.svg?react";
import LinkedIn from "../../assets/LinkedIn.svg?react";

function About() {
   const title = useTypewriter(titleList);

   return (
      <section className="flex flex-col items-center justify-center gap-10 min-h-screen lg:flex-row">
         <img src="/1sh.svg" alt="Logo" className="lg:animate-[bounce_2s_ease-in-out_infinite]" />
         <div className="flex flex-col items-center justify-center gap-5 max-w-[80vw] lg:max-w-[60vw] lg:items-start">
            <h1 className="text-6xl text-center lg:text-left">
               I'm <span className="text-7xl text-blue-400">Vansh Shandilya</span>
            </h1>
            <h2 className="text-3xl text-center lg:text-left">
               A <span className="text-4xl text-green-400 font-mono">{title}</span>
            </h2>
            <p className="text-lg">
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
