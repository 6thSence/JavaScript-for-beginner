// Function Declaration
// Классическое объявление функции
function sayHello() {
    console.log('hello');
};

// Function Expression
// Функциональное выражение
var sayHello = function() {
    console.log('hello');
};

// IIFE. Immediately-invoked function expression
// Чаще - анонимные самовызывающиеся функции.
(function() {
    console.log('hello');
})();
