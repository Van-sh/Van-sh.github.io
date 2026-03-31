import useTypewriter from "~/hooks/useTypewriter";

type TypewriterProps = {
   list: string[];
};
function Typewriter({ list }: TypewriterProps) {
   const title = useTypewriter(list);

   return (
      <span className="bg-linear-to-b from-green-500 to-green-300 bg-clip-text font-mono text-4xl text-transparent">
         {title}
      </span>
   );
}

export default Typewriter;
