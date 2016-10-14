var shop = ['tomato', 'carrot', 'cat', 'tomato'];

// filter возвращает новый массив, который состоит из елементов подходящие условию
var shopOfTomato = shop.filter(function(item) {
    return item === 'tomato'; // условие, которое должно выполниться, чтобы елемент попал в новый массив
})


