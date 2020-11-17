import { useState } from 'react';


export default function useWalk(){
    const [position, setPosition] = useState({x:0, y:0});
    const [dir, setDir] = useState(0);
    function walkDirection(dir) {
        setDir(dir)
    }

    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    }

    const stepSize = 16

    const modifier = {
        down: {x: 0, y: stepSize},
        left: {x: -stepSize, y: 0},
        right: {x: stepSize, y:0},
        up: {x:0, y: -stepSize}
    }
    
    function walk(dir) {
        setDir(prev => {
            if(directions[dir] === prev) move(dir)
            return directions[dir]
        })
    }
    function move(dir){
        setPosition(prev => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y
        }))
    }

    return {
        walkDirection, dir, position, move  
    }
}
