import { links, titleList } from "../../constants";
import useTypewriter from "../../hooks/useTypewriter";
import LinkButton from "../LinkButton";

import Github from "../../assets/Github.svg?react";
import LinkedIn from "../../assets/LinkedIn.svg?react";

function About() {
   const title = useTypewriter(titleList);

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
               A{" "}
               <span className="bg-linear-to-b from-green-500 to-green-300 bg-clip-text font-mono text-4xl text-transparent">
                  {title}
               </span>
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
