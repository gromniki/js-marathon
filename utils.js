const $logs = $querySel('#logs');

function random(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function $querySel(selector) {
  return document.querySelector(selector);
}

function $createElem(element) {
  return document.createElement(element);
}

function generateLog(pikachu, charmander, count) {
  let { name, hp: { current, total } } = pikachu;
  let { name: nameEnemy } = charmander;

  const logs = [
    `${name} поперхнулся, и за это ${nameEnemy} с испугу приложил прямой удар коленом в лоб врага. -${count}, \[${current}\/${total}\]`,
    `${name} вспомнил что-то важное, но неожиданно ${nameEnemy}, не помня себя от испуга, ударил в предплечье врага. -${count}, \[${current}\/${total}\]`,
    `${name} забылся, но в это время наглый ${nameEnemy}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count}, \[${current}\/${total}\]`,
    `${name} пришел в себя, но неожиданно ${nameEnemy} случайно нанес мощнейший удар. -${count}, \[${current}\/${total}\]`,
    `${name} поперхнулся, но в это время ${nameEnemy} нехотя раздробил кулаком \<вырезано цензурой\> противника. -${count}, \[${current}\/${total}\]`,
    `${name} удивился, а ${nameEnemy} пошатнувшись влепил подлый удар. -${count}, \[${current}\/${total}\]`,
    `${name} высморкался, но неожиданно ${nameEnemy} провел дробящий удар. -${count}, \[${current}\/${total}\]`,
    `${name} пошатнулся, и внезапно наглый ${nameEnemy} беспричинно ударил в ногу противника -${count}, \[${current}\/${total}\]`,
    `${name} расстроился, как вдруг, неожиданно ${nameEnemy} случайно влепил стопой в живот соперника. -${count}, \[${current}\/${total}\]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${nameEnemy} со скуки, разбил бровь сопернику. -${count}, \[${current}\/${total}\]`
  ];

  return logs[random(logs.length - 1)];
}

function renderLog(pikachu, charmander, count) {
  const $li = $createElem('li');
  $li.classList.add('logs__item');
  $li.textContent = charmander ? generateLog(charmander, pikachu, count) : generateLog(pikachu, charmander, count);
  $logs.insertBefore($li, $logs.children[0]);
}

export { random, $querySel, $createElem, renderLog };