const btn = document.querySelector('#btn-kick');
const btnKickEnemy = document.querySelector('#btn-kick-enemy');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 80,
  elHP: document.querySelector('#health-character'),
  elProgressBar: document.querySelector('#progressbar-character'),
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
  changeHP: changeHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 90,
  elHP: document.querySelector('#health-enemy'),
  elProgressBar: document.querySelector('#progressbar-enemy'),
  renderHPLife: renderHPLife,
  renderProgressBarHP: renderProgressBarHP,
  changeHP: changeHP,
}

function init() {
  console.log('Start Game!');
  
  btn.addEventListener('click', function () {
    console.log('Kick Pikachu');
    character.changeHP(random(20));
  });

  btnKickEnemy.addEventListener('click', function () {
    console.log('Kick Enemy');
    enemy.changeHP(random(20));
  });
}

init();

function renderHPLife() {
  this.elHP.textContent = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressBarHP() {
  this.elProgressBar.style.width = this.damageHP + '%';
}

function changeHP(count) {
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert('Бедный ' + this.name + ' потерпел поражение!');
    btn.disabled = true;
  } else {
    this.damageHP -= count;
  }

  this.renderHPLife();
  this.renderProgressBarHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}
