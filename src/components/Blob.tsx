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
         <div
            className="blur-[12vmax] h-[35vmax] bg-linear-to-r from-blue-400 to-green-400 aspect-square absolute left-[50%] top-[50%] -translate-[50%] rounded-full animate-[spin_20s_linear_infinite,grow_5s_ease-in-out]"
            ref={blobRef}
         ></div>
      </div>
   );
}

export default Blob;
