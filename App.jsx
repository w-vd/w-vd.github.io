import React, { useState, useEffect } from 'react';

// Main App component for the GitHub Pages site
const App = () => {
  // State to manage the currently active section (e.g., 'home', 'about')
  // 'home' is set as the initial active section
  const [activeSection, setActiveSection] = useState('home');

  // Effect hook to handle initial setup or any side effects.
  useEffect(() => {
    console.log("App component mounted or activeSection changed:", activeSection);
  }, [activeSection]); // Re-run effect if activeSection changes

  // Helper function to render content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow-lg">
              Welcome to My GitHub Page!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              This is the home section of your personal website. Feel free to explore and learn more about me.
              You can customize this content to introduce yourself, showcase your projects, or share your thoughts.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Navigate to the 'About' section to find out more!
            </p>
          </div>
        );
      case 'about':
        return (
          <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow-lg">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Welcome to my page! 
            </p>
            <p className="mt-4 text-base text-gray-600">
              I love creating user-friendly and efficient applications. Stay tuned for more updates!
            </p>
          </div>
        );
      default:
        return (
          <div className="text-center p-6 text-gray-700">
            <p className="text-xl">Content not found.</p>
          </div>
        );
    }
  };

  return (
    // Main container for the entire application, using Inter font
    // Tailwind CSS and Inter font CDNs are now in index.html
    <div className="min-h-screen bg-gray-50 font-inter text-gray-900 flex flex-col">

      {/* Navigation Bar */}
      <nav className="bg-indigo-600 p-4 shadow-lg rounded-b-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Site Title/Logo */}
          <div className="text-white text-2xl font-bold mb-4 md:mb-0">
            My Portfolio
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {/* Home Button */}
            <button
              onClick={() => setActiveSection('home')}
              className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ease-in-out
                ${activeSection === 'home'
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'bg-indigo-500 text-indigo-100 hover:bg-indigo-700 hover:text-white'
                } focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-75`}
            >
              Home
            </button>

            {/* About Button */}
            <button
              onClick={() => setActiveSection('about')}
              className={`px-5 py-2 rounded-lg font-semibold transition duration-300 ease-in-out
                ${activeSection === 'about'
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'bg-indigo-500 text-indigo-100 hover:bg-indigo-700 hover:text-white'
                } focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-75`}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 transform transition-transform duration-300 hover:scale-[1.005]">
          {/* Render the content based on the active section */}
          {renderContent()}
        </div>
      </main>

      {/* Footer (Optional) */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8 rounded-t-xl">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My GitHub Page. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App; // Export the App component as default
