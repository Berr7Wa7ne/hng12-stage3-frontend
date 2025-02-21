import React from "react";
import "./index.css";
import Home from "./../src/pages/Home/Home"; // ✅ Import Home page

const App: React.FC = () => {
  return (
    <div>
      <Home /> {/* ✅ Render Home Page */}
    </div>
  );
}

export default App;
