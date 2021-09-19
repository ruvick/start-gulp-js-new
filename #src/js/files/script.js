// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

const iconMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const menuBody = document.querySelector(".mob-menu");
const menuListItemElems = document.querySelector(".mob-menu__list");
const mobsearch = document.querySelector(".mob-search");
const headsearch = document.querySelector(".header__search");

//BURGER
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    iconMenu.classList.toggle("active");
    body.classList.toggle("_lock");
    menuBody.classList.toggle("active");
  });
}

// Закрытие моб меню при клике на якорную ссылку
if (menuListItemElems) {
  menuListItemElems.addEventListener("click", function () {
    iconMenu.classList.toggle("active");
    body.classList.toggle("_lock");
    menuBody.classList.toggle("active");
  });
}

// Строка поиска на мобилках 
if (mobsearch) {
  mobsearch.addEventListener("click", function () {
    headsearch.classList.toggle("active");
  });
}

// Закрытие моб меню при клике вне области меню 
window.addEventListener('click', e => { // при клике в любом месте окна браузера
  const target = e.target // находим элемент, на котором был клик
  if (!target.closest('.icon-menu') && !target.closest('.mob-menu') && !target.closest('.mob-search') && !target.closest('.header__search') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    iconMenu.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
    menuBody.classList.remove('active')
    body.classList.remove('_lock')
    headsearch.classList.remove('active')
  }
})

// Плавная прокрутка
const smotScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smotScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event);

    const id = link.getAttribute('href').substring(1)
    console.log('id : ', id);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  })
});


// Полоса прокрутки в шапке
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


// Ползунок выбора цены
const priceEl = document.querySelector(".price");

function changePrice(price) {
  priceEl.innerText = price;
  console.log(price);
};


// Поочередное открытие нескольких блоков меню, табы, либо что то еще
const BarIconElems = document.querySelectorAll('.sidebar__menu-open');
const BarLinkIconElems = document.querySelectorAll('.sidebar__menu-icon');
const BarSubMenuElems = document.querySelectorAll('.sidebar__submenu');

BarIconElems.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    if (!btn.classList.contains('sidebar__menu-icon_active')) {

      BarSubMenuElems.forEach((BarSubMenuElem) => {
        BarSubMenuElem.classList.remove('active')
      });
      BarIconElems.forEach((BarIconElem) => {
        BarIconElem.classList.remove('sidebar__menu-icon_active')
      });
      BarLinkIconElems.forEach((BarLinkIconElem) => {
        BarLinkIconElem.classList.remove('sidebar__menu-icon_active')
      });

      BarSubMenuElems[index].classList.add('active')
      BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
      btn.classList.add('sidebar__menu-icon_active')
    } else {
      BarSubMenuElems[index].classList.remove('active')
      BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
      btn.classList.remove('sidebar__menu-icon_active')
    }
  })
})

// Маска телефона на JS
// function setCursorPosition(pos, elem) {
// 	elem.focus();
// 	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
// 	else if (elem.createTextRange) {
// 		var range = elem.createTextRange();
// 		range.collapse(true);
// 		range.moveEnd("character", pos);
// 		range.moveStart("character", pos);
// 		range.select()
// 	}
// }
// function mask(event) {
// 	var matrix = "+7 (___) ___ ____",
// 		i = 0,
// 		def = matrix.replace(/\D/g, ""),
// 		val = this.value.replace(/\D/g, "");
// 	if (def.length >= val.length) val = def;
// 	this.value = matrix.replace(/./g, function (a) {
// 		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
// 	});
// 	if (event.type == "blur") {
// 		if (this.value.length == 2) this.value = ""
// 	} else setCursorPosition(this.value.length, this)
// };
// var input = document.querySelector("#tel");
// input.addEventListener("input", mask, false);
// input.addEventListener("focus", mask, false);
// input.addEventListener("blur", mask, false);

// var inputTel = document.querySelector("#tel2");
// inputTel.addEventListener("input", mask, false);
// inputTel.addEventListener("focus", mask, false);
// inputTel.addEventListener("blur", mask, false);

// var inputTelpopup = document.querySelector("#tel3");
// inputTelpopup.addEventListener("input", mask, false);
// inputTelpopup.addEventListener("focus", mask, false);
// inputTelpopup.addEventListener("blur", mask, false);

// var inputTelpopup = document.querySelector("#tel4");
// inputTelpopup.addEventListener("input", mask, false);
// inputTelpopup.addEventListener("focus", mask, false);
// inputTelpopup.addEventListener("blur", mask, false);
// ===============================================================