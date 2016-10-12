// Объявление функции goToShop.
// isOpen и isFree – аргументы функции, они передаются в функцию.
// После фигурной скодки начинается тело функции
function goToShop(isOpen, isFree) {
    if (isOpen && isFree) {
        // Если открыто и все бесплатно, то идем в магазин.
        console.log('Идем в магазин!');
    } else {
        // Если хотя бы одно из условий не выполняется, то не идем. Останемся дома.
        console.log('Не идем в магазин. :(');
    }
};

var isOpen = false;
var isFree = true;

goToShop(isOpen, isFree); // Не идем в магазин. :(
goToShop(isOpen, isFree); // Не идем в магазин. :(
goToShop(isOpen, isFree); // Не идем в магазин. :(
goToShop(isOpen, isFree); // Не идем в магазин. :(

var isOpen = true; // Магазин открылся.

goToShop(isOpen, isFree); // Идем в магазин!

// Можно описывать функции и без аргументов

function sayHello() {
    console.log('Hello!');
};

// Как правило фунции возвращают результат от проделанной работы при помощи команды return.

function sumMyMoney(card, cash) {
    var sum = card + cash;
    return sum;
};

sumMyMoney(100, 200); // Вернет значение 300.

var myMoney = sumMyMoney(100, 200); // Записари результат вычислений функции в переменную myMoney.
