import { type Skill } from "../../constants/types";

type CardProps = {
   skill: Skill;
};

function Card({ skill }: CardProps) {
   return (
      <div className="min-w-xs max-w-sm flex gap-3 justify-center items-center p-2 bg-white/20 border border-white/40 rounded-xl">
         <div className="relative">
            <skill.icon height={64} width={64} />
         </div>
         <h3 className="w-full text-2xl">{skill.name}</h3>
      </div>
   );
}

export default Card;
