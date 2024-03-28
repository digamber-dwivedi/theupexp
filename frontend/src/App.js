// App.js
import React, { useState } from 'react';
import './App.js'; // Import global CSS styles
import ArticleList from './components/ArticleList';
import LoginForm from './components/LoginForm';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  // Sample article data
  const [articles] = useState([
    { _id: 1, title: 'Article 1', content: 'Content for Article 1' },
    { _id: 2, title: 'Article 2', content: 'Content for Article 2' },
    { _id: 3, title: 'Article 3', content: 'Content for Article 3' }
  ]);

  // Sample login function
  const handleLogin = (username, password) => {
    // Perform authentication logic here
    console.log('Logging in with:', username, password);
  };

  // Sample dark mode toggle function
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>CMS App</h1>
        <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
      </header>
      <main>
        <ArticleList articles={articles} />
        <LoginForm onLogin={handleLogin} />
      </main>
    </div>
  );
};

export default App;
