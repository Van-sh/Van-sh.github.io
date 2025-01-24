import { useCallback, useRef } from "react";

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

   window.onmousemove = handleMouseMove;

   return (
      <div className="blur-[12vmax] absolute h-full w-full overflow-hidden -z-1">
         <div
            className="h-[35vmax] bg-linear-to-r from-blue-400 to-green-400 aspect-square absolute left-[50%] top-[50%] -translate-[50%] rounded-full animate-[spin_20s_linear_infinite]"
            ref={blobRef}
         ></div>
      </div>
   );
}

export default Blob;
