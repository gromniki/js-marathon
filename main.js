import Pokemon from './Pokemon.js';
import { random, $querySel, $createElem, renderLog, countClicks, removeNodeList } from './utils.js';
import { pokemons } from './pokemons.js';
import Game from './Game.js';

//console.log(pokemons);

const game = new Game();
game.startGame();

















function startGame() {
  console.log('Start Game!');

  const $control = $querySel('.control');
  const $startBtn = $querySel('.js-btn-start');
  
  $startBtn.addEventListener('click', () => {
    removeNodeList('.js-btn-start');
  
    let player1 = new Pokemon({
      ...getPokemon(),
      selectors: 'player1',
    });
  
    let player2 = new Pokemon({
      ...getPokemon(),
      selectors: 'player2',
    });

    if (player1.name != player2.name) {
      console.log('разные персонажи');
    } 
  
    if (player1.name != player2.name) {
      player1.attacks.forEach(item => {
        //console.log(item);
        const $btn = $createElem('button');
        $btn.classList.add('button');
        $btn.textContent = item.name;
        const btnCount = countClicks(item.maxCount, $btn);
        
        $btn.addEventListener('click', () => {
          player2.changeHP(random(item.maxDamage, item.minDamage), $btn, function(count) {
            renderLog(player1, player2, count);
          });
      
          btnCount();
        });
      
        $control.appendChild($btn);
        console.log($btn);
      });
    } else {
      window.location.reload();
    }
  });

  function getPokemon() {
    let randomPok = pokemons[random(pokemons.length - 1)].name;
    console.log(randomPok);
  
    return pokemons.find(item => item.name === randomPok);
  }
}

//startGame();


