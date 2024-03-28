// JavaScript code for toggling dark mode

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the 'dark' class on the body element
    document.body.classList.toggle('dark');
  
    // Store the user's dark mode preference in local storage
    const isDarkModeEnabled = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkModeEnabled);
  }
  
  // Function to initialize dark mode based on user preference
  function initializeDarkMode() {
    // Check if user's dark mode preference is stored in local storage
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
  
    // If dark mode preference is enabled, add 'dark' class to body element
    if (isDarkModeEnabled) {
      document.body.classList.add('dark');
    }
  }
  
  // Call initializeDarkMode function when the page loads
  window.addEventListener('DOMContentLoaded', initializeDarkMode);
  
  // Example: Add event listener to a button to toggle dark mode when clicked
  const toggleDarkModeButton = document.getElementById('toggle-dark-mode-button');
  toggleDarkModeButton.addEventListener('click', toggleDarkMode);
  