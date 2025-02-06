import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
   return (
      <main className="bg-transparent">
         <About />
         <Divider />
         <Projects />
         <Divider />
         <Skills />
         <Divider />
         <Contact />
      </main>
   );
}

export default App;
