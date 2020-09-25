const btn = document.querySelector('#btn-kick');

const character = {
  name: 'Pokemon',
  defaultHP: 100,
  damageHP: 100,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
}

btn.addEventListener('click', function () {
  console.log('Kick');
});
