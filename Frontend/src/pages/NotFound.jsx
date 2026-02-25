import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  // We use this to grab the exact path the user tried to visit
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 flex flex-col justify-center items-center selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* Main Error Block - Vercel Style */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-white">404</h1>
        
        {/* Divider Line */}
        <div className="hidden sm:block h-16 w-px bg-gray-800"></div>
        <div className="sm:hidden w-16 h-px bg-gray-800 my-2"></div>
        
        <p className="text-xl sm:text-2xl font-light text-gray-400 tracking-tight">
          This page could not be found.
        </p>
      </div>

      {/* Developer Context / Terminal Accent */}
      <div className="mt-12 flex flex-col items-center opacity-90">
        <div className="bg-[#111] border border-gray-800 rounded-md px-4 py-2.5 font-mono text-sm text-gray-400 shadow-inner flex items-center gap-3">
          <span className="text-indigo-400 font-semibold">GET</span>
          <span>{location.pathname}</span>
          <span className="w-2 h-4 bg-gray-600 animate-pulse inline-block ml-1"></span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors border border-transparent hover:bg-[#1a1a1a]"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 rounded-md text-sm font-medium bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;