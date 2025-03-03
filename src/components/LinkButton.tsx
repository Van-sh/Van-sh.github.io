import { type ReactNode } from "react";

type LinkButtonProps = { icon: ReactNode; href: string };

function LinkButton({ icon, href }: LinkButtonProps) {
   return (
      <a
         className="flex aspect-square h-min cursor-pointer rounded-sm border border-white/40 bg-white/20 p-1 shadow shadow-white/50 duration-200 hover:scale-[115%] hover:rounded-md hover:bg-white/30 hover:shadow-md active:scale-95 active:shadow"
         href={href}
         target="_blank"
      >
         {icon}
      </a>
   );
}

export default LinkButton;
