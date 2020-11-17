import React, {PureComponent} from 'react';
import Matter from 'matter-js';
import honeyCombPlatform from '../images/platform.svg';
import {collisionCategories} from './constants'


class NonInteractableGameObject {

    constructor(context, x, y, vx, vy) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;

        this.isColliding = false;
    }
}

function detectCollisions() {
    let crasher;
    let crashee;

    for(let i = 0; i < NonInteractableGameObject.length; i++) {
        console.log('hmm')
    }
}
export default class Platform extends NonInteractableGameObject{
    render() {
        return (
            <img
            src={honeyCombPlatform}
            alt='honeycomb platform -- not sticky'
            />
        )
    }
}