import React from 'react';
import { MessageSquare, Award, Share, MoreHorizontal } from 'lucide-react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { CiCircleMinus } from "react-icons/ci";
import { useState } from 'react';

const Reply = ({ reply }) => {
    const [upvotes, setUpvotes] = useState(0);
  const [showComments, setShowComments] = useState(true); 
  return (
    <div className="reply mt-3">
         <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className='rounded-2xl h-6 w-6'>
            <img src='https://tse2.mm.bing.net/th?id=OIP.0miyOJMoCeGLhaeCAYQiDwHaHa&pid=Api&P=0&h=180' alt="User Avatar" />
          </span>
          <span className="user font-bold">{reply.author}</span>
     
      <span>{reply . timeAgo}</span>
          
          
        </div>
        <div className="content mt-2">{reply.content}</div>
      
      <div className="flex gap-4 mt-4">
          
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
    </div>
  );
};

export default Reply;
