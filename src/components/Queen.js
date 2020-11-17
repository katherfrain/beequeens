import React from 'react';
import queenbee from './queenbee.svg'
import useKeyPress from '../hooks/use-key-press/index'
import useWalk from '../hooks/use-walk/usewalk'
import CollisionDetector from '../hooks/use-collison-detect/collisiondetect'


export default function QueenBee() {
    const {move, position} = useWalk()

    useKeyPress((e)=> {
        e.preventDefault()
        move(e.key.replace("Arrow", "").toLowerCase());

        const dir = e.key.replace("Arrow", "").toLowerCase();
        console.log(dir)

    }) 
    if(CollisionDetector()) {
        return (
            <img id="queenbee"
            src={queenbee}
            alt='queenbee'
            height={200}
            width={200}
            style ={{
                    transform: `translate(-${position.x}px, -${position.y}px)`
            }}
        />)
     }

     return (
        <img id="queenbee"
        src={queenbee}
        alt='queenbee'
        height={200}
        width={200}
        style ={{
            transform: `translate(${position.x}px, ${position.y}px)`
        }}
     />)
    }

    







// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {Body, Sprite} from 'react-game-kit';



// export default function QueenBee(data) {
//      const {y, x, h} = data; 
     
//      return (  
//         <img 
//         style={{
//             alt: 'queen bee',
//             display: 'inline-block',
//             height: `${h}px`,
//             src:'../components/queenbee.svg',
//         }}
//           />
    
//     )

// }
// import Matter from 'matter-js'
// export default class QueenBee extends Component{
//     static propTypes = {
//         keys: PropTypes.object,
//         store: PropTypes.object,
//     }
    
//     static contextTypes = {
//         engine: PropTypes.object,
//         scale: PropTypes.number,
//     }
//     constructor(props){
//         super(props)

//         this.loopID = null;
//         this.lastX = 0;

//         this.state = { 
//             loop: false,
//             spritePlaying: true,
//         }

//         this.handlePlayStateChanged = this.handlePlayStateChanged.bind(this)
//         this.update = this.update.bind(this)

//         this.flyUp = this.flyUp.bind(this);
//         this.flyDown = this.flyDown.bind(this);
//         this.flyLeft = this.flyLeft.bind(this);
//         this.flyRight = this.flyRight.bind(this);
//         this.checkKeys = this.checkKeys.bind(this)

//     }

//     flyLeft(body, x) {
//         Matter.Body.setVelocity(body, {x, y:0})
//     }
//     flyUp(body, y) {
//         Matter.Body.setVelocity(body, {x:0, y})
//     }
//     flyDown(body, y){
//         Matter.Body.setVelocity(body, {x:0, y})
//     }
//     flyRight(body, y){
//         Matter.Body.setVelocity(body, {x:0, y})
//     }
//     getRenderPosition() {
//         const {characterPosition, stageX} = this.props.store;
//         const {scale} = this.context;
//         const {x, y} = characterPosition;
//         const targetX = x + stageX;

//         return {
//             position: 'absolute',
//             transform: `translate(${targetX*scale}px, ${y *scale}px)`,
//             transformOrigin: 'left top'
//         }
//     }

//     render() {
//         const x = this.props.store.characterPosition.x;
//         return (
//             <div style = {this.getRenderPosition()}>
//                     <Sprite 
//                     onPlayStateChanged ={this.handlePlayStateChanged}
//                     src="../components/beequeen.png"
//                     scale = {this.context.scale}
//                     />
            
//             </div>
//         )
//     }

//     // componentDidMount() {
//     //     Matter.Events.on(this.context.engine, 'afterUpdate', this.update);
//     // }
//     // componentWillUnmount() {
//     //     Matter.Events.off(this.context.engine, 'afterUpdate', this.update);
//     // }
    
//     handlePlayStateChanged(state) {
//         this.setState({
//             spritePlaying: state ? true: false
//         })
//     }

//     checkKeys(moveLeft, moveRight, moveUp, moveDown) {
//         const {keys, store} = this.props;
//         const {body} = this.body;

//         if(keys.isDown(keys.DOWN)){
//             return this.flyDown()
//         }
//         else if(keys.isDown(keys.UP)){
//             return this.flyUp()
//         }
//         else if(keys.isDown(keys.LEFT)){
//             return this.flyLeft()
//         }
//         else if(keys.isDown(keys.RIGHT)){
//             return this.flyRight();
//         }
//     }

//     update() {
//         const {store} = this.props;
//         const {body} = this.body;

//         const midPointX = Math.abs(store.stageX) + 448;
//         const moveLeft = body.position.x < midPointX && store.stageX < 0;
//         const moveRight = body.bosition.x > midPointX && store.stageX > -2048;

//         const midPointY = Math.abs(store.stageY) + 448;
//         const moveUp = body.position.y < midPointY && store.stageY <0;
//         const moveDown = body.position.y > midPointY && store.stageY > -2048;

//         const targetX = store.stageX + (this.lastX = body.position.x)
//         if(moveLeft || moveRight || moveUp || moveDown) {
//             store.setStageX(targetX)
//         }

//         this.lastX = body.position.x
        
//     }

// }