import type { CSSProperties } from "react";

import { type Tech } from "~/constants/types";

type CardProps = {
   skill: Tech;
};

function Card({ skill }: CardProps) {
   const accentColor = skill.color ?? "#ffffff";

   return (
      <article
         className="group relative flex max-w-sm min-w-xs items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(180deg,rgba(var(--surface-rgb),0.72),rgba(var(--surface-rgb),0.46))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20"
         style={
            {
               "--skill-glow": `${accentColor}22`,
            } as CSSProperties
         }
      >
         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,var(--skill-glow),transparent_64%)] opacity-70 transition duration-300 group-hover:opacity-100" />
         <div className="pointer-events-none absolute inset-px rounded-[calc(var(--radius-3xl)-1px)] border border-white/6 opacity-0 group-hover:opacity-100" />
         <div className="relative flex size-18 items-center justify-center">
            <div className="relative">
               <skill.icon className="size-11" />
            </div>
         </div>
         <h3 className="w-full text-xl text-white/88">{skill.name}</h3>
      </article>
   );
}

export default Card;
