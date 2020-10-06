export function random(max, min = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function $querySel(selector) {
  return document.querySelector(selector);
}

export function $createElem(element) {
  return document.createElement(element);
}
