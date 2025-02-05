import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
   return (
      <main className="bg-transparent">
         <About />
         <Projects />
         <Skills />
         <Contact />
      </main>
   );
}

export default App;
