// src/components/DarkModeToggle.js

import React from 'react';

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="dark-mode-toggle">
      <input type="checkbox" id="dark-mode-toggle" checked={darkMode} onChange={onToggle} />
      <label htmlFor="dark-mode-toggle">Dark Mode</label>
    </div>
  );
};

export default DarkModeToggle;
