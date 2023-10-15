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

const searchOpen = document.querySelector('.blog-nav__btn');
const search =  document.querySelector('.blog-nav');
const searchClose = document.querySelector('.blog-nav__close');

searchOpen.addEventListener('click', () => {
  search.classList.add('blog-nav--open');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('blog-nav--open');
});
