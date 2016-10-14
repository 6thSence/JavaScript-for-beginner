var shop = ['car', 'cat', 'tomato'];

var newShop = shop.map(function(item) { // item-ом будет являться кажды последующий элемент массива от первого до последнего
    return item + '!'; // map вернет новый массив, изменив каждый жлемент последовательно
});

