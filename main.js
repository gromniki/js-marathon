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
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 90,
  elHP: document.querySelector('#health-enemy'),
  elProgressBar: document.querySelector('#progressbar-enemy'),
  changeHP: changeHP(random(20)),
}

function init() {
  console.log('Start Game!');
  
  btn.addEventListener('click', function () {
    console.log('Kick Pikachu');
    changeHP(random(20));
  });

  btnKickEnemy.addEventListener('click', function () {
    console.log('Kick Enemy');
    changeHP(random(20));
  });
}

init();

function renderHP() {
  //renderHPLife(this);
  //renderProgressBarHP(person);
}

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

  character.renderHPLife();
  enemy.renderHPLife();
  character.renderProgressBarHP();
  enemy.renderProgressBarHP();
}

function random(num) {
  return Math.ceil(Math.random() * num);
}

// function renderHP(person) {
//   renderHPLife(person);
//   renderProgressBarHP(person);
// }

// function renderHPLife(person) {
//   person.elHP.textContent = person.damageHP + ' / ' + person.defaultHP;
// }

// function renderProgressBarHP(person) {
//   person.elProgressBar.style.width = person.damageHP + '%';
// }

// function changeHP(count, person) {
//   if (person.damageHP < count) {
//     person.damageHP = 0;
//     alert('Бедный ' + person.name + ' потерпел поражение!');
//     btn.disabled = true;
//   } else {
//     person.damageHP -= count;
//   }

//   renderHP(person);
// }
