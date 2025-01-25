import { LINKS } from "../../constants";
import LinkButton from "./LinkButton";

import Github from "../../assets/Github";
import LinkedIn from "../../assets/LinkedIn";
import Mail from "../../assets/Mail";

function About() {
   return (
      <section className="flex flex-col items-center justify-center gap-10 h-screen lg:flex-row">
         <img src="/1sh.svg" alt="Logo" className="animate-[bounce_2s_ease-in-out_infinite]" />
         <div className="flex flex-col items-center justify-center gap-5 max-w-[80vw] lg:max-w-[60vw] lg:items-start">
            <h1 className="text-6xl text-center lg:text-left">
               I'm <span className="text-7xl text-blue-400">Vansh Shandilya</span>
            </h1>
            <p className="text-lg">
               A passionate software developer highly interested in back-end and front-end technologies, I specialize in
               creating efficient, user-friendly web applications. With expertise in React, Formik, Next UI, Express,
               and MongoDB, I build seamless interfaces and scalable, robust back-end solutions. I thrive on solving
               complex problems and delivering impactful results through collaboration and innovation.
            </p>
            <ul className="flex gap-3">
               <li>
                  <LinkButton src={<Github />} onClick={() => window.open(LINKS.github, "_blank")?.focus()} />
               </li>
               <li>
                  <LinkButton
                     src={<LinkedIn />}
                     onClick={() => window.open(LINKS.linkedin, "_blank")?.focus()}
                  />
               </li>
               <li>
                  <LinkButton
                     src={<Mail />}
                     onClick={() => navigator.clipboard.writeText(LINKS.mail)}
                  />
               </li>
            </ul>
         </div>
      </section>
   );
}

export default About;
