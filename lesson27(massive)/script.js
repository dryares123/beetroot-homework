// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
// Написать несколько функций для работы с таким массивом.
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

// let shoppingList = [
//     {
//         name: 'apple',
//         count: 1,
//         isBuy: false,
//     },
//     {
//         name: 'banana',
//         count: 2,
//         isBuy: true,
//     },
//     {
//         name: 'orange',
//         count: 3,
//         isBuy: false,
//     },
// ];

// function showProduct(shoppingList) {

//     shoppingList.sort(function (a, b) {
//         return a.isBuy - b.isBuy;
//     });

//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];

//         console.log(`name: ${product.name}, count: ${product.count}, isBuy: ${product.isBuy}`);
//     }
// }

// showProduct(shoppingList);

// function addProduct(shoppingList, nameProduct) {
//     let isNewProduct = false;

//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];

//         if (nameProduct === product.name) {
//             product.count++;

//             isNewProduct = false;

//             break;
//         }
//         else {
//             isNewProduct = true;
//         }
//     }

//     if (isNewProduct) {
//         shoppingList.push({
//             name: nameProduct,
//             count: 1,
//             isBuy: false,
//         });
//     }

//     return shoppingList;
// }

// let product = prompt('Enter name product');

// shoppingList = addProduct(shoppingList, product);

// console.log('--------------------');

// showProduct(shoppingList);

// function buyProduct(shoppingList, productName) {
//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];
//         if (productName === product.name) {
//             product.isBuy = true;
//         }
//     }

//     return shoppingList;
// }

// product = prompt('Enter name product');

// shoppingList = buyProduct(shoppingList, product);

// console.log('--------------------');

// showProduct(shoppingList);


/// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

// let shoppingList = [
//         {
//             name: 'apple',
//             count: 1,
//             price: 3.55,
//         },
//         {
//             name: 'banana',
//             count: 2,
//             price: 7.69,
//         },
//         {
//             name: 'orange',
//             count: 3,
//             price: 8.99,
//         },
// ];

// function showReceipt(shoppingList) {
//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];

//         console.log(`Name ${product.name}, ${product.count} X ${product.price}, ${product.count * product.price}`);
//     }
// }

// showReceipt(shoppingList);

// function sumReceipt(shoppingList) {
//     let sum = 0;

//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];

//         sum += product.count * product.price;
//     }

//     console.log(`Sum ${sum}`);
// }

// sumReceipt(shoppingList);

// function maxPrice(shoppingList) {
//     let max = 0;
//     let maxProduct;

//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];

//         let totalPrice = product.price * product.count;
//         if (max < totalPrice) {
//             max = totalPrice;
//             maxProduct = product;
//         }
//     }

//     console.log(`Name ${maxProduct.name}, ${maxProduct.count} X ${maxProduct.price}, ${maxProduct.count * maxProduct.price}`);
// }

// maxPrice(shoppingList);

// function avgPrice(shoppingList) {
//     let sum = 0;

//     for (let i = 0; i < shoppingList.length; i++) {
//         let product = shoppingList[i];
        
//         sum += product.price;
//     }

//     console.log(`avg: ${sum / shoppingList.length}`);
// }

// avgPrice(shoppingList);

///Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
///Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
///Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах < p ></ >, 
///добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// let cssStyles = [
//     {
//         name: 'color',
//         value: 'red',
//     },
//     {
//         name: 'font-size',
//         value: '12px',
//     },
//     {
//         name: 'alignment',
//         value: 'right',
//     },
// ];

// function documentWrite(arr) {
//     document.write('<div>');

//     for (let i = 0; i <arr.length; i++) {
//         document.write(`<p style = "${arr[i].name}: ${arr[i].value}"> Текст </p>`);
//     }

//     document.write('</div>');
// }

// documentWrite(cssStyles);


///Создать массив аудиторий академии.
//Объект - аудитория состоит из названия, количества посадочных мест(от 10 до 20) и названия факультета, для которого она предназначена.
//Написать несколько функций для работы с ним ^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
// Объект - группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let audience = [
    {
        name: 'music',
        countSeats: 10,
        nameFaculty: 'filarmoniya',
    },
    {
        name: 'sport',
        countSeats: 12,
        nameFaculty: 'fizra',
    },
    {
        name: 'history',
        countSeats: 17,
        nameFaculty: 'boring',
    },
    {
        name: 'programming',
        countSeats: 20,
        nameFaculty: 'boring',
    },
];

function showAudience(audience) {
    for (let i = 0; i < audience.length; i++) {
        let place = audience[i];

        console.log(`Name ${place.name}, CountSeat: ${place.countSeats}, Faculty: ${place.nameFaculty}`);
    }
}

showAudience(audience);

function askAudience(audience, nameFaculty) {
    for (let i = 0; i < audience.length; i++) {
        let place = audience[i];

        if (place.nameFaculty == nameFaculty) {
            console.log(`Name ${place.name}, CountSeat: ${place.countSeats}, Faculty: ${place.nameFaculty}`);
        }
    }
}

console.log('===========================');

let faculty = prompt('Enter name faculty');

askAudience(audience, faculty);

let group = {
    name: 'music',
    countStudents: 10,
    nameFaculty: 'filarmoniya',
}

function studentAudience(audience, group) {
    for (let i = 0; i < audience.length; i++) {
        let place = audience[i];
        
        if (group.name == place.name && group.countStudents == place.countSeats && group.nameFaculty == place.nameFaculty) {
            console.log(`Name ${place.name}, CountSeat: ${place.countSeats}, Faculty: ${place.nameFaculty}`);
        }
    }
}

console.log('===================');

studentAudience(audience, group);

function sortSeats(audience) {
    return audience.sort(function (a, b) {
        return a.countSeats - b.countSeats;
    });
}

showAudience(
    sortSeats(audience)
)

function sortName(audience) {
    return audience.sort(function (a, b) {
        return a.name > b.name ? 1 : -1;
    });
}

console.log('===================');

showAudience(
    sortName(audience)
)