import React, { useState, useEffect } from "react";
import '../../theme/themes.css';
import './Toggle.css';

import { BsFillLightbulbFill } from "react-icons/bs";

function Toggle() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="toggle">
        <BsFillLightbulbFill size={30} onClick={toggleTheme} />
    </div>
  );
}

export default Toggle;