import React from 'react'
import { Heart, Search, Clock, TrendingUp, BookOpen, Play, Award, Star } from 'lucide-react';

function DashNav({activeTab, setActiveTab}) {

  return (
    <div>
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 sm:p-2 inline-flex w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setActiveTab('all-learning')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 sm:gap-4 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
              activeTab === 'all-learning'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <BookOpen size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden sm:inline">All Learning</span>
            <span className="sm:hidden">All</span>
          </button>
          <button
            onClick={() => setActiveTab('my-learning')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 sm:gap-4 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
              activeTab === 'my-learning'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden sm:inline">My Learning</span>
            <span className="sm:hidden">Mine</span>
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 sm:gap-4 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
              activeTab === 'progress'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px]" />
            Progress
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 sm:gap-4 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
              activeTab === 'quiz'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Award size={16} className="sm:w-[18px] sm:h-[18px]" />
            Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashNav