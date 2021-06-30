///Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.


// function comparisonNumbers(a, b) {
//     if (a < b) {
//         return '-1';
//     }
//     else if (a > b) {
//         return '1';
//     }
//     else if (a === b) {
//         return '0';
//     }
// }

// let a = +prompt('Enter first number');
// let b = +prompt('Enter second number');
// alert(comparisonNumbers(a, b));

///Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(num) {
//     for (let i = num - 1; i > 1; i--) {
//         num *= i;
//     }
//     return num;
// }

// let num = +prompt("Enter number");

// alert(factorial(num));

///Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function addNumbers(a, b, c) {
//     return a + '' + b + '' + c;
// }
// let a = +prompt('Enter number');
// let b = +prompt('Enter number');
// let c = +prompt('Enter number');

// alert(addNumbers(a,b,c));

///Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
///Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function square(a, b = 0) {
//     if (a > 0 && b > 0) {
//         return a * b
//     }
//     else if (a > 0 && b == 0) {
//         return a * a;
//     }
// }

// let a = +prompt('Enter first side');
// let b = +prompt('Enter second side');

// alert(square(a, b));


///Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
///Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00.

    // function getTime(hours, minutes, seconds) {
    //     if (!minutes) minutes = '00';
    //     if (!seconds) minutes = '00';
    
    //     console.log(`${hours}:${minutes}:${seconds}`);
    // }

    // let hours = +prompt('Enter hours');
    // let minutes = +prompt('Enter minutes');
    // let seconds = +prompt('Enter seconds');

    // getTime(hours, minutes, seconds);

///Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
    
// function getTime(hours, minutes, seconds) {
//     return console.log(`${(hours / 12) * 3600} + ${minutes * 60} + ${seconds}`);
//     }

//     let hours = +prompt('Enter hours');
//     let minutes = +prompt('Enter minutes');
//     let seconds = +prompt('Enter seconds');

// console.log(getTime(hours, minutes, seconds));

///Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function getTime(hours, minutes, seconds) {
        return console.log(`${hours / 3600} + ${minutes / 60} + ${seconds}`);
        }
    
        let hours = +prompt('Enter hours');
        let minutes = +prompt('Enter minutes');
        let seconds = +prompt('Enter seconds');
    
    console.log(getTime(hours, minutes, seconds));