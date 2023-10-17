let burger = document.querySelector('.menu-burger__header');
let menu = document.querySelector('.header-list');
let menuLinks = menu.querySelectorAll('.header-list__item');

burger.addEventListener('click',

function() {

  burger.classList.toggle('menu-burger__header--active');

  menu.classList.toggle('header-list--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('menu-burger__header--active');

    menu.classList.remove('header-list--active');

    document.body.classList.remove('stop-scroll');

  })
})

const searchOpen = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const searchClose = document.querySelector('body');

searchOpen.addEventListener('click', () => {
  search.classList.add('search--open');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('search--open');
});

const listOpen = document.querySelector('.blog-nav__btn');
const list =  document.querySelector('.blog-nav');
const listClose = document.querySelector('.blog-nav__close');

listOpen.addEventListener('click', () => {
  list.classList.add('blog-nav--open');
});

listClose.addEventListener('click', () => {
  list.classList.remove('blog-nav--open');
});
