import { pokemon } from './pokemon.js';
import random from './utils.js';

console.log(pokemon);

const $btn = $querySel('#btn-kick');
const $btnKickEnemy = $querySel('#btn-kick-enemy');
const $logs = $querySel('#logs');
const $btns = document.querySelectorAll('button');

function $querySel(selector) {
  return document.querySelector(selector);
}

function $createElem(element) {
  return document.createElement(element);
}

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 150,
  elHP: $querySel('#health-character'),
  elProgressBar: $querySel('#progressbar-character'),
  renderHPLife,
  renderProgressBarHP,
  damageLevel,
  renderHP,
  changeHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: $querySel('#health-enemy'),
  elProgressBar: $querySel('#progressbar-enemy'),
  renderHPLife,
  renderProgressBarHP,
  damageLevel,
  renderHP,
  changeHP,
}

function startGame() {
  console.log('Start Game!');
  renderHP.apply(character);
  renderHP.apply(enemy);
 
  const btnCountJolt = countClicks(6, $btn);
  const btnCountEnemy = countClicks(9, $btnKickEnemy);
  
  $btn.addEventListener('click', function () {
    character.changeHP(random(20));
    btnCountJolt();
  });

  $btnKickEnemy.addEventListener('click', function () {
    enemy.changeHP(random(20));
    btnCountEnemy();
  });
}

startGame();

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}

function renderHPLife() {
  let { defaultHP, elHP } = this;
  elHP.textContent = this.damageLevel() + ' / ' + defaultHP;
}

function renderProgressBarHP() {
  let { elProgressBar } = this;
  elProgressBar.style.width = this.damageLevel() + '%';
}

function damageLevel() {
  let { damageHP, defaultHP } = this;
  return this.damageHP > 100 ? this.damageHP = 100 : Math.floor(damageHP / defaultHP * 100);
}

function changeHP(count) {
  let { name } = this;
  this.damageHP -= count;

  const $li = $createElem('li');
  $li.classList.add('logs__item');
  $li.textContent = this === enemy ? generateLog(this, character, count, this.damageHP, this.defaultHP) : generateLog(this, enemy, count, this.damageHP, this.defaultHP);
  $logs.insertBefore($li, $logs.children[0]);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + name + ' потерпел поражение!');
    $btn.disabled = true;
  }
  
  this.renderHP();
}

function generateLog(firstPerson, secondPerson, count, damageHP, defaultHP) {
  const logs = [
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезано цензурой\> противника. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. ${count}, \[${damageHP}\/${defaultHP}\]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. ${count}, \[${damageHP}\/${defaultHP}\]`
  ];

  return logs[random(logs.length - 1)];
}

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
