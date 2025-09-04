import React from 'react'
import { useEffect , useState } from 'react';
import { Heart } from 'lucide-react';
import { supabase } from '../supabaseClient';

function MyLearning( {activeTab , favorites , setFavorites} ) {

const [myCourses, setMyCourses] = useState([]);
const fetchMyLearning = async () => {

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      console.warn("User not logged in");
      return;
    }

    const { data, error } = await supabase
      .from('favourites')
      .select('*')
      .eq('user_id', user.id); // only fetch this user's favorites

    if (error) {
      console.error('Error fetching favorites:', error);
    } else {
      setMyCourses(data);
    }
  };

useEffect(() => {
fetchMyLearning();
});


  return (
  <>
    {activeTab === 'my-learning' && (
      <>
        {myCourses.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto text-gray-300 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
            <p className="text-gray-500">Add courses to your favorites to see them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {myCourses.map((course) => (
              <div key={course.id} className="relative bg-white rounded-3xl shadow-lg border overflow-hidden p-6">
                <div className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-r ${course.bgGradient} flex items-center justify-center text-2xl`}>
                  {course.icon || '📘'}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{course.difficulty}</p>
                <div className="mb-2">
                  <span className="text-sm text-gray-600">Progress: {course.progress}%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className={`h-2 bg-gradient-to-r ${course.bgGradient}`} style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {course.topicsCompleted}/{course.totalTopics} topics completed
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    )}
  </>
);
}

export default MyLearning
