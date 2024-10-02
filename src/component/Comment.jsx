import { useState } from "react";
import { MessageSquare, Award, Share, MoreHorizontal } from 'lucide-react';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import Reply from "./Reply";

const Comment = ({ comment, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [upvotes, setUpvotes] = useState(comment.votes || 0); 

  return (
    <div className={`ml-${level > 0 ? '8' : '0'} mt-4`}>
      <div className="flex gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className='rounded-2xl h-7 w-7'>
              <img src="https://tse3.mm.bing.net/th?id=OIP.DxpcKmgZZtv0kMLJpaTJLgHaHa&pid=Api&P=0&h=180" alt="User Avatar" />
            </span>
            <span className="font-medium">{comment.author}</span>
            <span>·</span>
            <span>{comment.timeAgo}</span>
          </div>
          <p className="mt-2">{comment.content}</p>
          <div className="flex gap-4 mt-2">
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
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <button aria-expanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 mt-2 text-sm text-black hover:underline"
        >
          {isExpanded ? 'Hide replies' : (
            <div className="flex justify-center items-center gap-1">
              <CiCirclePlus size={20} /> {comment.replies.length} more replies
            </div>
          )}
        </button>
       
    
      )}
      {isExpanded && comment.replies && (
        <div className="ml-4">
          {comment.replies.map(reply => (
            <Reply key={reply.id} reply={reply} />  
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
