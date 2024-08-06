import { useState } from "react";
import { Navbar } from "./components/Header/Navbar.js";
import { Hero } from "./components/Hero/Hero.js";
import { About } from "./components/About/About.js";
import { Services } from "./components/Services/Services.js";
import { Projects } from "./components/Projects/Projects.js";
import { Contact } from "./components/Contact/Contact.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="container">
        <Navbar />
        <Hero isLoading={isLoading} setIsLoading={setIsLoading} />
        <About />
        <Services />
        <Projects />
        <Contact isLoading={isLoading} setIsLoading={setIsLoading} />
        <Footer />
      </div>
    </>
  );
}

export default App;
