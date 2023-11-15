'use client'
import React, { useState, useEffect } from 'react';
import Commits from '../Commits/Commits';

const Landing = () => {
    const [nightMode, setNightMode] = useState(false);
  
    useEffect(() => {
      const mode = localStorage.getItem('nightMode') === 'true';
      setNightMode(mode);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('nightMode', nightMode);
    }, [nightMode]);
  
    const toggleNightMode = () => setNightMode(!nightMode);
  
    return (
      <div className={nightMode ? 'dark' : ''}>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
          <header className="bg-indigo-700 dark:bg-indigo-900 text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="font-bold text-3xl">GitHub Commits Viewer</h1>
              <button 
              onClick={toggleNightMode} 
              className={`px-5 py-2.5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                nightMode ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-300' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300'
              }`}
            >
              {nightMode ? '🌞 Light Mode' : '🌙 Night Mode'}
            </button>
            </div>
          </header>
  
          <main className="flex-grow container mx-auto p-4">
            <Commits />
          </main>
  
          <footer className="bg-gray-700 dark:bg-gray-900 text-white text-center py-4">
            <div className="container mx-auto">
              © 2023 My GitHub Viewer. All Rights Reserved.
            </div>
          </footer>
        </div>
      </div>
    );
  };
  
  export default Landing;