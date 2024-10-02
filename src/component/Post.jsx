import { MessageSquare, Award, Share, MoreHorizontal } from 'lucide-react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from 'react';
import Comment from './Comment';

const Post = ({ post }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [showComments, setShowComments] = useState(true); 

  return (
    <div className="flex gap-2 p-4 bg-white rounded-md shadow">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className='rounded-2xl h-6 w-6'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.0miyOJMoCeGLhaeCAYQiDwHaHa&pid=Api&P=0&h=180' alt="User Avatar" />
          </span>
          <span className="font-medium">{post.author}</span>
          <span>·</span>
          <span>{post.timeAgo}</span>
        </div>
        <p className="mt-2 ml-8 text-lg">{post.content}</p>
        <div className="flex gap-4 mt-4">
          <button 
            className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 rounded p-1"
            onClick={() => setShowComments(!showComments)} 
          >
            <CiCircleMinus size={20} />
          </button>
          <div className='flex justify-center items-center'>
            <button 
              className='flex items-center text-gray-500 hover:bg-gray-100 rounded p-1' 
              onClick={() => setUpvotes(upvotes + 1)} 
            > 
              <BiUpArrowAlt size={20} /> 
            </button>
            <p>{upvotes}</p> 
            <button 
              className='flex items-center text-gray-500 hover:bg-gray-100 rounded p-1' 
              onClick={() => setUpvotes(Math.max(0, upvotes - 1))} 
            >
              <BiDownArrowAlt size={20} />
            </button>
          </div>
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 rounded p-1">
            <MessageSquare size={20} /> Reply
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 rounded p-1">
            <Award size={20} /> Award
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 rounded p-1">
            <Share size={20} /> Share
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:bg-gray-100 rounded p-1">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        {showComments && (
          <div className="ml-8 mt-4">
            <h3 className="text-lg font-semibold">Comments:</h3>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
