import { titleList } from "../../constants";
import useTypewriter from "../../hooks/useTypewriter";

function Typewriter() {
   const title = useTypewriter(titleList);

   return (
      <span className="bg-linear-to-b from-green-500 to-green-300 bg-clip-text font-mono text-4xl text-transparent">
         {title}
      </span>
   );
}

export default Typewriter;
