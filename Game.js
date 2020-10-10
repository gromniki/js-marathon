import Pokemon from './Pokemon.js';
import { random, $querySel, $createElem, renderLog, countClicks, removeNodeList } from './utils.js';

class Game {
  getPokemons = async () => {
    const responce = await fetch('https://reactmarathon-api.netlify.app/api/pokemons');
    const body = await responce.json();
    console.log(body);
    return body;
  }

  startGame = async () => {
    const pokemons = await this.getPokemons();

    //console.log(pokemons);

    const $control = $querySel('.control');
    const $startBtn = $querySel('.js-btn-start');

    //const pikachu = pokemons.find(item => item.name === 'Pikachu');

    //const char = pokemons.find(item => item.name === 'Charmander');
    
    $startBtn.addEventListener('click', () => {
      removeNodeList('.js-btn-start');
    
      let player1 = new Pokemon({
        //...pikachu,
        //...getPokemon(),
        ...this.getPokemon(pokemons),
        selectors: 'player1',
      });

      console.log(player1);
    
      let player2 = new Pokemon({
        //...char,
        //...getPokemon(),
        ...this.getPokemon(pokemons),
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

    // function getPokemon() {
    //   let randomPok = pokemons[random(pokemons.length - 1)].name;
    //   console.log(randomPok);
    
    //   return pokemons.find(item => item.name === randomPok);
    // }



  }

   getPokemon = (pokemons) => {
    //const pokemons = await this.getPokemons();
    console.log(pokemons);
    let randomPokemon = pokemons[random(pokemons.length - 1)].name;
    console.log(randomPokemon);
  
    return pokemons.find(item => item.name === randomPokemon);
  }


}

export default Game;
