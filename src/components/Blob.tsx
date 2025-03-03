import { useCallback, useEffect, useRef } from "react";
import { isDesktop } from "../constants";

function Blob() {
   const blobRef = useRef<HTMLDivElement>(null);

   const handleMouseMove = useCallback((event: MouseEvent) => {
      const { clientX, clientY } = event;

      blobRef.current?.animate(
         {
            left: `${clientX}px`,
            top: `${clientY}px`,
         },
         { duration: 3000, fill: "forwards" },
      );
   }, []);

   useEffect(() => {
      if (!isDesktop) return;
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
   }, [handleMouseMove]);

   return (
      <div className="fixed -z-1 h-full w-full overflow-hidden">
         <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_120%)] lg:[background-size:48px_48px]"></div>
         <div
            className="absolute top-[50%] left-[50%] aspect-square h-[40vmax] -translate-[50%] animate-[spin_20s_linear_infinite,grow_5s_ease-in-out] rounded-full bg-linear-to-r from-blue-400 to-green-400 opacity-60 blur-[12vmax]"
            ref={blobRef}
         ></div>
      </div>
   );
}

export default Blob;
