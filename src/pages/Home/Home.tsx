import React from "react";
import ChatContainer from "../../components/ChatContainer"; // ✅ Correct import path

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ChatContainer /> {/* ✅ Render ChatContainer */}
    </div>
  );
};

export default Home;
