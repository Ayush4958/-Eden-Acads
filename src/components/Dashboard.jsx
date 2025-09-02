import React, { useState } from 'react';
import Quiz from './quiz';
import Progress from './progress';
import DashNav from './DashNav';
import SearchFilter from './SearchFilter';
import MyLearning from './MyLearning';
import AllLearnings from './AllLearnings';
import { Heart, Search, Clock, TrendingUp, BookOpen, Play, Award, Star } from 'lucide-react';

function Dashboard() {

  const [activeTab, setActiveTab] = useState('all-learning');
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All Difficulties');

  const courses = [
    {
      id: 1,
      title: 'React Development',
      progress: 75,
      topicsCompleted: 9,
      totalTopics: 12,
      difficulty: 'Intermediate',
      color: 'blue',
      icon: '⚛️',
      bgGradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      progress: 100,
      topicsCompleted: 8,
      totalTopics: 8,
      difficulty: 'Beginner',
      color: 'yellow',
      icon: '📜',
      bgGradient: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 3,
      title: 'TypeScript',
      progress: 40,
      topicsCompleted: 4,
      totalTopics: 10,
      difficulty: 'Intermediate',
      color: 'blue',
      icon: '🔷',
      bgGradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 4,
      title: 'Node.js Backend',
      progress: 60,
      topicsCompleted: 6,
      totalTopics: 10,
      difficulty: 'Advanced',
      color: 'green',
      icon: '🟢',
      bgGradient: 'from-green-500 to-green-600'
    },
    {
      id: 5,
      title: 'Python Basics',
      progress: 85,
      topicsCompleted: 11,
      totalTopics: 13,
      difficulty: 'Beginner',
      color: 'blue',
      icon: '🐍',
      bgGradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 6,
      title: 'Data Structures',
      progress: 25,
      topicsCompleted: 3,
      totalTopics: 12,
      difficulty: 'Advanced',
      color: 'purple',
      icon: '🔢',
      bgGradient: 'from-purple-500 to-purple-600'
    }
  ];

  const toggleFavorite = (courseId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(courseId)) {
        newFavorites.delete(courseId);
      } else {
        newFavorites.add(courseId);
      }
      return newFavorites;
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-orange-100 text-orange-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getButtonStyle = (progress) => {
    if (progress === 100) return 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700';
    return 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700';
  };

  const getButtonText = (progress) => {
    return progress === 100 ? 'Completed' : 'Continue';
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All Difficulties' || course.difficulty === difficultyFilter;
    const matchesTab = activeTab === 'all-learning' || (activeTab === 'my-learning' && favorites.has(course.id));
    return matchesSearch && matchesDifficulty && matchesTab;
  });

  return (
    <>
       <div className="min-h-screen bg-[linear-gradient(to_right,_#4b79a1,_#283e51)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#FFFAFA] to-[#F2F2F2] bg-clip-text text-transparent mb-3">
            Student's Dashboard
          </h1>
          <p className="text-lg text-gray-200">Welcome back! Continue your learning journey or explore new topics.</p>
        </div>

        {/* Navigation Tabs */}
        {<DashNav activeTab={activeTab} setActiveTab={setActiveTab} />}

        {/* Search and Filter */}
        {<SearchFilter activeTab={activeTab} searchTerm={searchTerm} setSearchTerm={setSearchTerm} difficultyFilter={difficultyFilter} setDifficultyFilter={setDifficultyFilter} />}

        {/* Content */}
        {(activeTab === 'all-learning' || activeTab === 'my-learning') && (
          <>
            {<MyLearning activeTab={activeTab} favorites={favorites}/>}
            {<AllLearnings filteredCourses={filteredCourses} favorites={favorites} toggleFavorite={toggleFavorite} getDifficultyColor={getDifficultyColor} getButtonStyle={getButtonStyle} getButtonText={getButtonText} />}
          </>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <Progress />
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <Quiz />
        )}

      </div>
    </div>
    </>
  )
}

export default Dashboard
