const $btn = $querySel('#btn-kick');
const $btnKickEnemy = $querySel('#btn-kick-enemy');

function $querySel(selector) {
  return document.querySelector(selector);
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
  damageHP: 150,
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
  
  $btn.addEventListener('click', function () {
    //console.log('Kick Pikachu!');
    character.changeHP(random(20));
  });

  $btnKickEnemy.addEventListener('click', function () {
    //console.log('Kick Enemy!');
    enemy.changeHP(random(20));
  });
}

startGame();

function renderHP() {
  this.renderHPLife();
  this.renderProgressBarHP();
}

function renderHPLife() {
  this.elHP.textContent = this.damageLevel() + ' / ' + this.defaultHP;
}

function renderProgressBarHP() {
  let { elProgressBar, damageLevel } = this;
  console.log(elProgressBar.style.width, damageLevel());
  elProgressBar.style.width = damageLevel() + '%';
}

function damageLevel() {
  let { damageHP, defaultHP } = this;
  console.log(damageHP, defaultHP);
  return damageHP > 100 ? damageHP = 100 : Math.floor(damageHP / defaultHP * 100);
  //return this.damageHP > 100 ? this.damageHP = 100 : Math.floor(this.damageHP / this.defaultHP * 100);
}

function changeHP(count) {
  this.damageHP -= count;

  const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
  console.log(log);
  //console.log(generateLog);

  if (this.damageHP <= 0) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' потерпел поражение!');
    $btn.disabled = true;
  }
  
  this.renderHP();
}

function random(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLog(firstPerson, secondPerson) {
  const logs = [
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -12, [88/100]`,
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага.`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар.`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника.`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар.`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар.`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника.`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику.`
  ];

  return logs[random(logs.length - 1)];
}
