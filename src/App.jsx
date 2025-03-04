import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/loading-screen";
import { Navbar } from "./components/navbar";
import { MobileMenu } from "./components/mobile-menu";
import { Home } from "./components/sections/home";
import { About } from "./components/sections/about-me";
import { Projects } from "./components/sections/projects-core";
import "./index.css";
import { Contact } from "./components/sections/contact-me";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
