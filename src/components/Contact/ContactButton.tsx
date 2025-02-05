import { useCallback, type ReactNode } from "react";
import { toast } from "react-toastify";

type ContactButtonProps = { icon: ReactNode; type: string; text: string };

function ContactButton({ icon, type, text }: ContactButtonProps) {
   const handleClick = useCallback(() => {
      navigator.clipboard.writeText(text);
      toast.success(`Copied ${type} to clipboard!`);
   }, [type, text]);
   return (
      <button
         className="flex h-min p-1 bg-white/30 border border-white/50 rounded-md shadow-white/60 shadow cursor-pointer duration-200 hover:bg-white/40 hover:rounded-lg hover:shadow-md active:scale-95 active:shadow"
         onClick={handleClick}
      >
         <span className="flex gap-1">
            {icon} {text}
         </span>
      </button>
   );
}

export default ContactButton;
