import React from 'react'

const Projects = ({ id }: { id: string }) => {
  return (
    <div className="bg-black text-white p-6 shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">Projects</h2>
      <p className="text-sm text-gray-400 mb-2">Project ID: {id}</p>
      <input
        type="text"
        placeholder="Enter something..."
        className="w-full px-4 py-2 mb-4 rounded-lg bg-gray-900 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200">
        Submit
      </button>
    </div>
  );
};

export default Projects;
