import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, BookOpen, GraduationCap, Star, Lightbulb, Trophy, Rocket } from 'lucide-react';

const HomePage = () => {
  const floatingObjects = [
    { icon: BookOpen, delay: '0s', duration: '6s', path: 'M10,200 Q250,50 400,180 T800,100' },
    { icon: GraduationCap, delay: '1s', duration: '8s', path: 'M800,300 Q550,150 300,280 T50,200' },
    { icon: GraduationCap, delay: '1s', duration: '8s', path: 'M800,300 Q550,150 300,280 T50,200' },
    { icon: Star, delay: '2s', duration: '7s', path: 'M50,100 Q300,250 600,120 T900,300' },
    { icon: Lightbulb, delay: '3s', duration: '9s', path: 'M900,150 Q650,300 400,170 T100,250' },
    { icon: Trophy, delay: '4s', duration: '6s', path: 'M200,400 Q500,200 750,350 T950,250' },
    { icon: Rocket, delay: '1.5s', duration: '8s', path: 'M700,50 Q400,200 150,80 T50,400' },
    { icon: Trophy, delay: '4s', duration: '6s', path: 'M200,400 Q500,200 750,350 T950,250' },
    { icon: Rocket, delay: '1.5s', duration: '8s', path: 'M700,50 Q400,200 150,80 T50,400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Floating Educational Objects */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          {floatingObjects.map((obj, index) => {
            const IconComponent = obj.icon;
            return (
              <g key={index}>
                <path
                  id={`path-${index}`}
                  d={obj.path}
                  fill="none"
                  stroke="none"
                />
                <foreignObject width="24" height="24">
                  <div
                    className="text-white animate-pulse"
                    style={{
                      animation: `float-${index} ${obj.duration} ease-in-out infinite`,
                      animationDelay: obj.delay
                    }}
                  >
                    <IconComponent size={20} />
                  </div>
                </foreignObject>
                <animateMotion
                  dur={obj.duration}
                  repeatCount="indefinite"
                  begin={obj.delay}
                >
                  <mpath href={`#path-${index}`} />
                </animateMotion>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-md rounded-full  my-6 border border-white/20 shadow-sm">
              <GraduationCap className="text-yellow-300 mr-2" size={32} />
              <span className="text-white font-semibold text-lg">EduPlatform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Journey to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse">
                Academic Excellence
              </span>
              Starts Here
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Unlock your potential, conquer your goals, and transform your dreams into reality. 
              Every expert was once a beginner, every pro was once an amateur, every icon was once an unknown.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl transition-all duration-300 transform hover:scale-105">
              <BookOpen className="text-blue-300 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">Interactive Learning</h3>
              <p className="text-gray-300">Engage with dynamic content that adapts to your learning style</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl transition-all duration-300 transform hover:scale-105">
              <Trophy className="text-yellow-300 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">Track Progress</h3>
              <p className="text-gray-300">Monitor your achievements and celebrate every milestone</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl transition-all duration-300 transform hover:scale-105">
              <Rocket className="text-pink-300 mx-auto mb-4" size={40} />
              <h3 className="text-white font-semibold text-lg mb-2">Accelerate Growth</h3>
              <p className="text-gray-300">Fast-track your learning with personalized study paths</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <NavLink to='/dashboard' className="flex flex-row items-center">
              <Rocket className="mr-2" size={20} />
              Start Your Journey
              </NavLink>
            </button>
            
            <a
              href="https://github.com/ayush4958/-Eden-Acads"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-gray-600"
            >
              <Github className="mr-2" size={20} />
              View on GitHub
            </a>
          </div>

          {/* Motivational Quote */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl">
            <Lightbulb className="text-yellow-300 mx-auto mb-4 animate-pulse" size={36} />
            <blockquote className="text-xl md:text-2xl text-white italic font-medium leading-relaxed drop-shadow-sm">
              "Success is not final, failure is not fatal: it is the courage to continue that counts. 
              Your education is the most powerful weapon you can use to change the world."
            </blockquote>
            <p className="text-gray-200 mt-4 font-medium">— Inspired by Winston Churchill & Nelson Mandela</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-8 px-4">
        <div className="flex items-center justify-center text-gray-400 text-sm">
          <Star className="mr-2 text-yellow-400" size={16} />
          Made with passion for students worldwide
          <Star className="ml-2 text-yellow-400" size={16} />
        </div>
      </div>

      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.2); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(360deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(-90deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;