'use strict';

const firstRow = prompt('Введите первую строку');
const secondRow = prompt('Введите вторую строку');
const char = prompt('По какой букве будем считать?');

function countLetters(row, char) {
  let counter = 0;

  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i) === char || row.charAt(i) === 'a' || row.charAt(i) === 'A') {
      counter += 1;
    }
  }

  return counter;
}

function getRow(firstRow, secondRow) {
  let numberLettersFirstRow = countLetters(firstRow, char);
  let numberLettersSecondRow = countLetters(secondRow, char);

  if (numberLettersFirstRow > numberLettersSecondRow) {
    return firstRow;
  } else if (numberLettersFirstRow === numberLettersSecondRow) {
    return 'Одинаковое количество букв в двух строках';
  } else {
    return secondRow;
  }
}

alert(getRow(firstRow, secondRow));
