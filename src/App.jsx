import Comment from "./component/Comment";
import Post from "./component/Post";
import { sampleData } from "./component/SampleData";

const App = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen">
      <Post post={sampleData.post} />
      
    </div>
  );
};

export default App;