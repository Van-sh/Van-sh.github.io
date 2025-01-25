import { type ReactNode } from "react";

type LinkButtonProps = { src: ReactNode; onClick?: () => void };

function LinkButton({ src, onClick }: LinkButtonProps) {
   return (
      <button
         className="aspect-square p-1 bg-white/20 border border-white/40 rounded-sm shadow-white/50 shadow cursor-pointer duration-200 hover:bg-white/30 hover:rounded-md hover:scale-[115%] hover:shadow-md active:scale-95 active:shadow"
         onClick={onClick}
      >
         {src}
         {/* <img src={src} alt={alt} /> */}
      </button>
   );
}

export default LinkButton;
