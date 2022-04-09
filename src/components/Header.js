import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
		theme === "dark" 
		? setTheme("light")
		: setTheme('dark')
	};
  return (
    <div>
      {theme === "dark" ? (
        <div>
          <img
            className="header-img"
            src="images/bg-desktop-dark.jpg"
            alt="header-banner"
          />
          <img
            className="theme-color"
            src="images/icon-sun.svg"
            alt="Theme-color"
            onClick={changeTheme}
          />
        </div>
      ) : (
        <div>
          <img
            className="header-img"
            src="images/bg-desktop-light.jpg"
            alt="header-banner"
          />
          <img
            className="theme-color"
            src="images/icon-moon.svg"
            alt="Theme-color"
            onClick={changeTheme}
          />
        </div>
      )}
      <h1 className="header-title">TODO</h1>
    </div>
  );
};

export default Header;
