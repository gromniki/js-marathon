class Selectors {
constructor(name) {
    this.elImg = $querySel(`.js-img-${name}`);
    this.elName = $querySel(`#name-${name}`);
  }
}

class Game extends Selectors {
  constructor({selectors}) {
    super(selectors);
    
  }

  startGame = () => {

  }
}

export default Game;
