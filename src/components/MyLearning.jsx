import React from 'react'
import { Heart } from 'lucide-react';


function MyLearning( {activeTab , favorites} ) {
  return (
    <>
      {activeTab === 'my-learning' && favorites.size === 0 && (
              <div className="text-center py-16">
                <Heart className="mx-auto text-gray-300 mb-4" size={64} />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No favorites yet</h3>
                <p className="text-gray-500">Add courses to your favorites to see them here</p>
              </div>
            )}
    </>
  )
}

export default MyLearning
