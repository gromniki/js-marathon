import Pokemon from './Pokemon.js';
import { random, $querySel, renderLog } from './utils.js';
import { pokemons } from './pokemons.js';

console.log(pokemons);

const $control = $querySel('.control');

const pikachu = new Pokemon({
  name: 'Pikachu',
  hp: 50,
  type: 'electric',
  selectors: 'character',
});

const charmander = new Pokemon({
  name: 'Charmander',
  hp: 50,
  type: 'fire',
  selectors: 'enemy',
});

const $btn = $querySel('#btn-kick');
const $btnKickEnemy = $querySel('#btn-kick-enemy');


function startGame() {
  console.log('Start Game!');
 
  const btnCountJolt = countClicks(6, $btn);
  const btnCountEnemy = countClicks(9, $btnKickEnemy);
  
  $btn.addEventListener('click', function () {
    pikachu.changeHP(random(20), $btn, function(count) {
      renderLog(pikachu, charmander, count);
    });
    btnCountJolt();
  });

  $btnKickEnemy.addEventListener('click', function () {
    charmander.changeHP(random(20), $btnKickEnemy, function(count) {
      renderLog(charmander, pikachu, count);
    });
    btnCountEnemy();
  });

  function countClicks(counter = 6, el) {
    const textContent = el.textContent;
    el.textContent = `${textContent} (${counter})`;
  
    return function() {
      counter--;
      if (counter === 0) {
        el.disabled = true;
      }
  
      el.textContent = `${textContent} (${counter})`;
      return counter;
    }
  }
}

startGame();
