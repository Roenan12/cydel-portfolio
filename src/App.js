import React, { useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Services,
  Projects,
  Contact,
  Footer,
} from "./components";

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
