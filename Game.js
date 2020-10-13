import Pokemon from './Pokemon.js';
import { random, $querySel, $querySelAll, $createElem, renderLog, countClicks, removeNodeList } from './utils.js';
import Fight from './Fight.js';

class Game {
  getPokemons = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    const body = await responce.json();
    return body;
  }

  startGame = async () => {
    const pokemons = await this.getPokemons();

    const fight = new Fight();
    const randomDamage = await fight.getRandomDamage();
    console.log(randomDamage.kick);

    const $control = $querySel('.control');
    const $startBtn = $querySel('.js-btn-start');
    
    $startBtn.addEventListener('click', () => {
      removeNodeList('.js-btn-start');
    
      let player1 = new Pokemon({
        ...this.getPokemon(pokemons),
        selectors: 'player1',
      });

      let player2 = new Pokemon({
        ...this.getPokemon(pokemons),
        selectors: 'player2',
      });
    
      if (player1.name != player2.name) {
        const $pokemon = $querySelAll('.pokemon');
        $pokemon.forEach(item => item.style.display = 'block');

        player1.attacks.forEach(item => {
          const $btn = $createElem('button');
          $btn.classList.add('button');
          $btn.textContent = item.name;
          const btnCount = countClicks(item.maxCount, $btn);

          let counter = 1; // ?
          
          $btn.addEventListener('click', () => {
            this.counter++; // ?
            console.log('Click ' + counter);

            player2.changeHP(random(randomDamage.kick.player1), (count) => renderLog(player1, player2, count));
            player1.changeHP(random(randomDamage.kick.player2), (count) => renderLog(player2, player1, count));
            //player2.changeHP(random(item.maxDamage, item.minDamage), (count) => renderLog(player1, player2, count));
        
            btnCount();
          });
        
          $control.appendChild($btn);
        });
      } else {
        window.location.reload();
      }
    });
  }

   getPokemon = (pokemons) => {
    const randomPokemon = pokemons[random(pokemons.length - 1)].name;
    
    return pokemons.find(item => item.name === randomPokemon);
  }
}

export default Game;
