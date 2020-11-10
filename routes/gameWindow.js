const express = require('express');
const router = express.Router();

router.put('/:')
function GameWindow(){
    return (
    <>
    <div id="bq-Background">
        <h1>Bee Queen: Escape the Hive</h1>
        <h1 class="jiggle">(?)</h1>
    </div>

    <nav id="navbar">
        <Link to={AboutMe}>About Bee</Link>
        {/* <Link to={PersonalBest}>Personal Best</Link>
        <Link to={TopScores}>Top Scores</Link> */}
    </nav>

    <Iframe id="game" url="/gamestart">

    </Iframe>
    </>
    )
}
export default GameWindow; 
