class GameStore {
    characterPosition = { x: 0, y: 0 };
  
    stageX = 0;
  
    setCharacterPosition(position) {
      this.characterPosition = position;
    }
  
    setStageX(x) {
      if (x > 0) {
        this.stageX = 0;
      } 
      else if (x < -2048) {
        this.stageX = -2048;
      } 
      else {
        this.stageX = x;
      }
    }
  }
  
  export default new GameStore();