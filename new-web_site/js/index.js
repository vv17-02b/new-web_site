import { f1 } from "../modules/get-value.js";
import { funJs } from "../modules/function.js";

console.log(funJs);
console.log(f1);

const openPopUp = document.getElementById('open_pop-up');
const closePoUp = document.getElementById('pop__pu-close');
const popUp = document.getElementById('pop-up');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
});
closePoUp.addEventListener('click', () => {
  popUp.classList.remove('active');
});


//  Header Scroll by  Color
(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header__active');
    } else {
      header.classList.remove('header__active');
    }
  }
}());
// Burger start 
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active');

  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  })
  if (window.innerWidth <= 768) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
      });
    }
  }
}());
// Плавний скрол 
(function () {

  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientReact().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t & t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };
  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      })
    });
  };
  scrollTo();
}());
