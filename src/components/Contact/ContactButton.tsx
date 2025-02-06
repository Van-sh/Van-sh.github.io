import { useCallback, type MouseEventHandler, type ReactNode } from "react";
import { toast } from "react-toastify";

type ContactButtonProps = { icon: ReactNode; type: string; text: string };

function ContactButton({ icon, type, text }: ContactButtonProps) {
   const handleClick = useCallback(() => {
      navigator.clipboard.writeText(text);
      toast.success(`Copied ${type} to clipboard!`);
   }, [type, text]);

   const handleMouseOver = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
      e.currentTarget.style.setProperty("--width", e.currentTarget.scrollWidth.toString() + "px");
   }, []);

   const handleMouseOut = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
      e.currentTarget.style.setProperty("--width", "32px");
   }, []);

   return (
      <button
         className="flex w-auto h-8 overflow-hidden p-1 bg-white/30 border border-white/50 rounded-md shadow-white/60 shadow cursor-pointer transition-all duration-400 ease-in-out hover:max-w-70 hover:bg-white/40 hover:rounded-lg hover:shadow-md active:scale-95 active:shadow lg:w-(--width)"
         style={{ "--width": "32px" } as React.CSSProperties}
         onClick={handleClick}
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
      >
         <span className="flex gap-1">
            {icon} {text}
         </span>
      </button>
   );
}

export default ContactButton;
