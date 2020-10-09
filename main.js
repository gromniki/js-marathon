import Pokemon from './Pokemon.js';
import { random, $querySel, $createElem, renderLog, countClicks } from './utils.js';
import { pokemons } from './pokemons.js';
import Game from './Game.js';

console.log(pokemons);

const $control = $querySel('.control');

let player1 = new Pokemon({
  ...getPokemon(),
  selectors: 'player1',
});

console.log(player1);

player1.attacks.forEach(item => {
  console.log(item);
  const $btn = $createElem('button');
  $btn.classList.add('button');
  $btn.textContent = item.name;
  const btnCount = countClicks(item.maxCount, $btn);
  
  $btn.addEventListener('click', () => {
    player2.changeHP(random(20), $btn, function(count) {
      renderLog(player1, player2, count);
    });

    btnCount();
  });

  $control.appendChild($btn);
  console.log($btn);
});

let player2 = new Pokemon({
  ...getPokemon(),
  selectors: 'player2',
});

console.log(player2);

function getPokemon(name) {
  return pokemons.find((item, idx) => item.name === pokemons[random(pokemons.length - 1)].name);
  //return pokemons.find((item, idx) => item.name === name);
}








function startGame() {
  console.log('Start Game!');
 
  // const btnCountJolt = countClicks(6, $btn);
  // const btnCountEnemy = countClicks(9, $btnKickEnemy);
  
  // $btn.addEventListener('click', function () {
  //   player1.changeHP(random(20), $btn, function(count) {
  //     renderLog(player1, player2, count);
  //   });
  //   btnCountJolt();
  // });

  // $btnKickEnemy.addEventListener('click', function () {
  //   player2.changeHP(random(20), $btnKickEnemy, function(count) {
  //     renderLog(player2, player1, count);
  //   });
  //   btnCountEnemy();
  // });

  
}

startGame();
