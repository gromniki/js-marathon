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
