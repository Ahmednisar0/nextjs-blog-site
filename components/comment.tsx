'use client'
import { useState } from 'react';

interface Comment {
  name: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  // Handle comment form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, text: comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="mt-12 bg-opacity-50 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-yellow-200 mb-4">Leave a Comment</h2>
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-white">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment here"
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-yellow-200 mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-md">
                <h4 className="font-semibold text-white">{comment.name}</h4>
                <p className="text-gray-200">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
