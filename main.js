const btn = document.querySelector('#btn-kick');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-character'),
  elProgressBar: document.querySelector('#progressbar-character')
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-enemy'),
  elProgressBar: document.querySelector('#progressbar-enemy')
}

function init() {
  console.log('Start Game!');

  renderHP(character);
  renderHP(enemy);
  
  btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
  });
}

init();

function renderHP(person) {
  renderHPLife(person);
  renderProgressBarHP(person);
}

function renderHPLife(person) {
  person.elHP.textContent = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressBarHP(person) {
  person.elProgressBar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' потерпел поражение');
    btn.disabled = true;
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}
