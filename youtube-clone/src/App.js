import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomandedVideos from "./RecomandedVideos";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/*Header*/}
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        <RecomandedVideos />
        {/* Recomanded Video*/}
      </div>
    </div>
  );
}

export default App;
