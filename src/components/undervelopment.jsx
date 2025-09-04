import React from 'react';
import { NavLink } from 'react-router-dom';


const UnderDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center">
        {/* Main Container */}
        <div className="bg-slate-800/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-700/50 p-8 sm:p-12">
          
          {/* Construction Icon */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full flex items-center justify-center">
              <svg 
                className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Under Development
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-6">
            We're working hard to bring you something amazing!
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
            This section is currently being developed with exciting new features. 
            Stay tuned for updates as we build something incredible for you.
          </p>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="bg-slate-700/50 rounded-full h-3 w-full max-w-md mx-auto overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-orange-400 h-full rounded-full animate-pulse" 
                   style={{ width: '65%' }}>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-2">Development Progress: 65%</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>{alert("We will notify you....")}} className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800">
              Notify Me When Ready
            </button>

     <NavLink to="/">
            <button className="w-full sm:w-auto px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-200 border border-slate-600">
              Back to Home Page
               
            </button>
             </NavLink>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Active Development</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>Expected: Q2 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Stay Updated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-500/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-purple-500/10 rounded-full blur-lg animate-ping hidden md:block"></div>
      </div>
    </div>
  );
};

export default UnderDevelopment;