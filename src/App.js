import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Wellness from "./pages/projects/Wellness";
import Taxi from "./pages/projects/Taxi";

import { Route } from "react-router-dom";
import ProjectsSubpage from "./components/ProjectsSubpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={ProjectsSubpage} />
      <Route exact path="/projects/wellness-case-study" component={Wellness} />
      <Route exact path="/projects/taxi-case-study" component={Taxi} />
    </div>
  );
}

export default App;
