import { $querySel, $createElem, removeNodeList } from './utils.js';

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

  changeHP = (count, $btn, cb) => {
    this.hp.current -= count;

    cb && cb(count);

    if (this.hp.current <= 0) {
      this.hp.current = 0;

      const $header = $querySel('.header');
      const $info = $createElem('h2');

      $info.classList.add('info');
      $info.textContent = `${this.name} потерпел поражение`;
      $header.appendChild($info);

      removeNodeList('.control .button');

      const $control = $querySel('.control');
      const $btnReset = $createElem('button');
      $btnReset.classList.add('button');
      $btnReset.textContent = 'Начать игру заново';

      $control.appendChild($btnReset);
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
