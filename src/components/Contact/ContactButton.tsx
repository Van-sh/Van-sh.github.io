import { useCallback, useState, type MouseEventHandler, type ReactNode } from "react";

type ContactButtonProps = { icon: ReactNode; text: string };

function ContactButton({ icon, text }: ContactButtonProps) {
   const [isCopiedVisible, setIsCopiedVisible] = useState(false);

   const handleClick = useCallback(() => {
      navigator.clipboard.writeText(text);
      setIsCopiedVisible(true);
      setTimeout(() => setIsCopiedVisible(false), 1000);
   }, [text]);

   const handleMouseOver = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
      e.currentTarget.style.setProperty("--width", e.currentTarget.scrollWidth.toString() + "px");
   }, []);

   const handleMouseOut = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
      e.currentTarget.style.setProperty("--width", "32px");
   }, []);

   return (
      <div className="relative">
         <div
            className={`${isCopiedVisible ? "opacity-100" : "opacity-0"} px-1 rounded-sm duration-150 absolute bottom-1 -translate-x-[110%] bg-green-400 text-black lg:bottom-10 lg:left-[50%] lg:-translate-x-[50%] pointer-events-none after:absolute after:top-[50%] after:left-[100%] after:-mt-1 after:border-4 after:border-t-transparent after:border-l-green-400 after:border-r-transparent after:border-b-transparent lg:after:top-[100%] lg:after:mt-0 lg:after:left-[50%] lg:after:-ml-1 lg:after:border-t-green-400 lg:after:border-l-transparent`}
         >
            Copied!
         </div>
         <button
            className="flex w-min h-8 overflow-hidden p-1 bg-white/30 border border-white/50 rounded-md shadow-white/60 shadow cursor-pointer transition-all duration-400 ease-in-out hover:max-w-70 hover:bg-white/40 hover:rounded-lg hover:shadow-md active:scale-95 active:shadow lg:w-(--width)"
            style={{ "--width": "32px" } as React.CSSProperties}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
         >
            <span className="flex gap-1">
               {icon} {text}
            </span>
         </button>
      </div>
   );
}

export default ContactButton;
