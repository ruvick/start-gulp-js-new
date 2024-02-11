// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// Вешаем обработчик события click. Прослушивать событие click будем на всем документе.
// Мы будем прослушивать весь документ. Вычислять нужные для нас обьекты и с ними работать.

window.onload = function () { // Функция будет срабатывать, когда весь контент на странице загрузится

	document.addEventListener("click", documentActions);

	function documentActions(e) {

		const targetElement = e.target;

		// Пишем скрипт для меню, который будет работать на экранах, шире 768px и только на тачскринах
		// Для этого пишем условие. И если нам нужно чтобы мы работали только на устройствах с тачсринами, то мы пишем функцию isMobile.any(). Эта функция вернет tru, 
		// наш сайт открыт на устройствах с тачскрином и соответственно false, если нет.
		// if (window.innerWidth > 768 && isMobile.any()) {

		// if (targetElement.classList.contain('icon-menu')) {
		// 	// Достучатся до родителя обьекта с классом menu__arrow с помощью closest
		// 	targetElement.closest('.icon-menu').classList.toggle('active');
		// }

		if (targetElement.classList.closest('mob-search-btn')) {
			// Достучатся до родителя обьекта с классом menu__arrow с помощью closest
			targetElement.closest('.header__navigation').classList.toggle('search');
		}

		// }

	}

	// Обращение к элементу через document
	if (document.querySelector('.filter-catalog__title')) {
		document.querySelector('.filter-catalog__title').addEventListener("click", function (e) {
			if (window.innerWidth < 992) {
				document.querySelector('.filter-catalog__items').classList.toggle('._active');
			}
		});
	}

}

// Actions (делегирование события click)

// const iconMenu = document.querySelector(".icon-menu");
// const body = document.querySelector("body");
// const menuBody = document.querySelector(".mob-menu");
// const menuListItemElems = document.querySelector(".mob-menu__list");
// const mobsearch = document.querySelector(".header__mob-search-btn");
// const headsearch = document.querySelector(".header__search-mob");

// //BURGER
// if (iconMenu) {
// 	iconMenu.addEventListener("click", function () { 
// 		iconMenu.classList.toggle("active");
// 		body.classList.toggle("_lock");
// 		menuBody.classList.toggle("active");
// 	});
// }

// // Закрытие моб меню при клике на якорную ссылку
// if (menuListItemElems) {
// 	menuListItemElems.addEventListener("click", function () {
// 		iconMenu.classList.toggle("active");
// 		body.classList.toggle("_lock");
// 		menuBody.classList.toggle("active");
// 	});
// }

// // Строка поиска на мобилках 
// if (mobsearch) {
// 	mobsearch.addEventListener("click", function () {
// 		headsearch.classList.toggle("_active");
// 	});
// }

// // Закрытие моб меню при клике вне области меню 
// window.addEventListener('click', e => { // при клике в любом месте окна браузера
// 	const target = e.target // находим элемент, на котором был клик
// 	if (!target.closest('.icon-menu') && !target.closest('.mob-menu') && !target.closest('.header__mob-search-btn') && !target.closest('.header__search-mob') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
// 		iconMenu.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
// 		menuBody.classList.remove('active')
// 		body.classList.remove('_lock')
// 		headsearch.classList.remove('_active')
// 	}
// })
//========================================================================================================================================================


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


// Подсказки
tippy('._tippy', {
	content: "Подсказка",
});


// Поочередное открытие нескольких блоков меню, табы, либо что то еще
// const BarIconElems = document.querySelectorAll('.sidebar__menu-open');
// const BarLinkIconElems = document.querySelectorAll('.sidebar__menu-icon');
// const BarSubMenuElems = document.querySelectorAll('.sidebar__submenu');

// BarIconElems.forEach((btn, index) => {
// 	btn.addEventListener('click', () => {

// 		if (!btn.classList.contains('sidebar__menu-icon_active')) {

// 			BarSubMenuElems.forEach((BarSubMenuElem) => {
// 				BarSubMenuElem.classList.remove('active')
// 			});
// 			BarIconElems.forEach((BarIconElem) => {
// 				BarIconElem.classList.remove('sidebar__menu-icon_active')
// 			});
// 			BarLinkIconElems.forEach((BarLinkIconElem) => {
// 				BarLinkIconElem.classList.remove('sidebar__menu-icon_active')
// 			});

// 			BarSubMenuElems[index].classList.add('active')
// 			BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
// 			btn.classList.add('sidebar__menu-icon_active')
// 		} else {
// 			BarSubMenuElems[index].classList.remove('active')
// 			BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
// 			btn.classList.remove('sidebar__menu-icon_active')
// 		}
// 	})
// })

