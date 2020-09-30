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
    console.log('Kick Pikachu!');
    character.changeHP(random(20));
  });

  $btnKickEnemy.addEventListener('click', function () {
    console.log('Kick Enemy!');
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
  this.elProgressBar.style.width = this.damageLevel() + '%';
}

function damageLevel() {
  return this.damageHP > 100 ? this.damageHP = 100 : Math.floor(this.damageHP / this.defaultHP * 100);
}

function changeHP(count) {
  this.damageHP -= count;

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
    '[ПЕРСОНАЖ №1] вспомнил что-то важное, но неожиданно [ПЕРСОНАЖ №2], не помня себя от испуга, ударил в предплечье врага.',
    '[ПЕРСОНАЖ №1] поперхнулся, и за это [ПЕРСОНАЖ №2] с испугу приложил прямой удар коленом в лоб врага.',
    '[ПЕРСОНАЖ №1] забылся, но в это время наглый [ПЕРСОНАЖ №2], приняв волевое решение, неслышно подойдя сзади, ударил.',
    '[ПЕРСОНАЖ №1] пришел в себя, но неожиданно [ПЕРСОНАЖ №2] случайно нанес мощнейший удар.',
    '[ПЕРСОНАЖ №1] поперхнулся, но в это время [ПЕРСОНАЖ №2] нехотя раздробил кулаком \<вырезанно цензурой\> противника.',
    '[ПЕРСОНАЖ №1] удивился, а [ПЕРСОНАЖ №2] пошатнувшись влепил подлый удар.',
    '[ПЕРСОНАЖ №1] высморкался, но неожиданно [ПЕРСОНАЖ №2] провел дробящий удар.',
    '[ПЕРСОНАЖ №1] пошатнулся, и внезапно наглый [ПЕРСОНАЖ №2] беспричинно ударил в ногу противника',
    '[ПЕРСОНАЖ №1] расстроился, как вдруг, неожиданно [ПЕРСОНАЖ №2] случайно влепил стопой в живот соперника.',
    '[ПЕРСОНАЖ №1] пытался что-то сказать, но вдруг, неожиданно [ПЕРСОНАЖ №2] со скуки, разбил бровь сопернику.'
  ];

  return logs[random(logs.length) - 1];
}
