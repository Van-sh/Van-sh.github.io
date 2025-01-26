import { type MouseEventHandler, type ReactNode } from "react";

type LinkButtonProps = { src: ReactNode; href: string };

function LinkButton({ src, href }: LinkButtonProps) {
   const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
      e.preventDefault();
      window.open(href, "_blank")?.focus();
   };

   return (
      <a
         className="flex aspect-square p-1 bg-white/20 border border-white/40 rounded-sm shadow-white/50 shadow cursor-pointer duration-200 hover:bg-white/30 hover:rounded-md hover:scale-[115%] hover:shadow-md active:scale-95 active:shadow"
         onClick={handleClick}
         href={href}
      >
         {src}
      </a>
   );
}

export default LinkButton;
