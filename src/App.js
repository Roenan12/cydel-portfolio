import { useState, useEffect } from "react";
import { Navbar } from "./components/Header/Navbar.js";
import { Hero } from "./components/Hero/Hero.js";
import { Services } from "./components/Services/Services.js";
import { Projects } from "./components/Projects/Projects.js";
import { Contact } from "./components/Contact/Contact.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [clickMenu, isClickMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar
          theme={theme}
          onSetTheme={setTheme}
          clickMenu={clickMenu}
          onClickMenu={isClickMenu}
        />
        <Hero isLoading={isLoading} setIsLoading={setIsLoading} />
        <Services />
        <Projects />
        <Contact isLoading={isLoading} setIsLoading={setIsLoading} />
        <Footer />
      </div>
    </>
  );
}

export default App;
