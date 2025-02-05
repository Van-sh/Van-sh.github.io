import { useEffect, useState } from "react";

const useTypewriter = (texts: string[], typingSpeed: number = 150, pauseTime: number = 600) => {
   const [index, setIndex] = useState(0);
   const [subIndex, setSubIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const [isPaused, setIsPaused] = useState(false);
   const [text, setText] = useState("");

   useEffect(() => {
      if (isPaused) {
         const timeout = setTimeout(() => {
            setIsPaused(false);
         }, pauseTime);
         return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(
         () => {
            setText(texts[index].substring(0, subIndex));

            if (!isDeleting && subIndex < texts[index].length) {
               setSubIndex(subIndex + 1);
            } else if (isDeleting && subIndex > 0) {
               setSubIndex(subIndex - 1);
            } else if (isDeleting && subIndex === 0) {
               setIsDeleting(false);
               setIndex((prev) => {
                  let nextIndex = Math.floor(Math.random() * texts.length);
                  while (nextIndex == prev) {
                     nextIndex = Math.floor(Math.random() * texts.length);
                  }
                  return nextIndex;
               });
            } else if (!isDeleting && subIndex === texts[index].length) {
               setIsPaused(true);
               setIsDeleting(true);
            }
         },
         isDeleting ? typingSpeed / 2 : typingSpeed,
      );

      return () => clearTimeout(timeout);
   }, [subIndex, isDeleting, index, isPaused, texts, typingSpeed, pauseTime]);

   return text;
};

export default useTypewriter;
