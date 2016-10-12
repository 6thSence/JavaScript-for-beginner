var shop = { // Тело объекта начинается с фигурной скобки
    adress: 'Moscow, Lenina 6', // в теле функции мы объявляем ключи и значения ключей через запятую. Чаще встречается "свойство объекта".
    callToShop: function () { // Если в значении ключа функция, то это "метод объекта".
        console.log('Звоним в магазин.')
    }
};

shop.adress; // Обратились к свойству adress объекта shop.

shop.callToShop(); // Обратились к методу callToShop объекта shop.

shop.name = 'Shop of sweats'; // Добавили в объект shop новое свойство name и присвоили ему значение 'Shop of sweats'.

shop.adress = 'Orlando, Church St., 400'; // Наш магазин переехал, поэтому мы изменили значение свойства adress в объекте shop.

