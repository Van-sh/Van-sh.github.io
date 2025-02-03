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
      <div className="fixed h-full w-full overflow-hidden -z-1">
         <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] [background-size:24px_24px] lg:[background-size:48px_48px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_120%)]"></div>
         <div
            className="blur-[12vmax] h-[35vmax] bg-linear-to-r from-blue-400 to-green-400 aspect-square absolute left-[50%] top-[50%] -translate-[50%] rounded-full animate-[spin_20s_linear_infinite,grow_5s_ease-in-out]"
            ref={blobRef}
         ></div>
      </div>
   );
}

export default Blob;
