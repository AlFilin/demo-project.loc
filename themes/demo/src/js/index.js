
// burger

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
});

// FAQ

var accordionItems = document.getElementsByClassName('accordion-item');

for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var accordionContent = this.querySelector('.accordion-content');
    accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
  });
};

// popup

const btncontact = document.querySelector('.btnform');
const formcontact = document.querySelector('#formheader');
const popup = document.querySelector('.popup');
const formclose = document.querySelector('.formclose');


btncontact.addEventListener('click', () => {
    formcontact.classList.add('open');
    popup.classList.add('popup_open');
});
formclose.addEventListener('click', () => {
    formcontact.classList.remove('open');
    popup.classList.remove('popup_open');
});

// swiper

const swiperbanner = new Swiper('.swiper-foto-prod', {
    slidesPerView: 1,
    loop: true,
    spaseBetween: 30,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swipercard = new Swiper('.swiper-card', {
    slidesPerView: 5,
    loop: true,
    spaseBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.slider__next-card',
        prevEl: '.slider__prev-card'
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaseBetween: 0,
        },
        480: {
            slidesPerView: 2,
            spaseBetween: 30,
        },
        770: {
            slidesPerView: 3,
            centeredSlides: true,
            spaseBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaseBetween: 30,
        }
    }
});

// header

var tele = document.querySelector('.contact-nav');
tele.addEventListener('mouseover', function () {
    var telemenu = document.querySelector('.contact-nav__list');
    telemenu.style.display = 'block';
});

tele.addEventListener('mouseout', function () {
    var telemenu = document.querySelector('.contact-nav__list');
    telemenu.style.display = 'none';
});

const searchOpen = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const searchClose = document.querySelector('body');

searchOpen.addEventListener('click', () => {
  search.classList.add('search--open');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('search--open');
});

// corzina

let quantityInput = document.querySelector('.quantity-input');
let minusBtn = document.querySelector('.quantity-btn-minus');
let plusBtn = document.querySelector('.quantity-btn-plus');

if (quantityInput && minusBtn && plusBtn) {
  minusBtn.addEventListener('click', decreaseQuantity);
  plusBtn.addEventListener('click', increaseQuantity);
}

function decreaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity() {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}
