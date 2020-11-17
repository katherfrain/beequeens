import {Loop, Stage, Sprite, KeyListener} from 'react-game-kit'
import React, {Component} from 'react';
import QueenBee from './Queen'

export default class Game extends Component{
    constructor(props) {
        super(props);
        this.keyListener = new KeyListener();
    }
    componentDidMount() {
    this.keyListener.subscribe([
        this.keyListener.LEFT,
        this.keyListener.UP,
        this.keyListener.DOWN,
        this.keyListener.RIGHT,
    ])
};

    render() {
        return (
            <Loop>
                <Stage id="stage"> 
                
                    <QueenBee />

                </Stage>
            </Loop>
        )
    }
}