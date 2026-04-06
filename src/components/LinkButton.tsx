import { type ReactNode } from "react";

type LinkButtonProps = { icon: ReactNode; href: string };

function LinkButton({ icon, href }: LinkButtonProps) {
   return (
      <a
         className="relative flex aspect-square h-min cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/12 bg-[linear-gradient(180deg,rgba(var(--surface-rgb),0.6),rgba(var(--surface-rgb),0.2))] p-2 text-white/78 shadow-[0_14px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/6 backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:text-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.42)] active:scale-95"
         href={href}
         target="_blank"
         rel="noreferrer"
      >
         <span className="pointer-events-none absolute inset-px rounded-[calc(var(--radius-xl)-1px)] border border-white/6" />
         <span className="relative">{icon}</span>
      </a>
   );
}

export default LinkButton;
