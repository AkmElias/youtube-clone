import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomandedVideos from "./RecomandedVideos";
import "./App.css";
import SearchPage from "./SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:search">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              <SearchPage />
              {/* Recomanded Video*/}
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              <RecomandedVideos />
              {/* Recomanded Video*/}
            </div>
          </Route>
        </Switch>
      </Router>
      {/*Header*/}
    </div>
  );
}

export default App;
