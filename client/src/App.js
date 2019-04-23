import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, About, Studies, MyStudies } from "./pages";
import StudyManagement from './components/StudyManagement'
import StudyDescription from './components/StudyDescription'
import AddStudy from './components/AddStudy'

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <a href="/">
          <img 
            src="blockchainlab-logo.svg"
            class="blockchainlab_logo"
            alt="blockchainlab_logo"
          />
        </a>
        <Route exact path="/" component={Home} />
        <Route path={`/add_study`} component={AddStudy} />
        <Route path={`/studies/:studyId`} component={StudyDescription} />
        <Route path={`/my_studies/:studyId`} component={StudyManagement} />
        <Route path="/about" component={About} />
        <Route path="/studies" component={Studies} />
        <Route path="/my_studies" component={MyStudies} />
      </div>
    </Router>
  );
}

export default App;
