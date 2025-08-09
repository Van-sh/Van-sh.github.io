import { type CSSProperties } from "react";

import { type Tech } from "~/constants/types";

type CardProps = {
   skill: Tech;
};

function Card({ skill }: CardProps) {
   return (
      <div
         className="flex max-w-sm min-w-xs items-center justify-center gap-3 rounded-xl bg-(--bg-color)/15 p-2 outline-3 outline-offset-3 outline-(--bg-color)/80"
         style={{ "--bg-color": skill.color ?? "white" } as CSSProperties}
      >
         <div className="relative size-18">
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <skill.icon height={44} width={44} />
            </div>
         </div>
         <h3 className="w-full text-xl">{skill.name}</h3>
      </div>
   );
}

export default Card;
