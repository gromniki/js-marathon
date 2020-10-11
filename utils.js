function $querySel(selector) {
  return document.querySelector(selector);
}

function $querySelAll(selector) {
  return document.querySelectorAll(selector);
}

function $createElem(element) {
  return document.createElement(element);
}

function random(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLog(player1, player2, count) {
  let { name, hp: { current, total } } = player1;
  let { name: nameEnemy } = player2;

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

function renderLog(player1, player2, count) {
  const $logsWrap = $querySel('.logs');
  const $logs = $querySel('#logs');
  const $li = $createElem('li');

  $logsWrap.style.display = 'block';
  $li.classList.add('logs__item');
  $li.textContent = player2 ? generateLog(player2, player1, count) : generateLog(player1, player2, count);
  $logs.insertBefore($li, $logs.children[0]);
}

function countClicks(counter = 2, el) {
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

function removeNodeList(selectors) {
  const domArray = document.querySelectorAll(selectors);
  domArray.forEach($item => $item.remove());
}

function renderResetBtn(nameBtn) {
  const $control = $querySel('.control');
  const $btnReset = $createElem('button');
  $btnReset.classList.add('button');
  $btnReset.textContent = nameBtn;
  $control.appendChild($btnReset);
  $btnReset.addEventListener('click', () => window.location.reload());
}

export { $querySel, $querySelAll, $createElem, random, renderLog, countClicks, removeNodeList, renderResetBtn };
