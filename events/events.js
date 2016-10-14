// События мыши:
//
// click – происходит, когда кликнули на элемент левой кнопкой мыши
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
// mouseover – возникает, когда на элемент наводится мышь
// mousedown и mouseup – когда кнопку мыши нажали или отжали
// mousemove – при движении мыши

// События на элементах управления:
//
// submit – посетитель отправил форму <form>
// focus – посетитель фокусируется на элементе, например нажимает на <input>

// Клавиатурные события:
//
// keydown – когда посетитель нажимает клавишу
// keyup – когда посетитель отпускает клавишу

// События документа:
//
// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

// События CSS:
//
// transitionend – когда CSS-анимация завершена.

var title = document.getElementById('title');

// Существует два способа добавления обработчиков событий
title.onclick = function() {
    console.log('click!');
};

var _sayHay = function() {
    console.log('click!');
};

title.onclick = _sayHay;

title.addEventListener('click' , _sayHay); // Добавление обработчика событий

title.removeEventListener('click' , _sayHay); // Удаление обработчика событий

setTimeout(function() {
    title.removeEventListener('click' , _sayHay);
}, 5000);
