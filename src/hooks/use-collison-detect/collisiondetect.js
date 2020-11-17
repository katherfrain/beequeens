import {useState} from 'react';

function rectIntersect(x1, y1, width1, height1, x2, y2, height2, width2) {
    if(x2 > width1 + x1 || x1 > width2 + x2 || y2 > height1 + y1 || y1 > height2 + y2) {
        return false
    } 
    return true
}

export default function CollisionDetector(crasher, crashee){
    const [isColliding, setIsColliding] = useState(false);

    if (rectIntersect(crasher.x, crasher.y, crasher.width, crasher.height, crashee.x, crashee.y, crashee.height, crashee.width)) {
        crasher.isColliding = true;
        crashee.isColliding = true;
    }

}