import './lazyload.js';
import './shopaholic-search.js';
import imageZoom from 'fast-image-zoom'
imageZoom({
    selector: `.imageZoom`,
    containerSelector: null,
    cb: () => {},
    exceed: false,
    padding: 20,
})
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

// const btncontact = document.querySelector('.btnform');
// const formcontact = document.querySelector('#formheader');
// const popup = document.querySelector('.popup');
// const formclose = document.querySelector('.formclose');
//
//
// btncontact.addEventListener('click', () => {
//     formcontact.classList.add('open');
//     popup.classList.add('popup_open');
// });
// formclose.addEventListener('click', () => {
//     formcontact.classList.remove('open');
//     popup.classList.remove('popup_open');
// });

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

const listOpen = document.querySelector('.blog-nav__btn');
const list = document.querySelector('.blog-nav');
const listClose = document.querySelector('.blog-nav__close');

if (listOpen) {
    listOpen.addEventListener('click', () => {
        if (list) {
            list.classList.add('blog-nav--open');
        }
    });
}

if (listClose) {
    listClose.addEventListener('click', () => {
        if (list) {
            list.classList.remove('blog-nav--open');
        }
    });
}
// card-prod
var card = document.querySelector('.card-form');

if (card) {
    card.addEventListener('mouseover', function () {
        var cardmenu = document.querySelector('.card-form__list');
        if (cardmenu) {
            cardmenu.style.display = 'block';
        }
    });

    card.addEventListener('mouseout', function () {
        var cardmenu = document.querySelector('.card-form__list');
        if (cardmenu) {
            cardmenu.style.display = 'none';
        }
    });
}
// corzina

let quantityInput = document.querySelector('.quantity-input');
let minusBtn = document.querySelector('.quantity-btn-minus');
let plusBtn = document.querySelector('.quantity-btn-plus');

if (minusBtn) {
    minusBtn.addEventListener('click', decreaseQuantity);
}

if (plusBtn) {
    plusBtn.addEventListener('click', increaseQuantity);
}

function decreaseQuantity() {
    if (quantityInput) {
        let currentValue = parseInt(quantityInput.value, 10);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
};

function increaseQuantity() {
    if (quantityInput) {
        let currentValue = parseInt(quantityInput.value, 10);
        quantityInput.value = currentValue + 1;
    }
};

document.querySelectorAll('nav .menu-item li').forEach(item => {


    item.addEventListener('mouseover', () => {
        let imgElement = item.querySelector('img');

        if (!imgElement.dataset.originalSrc) { // Сохраняем исходный src, если он еще не сохранен
            imgElement.dataset.originalSrc = imgElement.src;
        }
        imgElement.src = '/themes/demo/assets/images/icon4.png';
        item.classList.add('active');
    });

    item.addEventListener('mouseout', () => {
        let imgElement = item.querySelector('.itemImage');
        imgElement.src = imgElement.dataset.originalSrc; // Возвращаем исходный src
        item.classList.remove('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.productCard');

    productCards.forEach(card => {
        const img = document.createElement('img');
        img.src = '/themes/demo/assets/images/inproduct.png';
        img.className = 'inProduct';
        card.style.position = 'relative'; // Убедитесь, что у .productCard есть position: relative
        card.appendChild(img);
    });
});



document.querySelectorAll('.callBackBtn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('modal').showModal();
    });
});

document.getElementById('modal').addEventListener('click', event => {
    // Если клик был вне формы, закрываем модальное окно
    if (event.target.nodeName === 'DIALOG') {
        document.getElementById('modal').close();
    }
});

// Закрытие модального окна по клику на крестик
document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('modal').close();
});


// Получаем элементы для работы с ними
const callBackBtns = document.querySelectorAll('.callBackBtn');
const modal = document.getElementById('modal');

// // Функция для закрытия модального окна при клике вне его содержимого
// window.onclick = function(event) {
//     if (event.target === modal) {
//         modal.close();
//     }
// };
//
// // Открытие модального окна при клике на любую кнопку с классом .callBackBtn
// callBackBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         modal.showModal();
//     });
// });
