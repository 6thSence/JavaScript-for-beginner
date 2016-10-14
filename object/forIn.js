var shop = {
    adress: 'Moscow, Lenina 6',
    callToShop: function () {
        console.log('Звоним в магазин.')
    },
    name: 'Shop of sweats'
};

for (var key in shop) { // Проход по каждому елементу последовательно
    console.log(key);  // Key будет являться ключем элемента
    console.log(shop[key]); // shop[key] будет являться значением элемента
};