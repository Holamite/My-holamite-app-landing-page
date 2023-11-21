import React, { useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="toggler--slider" onClick={toggleDarkMode}>
      <div className="toggler--slider--circle"></div>
    </div>
  );
};

export default Toggle;
