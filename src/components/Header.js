import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const Header = () => {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    localStorage.getItem("theme") || "dark"
  );

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <header>
      {theme === "dark" ? (
        <div>
          <div className="header-img"></div>
          <img
            className="theme-toggle"
            src="images/icon-sun.svg"
            alt="Theme-color"
            onClick={changeTheme}
          />
        </div>
      ) : (
        <div>
          <div className="header-img"></div>
          <img
            className="theme-toggle"
            src="images/icon-moon.svg"
            alt="Theme-color"
            onClick={changeTheme}
          />
        </div>
      )}
      <h1 className="header-title">TODO</h1>
    </header>
  );
};

export default Header;
