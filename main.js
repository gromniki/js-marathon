import Pokemon from './Pokemon.js';
import { random, $querySel, renderLog } from './utils.js';

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

// Lesson 8.01 - Массивы

const arr = [1, 2, 3, 4];

arr.push(5); // добавление элемента в конец массива
console.log(arr);

arr.unshift(0); // добавление элемента в начало массива
console.log(arr);

arr.pop(); // удаление элемента в конце массива
console.log(arr);

arr.shift(); // удаление элемента в начале массива
console.log(arr);

/*
Особенностью методов удаления является то, что они удаляют элементы из массива и возвращают их
в качестве результата как делают операторы.
То есть если сохранить в переменную результат удаления, то выведется значение элемента
*/
const pop = arr.pop();
console.log(pop); // 4

const shift = arr.shift();
console.log(shift); // 1
console.log(arr);

/*
Методы добавления всегда возвращают длину массива
*/
let lengthArr = arr.push(4);
console.log(lengthArr); // 3

lengthArr = arr.unshift(1);
console.log(lengthArr); // 4

/*
Есть универсальный метод для работы с массивами - splice, он
как швейцарский нож. Легко можно удалить элементы из середины массива
splice(index, количество элементов, );
*/

arr.splice(1, 2); // удалит элементы со значениями 2 и 3
console.log(arr);

arr.splice(0, 0, 2, 3); // 2, 3, 1, 4
console.log(arr);

arr.splice(0, 3, 1,2,3); // 1, 2, 3, 4
console.log(arr);
