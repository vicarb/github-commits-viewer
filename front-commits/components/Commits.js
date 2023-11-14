'use client'
import React, { useEffect, useState } from 'react';

export default function Commits() {
  const [commits, setCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCommits() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:3000/commits');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("this is",data);
        setCommits(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCommits();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
             <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
           </div>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading commits: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Commit History</h1>
      {/* <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">{repoName}</h1> */}
      <ul>
        {commits.map(commit => (
          <li key={commit.sha} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <p className="font-semibold text-lg text-blue-600">{commit.message}</p>
            <p className="text-gray-600">Author: {commit.author}</p>
            <p className="text-gray-700 text-sm font-medium">Date: {new Date(commit.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <a href={commit.url} className="text-blue-400 hover:text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
}