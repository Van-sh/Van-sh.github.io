import { type Skill } from "../../constants/types";

type CardProps = {
   skill: Skill;
};

function Card({ skill }: CardProps) {
   return (
      <div className="flex max-w-sm min-w-xs items-center justify-center gap-3 rounded-xl bg-white/30 p-2 outline-3 outline-offset-3 outline-white/80">
         <div className="relative size-18">
            <svg
               className="size-18 -rotate-90 overflow-visible"
               viewBox="0 0 36 36"
               xmlns="http://www.w3.org/2000/svg"
            >
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-[#949494]"
                  strokeWidth="1"
               ></circle>
               <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-white/75 drop-shadow-[0_0_1px_rgba(255,255,255,0.75)]"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset={100 - skill.percentage}
                  strokeLinecap="round"
               ></circle>
            </svg>
            <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
               <skill.icon height={44} width={44} />
            </div>
         </div>
         <h3 className="w-full text-xl">{skill.name}</h3>
      </div>
   );
}

export default Card;
