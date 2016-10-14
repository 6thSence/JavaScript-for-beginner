var title = document.getElementById('title');

title.hasAttribute('name'); // Проверяет наличие атрибута

var name = title.getAttribute('name'); // Получает значение атрибута

title.setAttribute('name', 'new-name-title'); // Устанавливает новое значение атрибута

title.removeAttribute('name'); // Удаляет атрибут

// Атрибут href у ссылок можно получить двумя способами // Добавить ссылку
var link;

link.getAttribute('href');
link.href;

// Атрибут value можно получить двумя способами // Добавить input
var input;

input.getAttribute('value');
input.value;