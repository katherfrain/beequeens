// var express = require('express');
// var path = require('path')
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var app = express();
// app.use(logger('dev'))
// app.use(express.json());
// app.use(express.urlencoded({extended: false}))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'client/build')))

// const gameRouter = require('./routes/gameWindow')
// const scoreRouter = require('./routes/scoreRouter')

// app.use('/game/v1/gameWindow', gameRouter)
// app.use('/game/v1/scores', scoreRouter)

// module.exports = app; 





import AboutMe from './components/About-Me.js'
import PersonalBest from './components/Personal-Records.js';
import TopScores from './components/Top-Scores.js'
import HomePage from './components/Home.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
<div id="bq-Background">
  <div>
    <h1><Link to='/' id="title">Bee Queen: Escape the Hive</Link></h1>
    <h1 className="jiggle">(?)</h1>
  </div>

  <nav id="navbar">
      <Link to='/about-bee'>About Bee</Link>
      <Link to='/personal-beest'>Personal Best</Link>
      <Link to='/top-scores'>Top Scores</Link> 
  </nav>


  <div className="content">
    <Switch>
      <Route path="/" exact>
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
 
    </Switch>
    </div>
  
  </div>
  );
}

export default App;
