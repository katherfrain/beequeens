import React from 'react';
import '../App.css'
import './Home.css'
import { Link } from 'react-router-dom';
import queenbee from './queenbee.svg'

class QueenBee extends React.Component{
    constructor(props){
        super(props)
        this.state = {isAlive: true}
        
    }

}

function Homepage(){
    return (
    <div id="gamescreen">
        <div id="hivebarrier">
            <img src={queenbee} id="QueenBee"></img>
    </div>
  </div>
    )
}
export default Homepage; 
