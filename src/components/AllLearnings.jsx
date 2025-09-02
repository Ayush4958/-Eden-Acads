import React from 'react'
import { Heart, Search, Clock, TrendingUp, BookOpen, Play, Award, Star } from 'lucide-react';

function AllLearnings( {filteredCourses , favorites , toggleFavorite , getDifficultyColor ,getButtonStyle , getButtonText}) {
  return (
    <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="group relative">
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden transform hover:-translate-y-2 hover:rotate-1">
                    {/* Gradient Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-50"></div>
                    
                    {/* Top Section with Icon and Favorite */}
                    <div className="relative p-8 pb-4">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.bgGradient} flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          {course.icon}
                        </div>
                        <button
                          onClick={() => toggleFavorite(course.id)}
                          className={`p-3 rounded-2xl transition-all duration-300 ${
                            favorites.has(course.id)
                              ? 'bg-red-50 text-red-500 shadow-md ring-2 ring-red-100'
                              : 'bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 hover:shadow-md'
                          }`}
                        >
                          <Heart 
                            size={20} 
                            className={favorites.has(course.id) ? 'fill-current' : ''} 
                          />
                        </button>
                      </div>

                      {/* Course Title and Difficulty */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(course.difficulty)} shadow-sm`}>
                            {course.difficulty}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500">
                            <BookOpen size={14} />
                            <span className="text-sm">{course.totalTopics} lessons</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Section */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 bg-gradient-to-r ${course.bgGradient} transition-all duration-500`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">
                            {course.topicsCompleted}/{course.totalTopics} topics
                          </span>
                          <span className="text-xs text-gray-500">
                            {course.totalTopics - course.topicsCompleted} remaining
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button className={`flex-1 py-3 px-4 rounded-xl text-white font-semibold transition-all duration-200 ${getButtonStyle(course.progress)} shadow-lg hover:shadow-xl transform hover:scale-105`}>
                          <span className="flex items-center justify-center gap-2">
                            <Play size={16} />
                            {getButtonText(course.progress)}
                          </span>
                        </button>
                        <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                          Quiz
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
    </>
  )
}

export default AllLearnings
