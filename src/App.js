import './App.css';
import React from 'react';

import AboutMe from './components/About-Me.js'
import PersonalBest from './components/Personal-Records.js';
import TopScores from './components/Top-Scores.js'
import HomePage from './components/Home.js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/">
          <HomePage />
      </Route>

      <Route path="/about-bee">
          <AboutMe />
      </Route>
 
      <Route path="/personal-beest">
        <PersonalBest />
      </Route>
 
      <Route path="/top-scores">
        <TopScores />
      </Route>
 
    </Router>
  );
}

export default App;
