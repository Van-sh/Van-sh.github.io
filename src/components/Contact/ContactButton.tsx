import { useCallback, useState, type ReactNode } from "react";

import { cn } from "~/lib/utils";

type ContactButtonProps = { icon: ReactNode; text: string };

function ContactButton({ icon, text }: ContactButtonProps) {
   const [isCopiedVisible, setIsCopiedVisible] = useState(false);

   const handleClick = useCallback(() => {
      navigator.clipboard.writeText(text);
      setIsCopiedVisible(true);
      setTimeout(() => setIsCopiedVisible(false), 1000);
   }, [text]);

   return (
      <div className="relative">
         <div
            className={cn(
               "pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 -translate-y-[calc(100%+0.75rem)] rounded-full border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(10,18,18,0.7),rgba(6,12,12,0.4))] px-3 py-1 text-sm text-emerald-100 shadow-[0_16px_36px_rgba(0,0,0,0.35)] ring-1 ring-emerald-300/10 backdrop-blur-md duration-150 after:absolute after:top-full after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-r after:border-b after:border-emerald-300/20 after:bg-[rgb(8,15,15)]",
               isCopiedVisible ? "opacity-100" : "opacity-0",
            )}
         >
            Copied!
         </div>
         <button
            className="relative flex h-10 w-min cursor-pointer items-center overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(var(--surface-rgb),0.6),rgba(var(--surface-rgb),0.3))] px-3 py-2 text-white/82 shadow-[0_18px_40px_rgba(0,0,0,0.38)] ring-1 ring-white/6 backdrop-blur-xl transition-all duration-300 ease-out hover:max-w-70 hover:-translate-y-0.5 hover:border-white/20 hover:text-white hover:shadow-[0_22px_48px_rgba(0,0,0,0.45)] active:scale-95"
            onClick={handleClick}
         >
            <span className="relative flex items-center gap-2 whitespace-nowrap">
               {icon} {text}
            </span>
         </button>
      </div>
   );
}

export default ContactButton;
