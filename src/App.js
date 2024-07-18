import { useState, useEffect } from "react";
import { Navbar } from "./components/Header/Navbar.js";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  const [clickMenu, isClickMenu] = useState(false);

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
      </div>
    </>
  );
}

export default App;
