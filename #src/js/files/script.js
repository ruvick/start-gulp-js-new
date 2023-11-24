// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

const iconMenu = document.querySelector(".icon-menu");
const body = document.querySelector("body");
const menuBody = document.querySelector(".mob-menu");
const menuListItemElems = document.querySelector(".mob-menu__list");
const mobsearch = document.querySelector(".header__mob-search-btn");
const headsearch = document.querySelector(".header__search-mob");

//BURGER
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("_lock");
		// menuBody.classList.toggle("active");
	});
}

// Закрытие моб меню при клике на якорную ссылку
if (menuListItemElems) {
	menuListItemElems.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("_lock");
		// menuBody.classList.toggle("active");
	});
}

// Закрытие моб меню при клике вне области меню 
window.addEventListener('click', e => { // при клике в любом месте окна браузера
	const target = e.target // находим элемент, на котором был клик
	if (!target.closest('.icon-menu') && !target.closest('.mob-menu') && !target.closest('.header__mob-search-btn') && !target.closest('.header__search-mob') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		iconMenu.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
		// menuBody.classList.remove('active')
		body.classList.remove('_lock')
		// headsearch.classList.remove('_active')
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

// Для работы на тачскринах 

// Вешаем обработчик события click. Прослушивать событие click будем на всем документе.
// Мы будем прослушивать весь документ. Вычислять нужные для нас обьекты и с ними работать.

window.onload = function () { // Функция будет срабатывать, когда весь контент на странице загрузится

	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
		// Создаем константу в которую присваиваем нажатый обьект. Мы присваиваем все что связанно с event, с событиями и обращаемся к target.
		// Таким образом в константу мы будем получать обьект, на который мы нажали на всем документе.
		const targetElement = e.target;

		// Пишем скрипт для меню, который будет работать на экранах, шире 768px и только на тачскринах
		// Для этого пишем условие. И если нам нужно чтобы мы работали только на устройствах с тачсринами, то мы пишем функцию isMobile.any(). Эта функция вернет tru, 
		// наш сайт открыт на устройствах с тачскрином и соответственно false, если нет.
		if (window.innerWidth > 768 && isMobile.any()) {
			// Далее мы делаем так называемые просеивания. Мы прослушиваем события на всем докумен6те, но делать хотим что то, только с определенными обьектами.
			// В данном случае мы будем прослушивать на наличе класса.
			// Если мы нажали на обьект, у которого есть класс menu__arrow, далее мы должны достучатся до родителя.
			if (targetElement.classList.contains('menu__arrow')) {
				// Достучатся до родителя обьекта с классом menu__arrow с помощью closest
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			// Делегирование, закрытие подменю при клике вне области меню. Для этого нам нужно написать несколько проверок.
			// Вопервых у нажатого обьекта, недолжно быть в родителях класса menu__item, таким образом, мы поймем, что нажали не на пункт меню, не на подменю и т.д.
			// А так же, проверим, существуют ли у нас обьекты, с классом hover, чтобы было что убирать.
			// Далее, обьекты с классом _hover, нам нужно поместить в функцию, она у нас уже создана в файле function, называется _removeClasses().
			// Мы этой функции _removeClasses(), скармливаем коллекцию document.querySelectorAll('.menu__item._hover'), и говорим, какой класс, нужно убрать.
			// И если выполняется условие, у всех обьектов, у которых есть класс .menu__item._hover, класс _hover убираем.
			// _removeClasses() Это очень простая функция, она основанна на простом цикле.
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
	}
}





