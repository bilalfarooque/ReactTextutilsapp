import React, { useState, useEffect } from "react";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, [isDarkMode]);
  //second parameter is a array which says that to render on each time the value isDarkmode is changed.

  return (
    <>
      {/* <button className="dark-mode-button" onClick={toggleMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button> */}

      <div className="form-check form-switch text-light my-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleMode}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          DarkMode
        </label>
      </div>
    </>
  );
};

export default DarkModeButton;
