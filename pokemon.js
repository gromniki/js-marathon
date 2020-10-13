import { $querySel, $createElem, removeNodeList, renderResetBtn } from './utils.js';

class Selectors {
  constructor(name) {
    this.elHP = $querySel(`#health-${name}`);
    this.elProgressBar = $querySel(`#progressbar-${name}`);
    this.elImg = $querySel(`.js-img-${name}`);
    this.elName = $querySel(`#name-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({name, hp, type, selectors, img, attacks = []}) {
    super(selectors);
    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;
    this.img = img;
    this.attacks = attacks;

    this.renderHP();
    this.renderImg();
    this.renderName();
  }

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBarHP();
  }
  
  renderHPLife = () => {
    let { elHP, hp: { current, total } } = this;
    elHP.textContent = current + ' / ' + total;
  }
  
  renderProgressBarHP = () => {
    let { hp: { current, total }, elProgressBar } = this;
    const percent = current / (total / 100);
    elProgressBar.style.width = percent + '%';

    if (percent < 60 && percent > 20) {
      elProgressBar.classList.add('low');
    } else if (percent < 20) {
      elProgressBar.classList.add('critical');
    }
  }

  changeHP = (count, cb) => {
    this.hp.current -= count;

    cb && cb(count);

    if (this.hp.current <= 0) {
      this.hp.current = 0;

      const $info = $querySel('.info');
      const $text = $createElem('p');

      $info.style.display = 'block';
      $text.classList.add('info__text');
      $text.textContent = `${this.name} потерпел поражение`;
      $info.appendChild($text);

      removeNodeList('.control .button');

      renderResetBtn('Начать игру заново!');
    }
    
    this.renderHP();
  }

  renderImg = () => {
    this.elImg.src = this.img;
  }

  renderName = () => {
    this.elName.textContent = this.name;
  }
}

export default Pokemon;
