///Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let firstNumber = +prompt('Enter first number');
// let lastNumber = +prompt('Enter last number');

// let sum = 0;

// while (firstNumber <= lastNumber) {
    
//     sum += firstNumber;
//     firstNumber++;

// }

// console.log(sum);

///Запросить 2 числа и найти только наибольший общий делитель.

// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter last number');

// while (num1 !== 0 && num2 !== 0) {
//     if (num1 > num2) {
//         num1 = num1 % num2;
//     }
//     else if (num2 > num1) {
//         num2 = num2 % num1;
//     }
// }

// console.log(`${num1 + num2}`);

///Запросить у пользователя число и вывести все делители этого числа.

// let num = +prompt('Enter number from 1 - 100');

// for (let i = 1; i < 100; i++) {
//     if (num % i == 0 && num !== num && num !== 1) {
//         console.log(i);
//     }
// }


///Определить количество цифр в введенном числе.

///Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

// var i = 2;

// var msg = '';
// while (i < 10) {
//     msg += i + ' x 1 = ' + (i * 1) + '<br>';  
//     msg += i + ' x 2 = ' + (i * 2) + '<br>';  
//     msg += i + ' x 3 = ' + (i * 3) + '<br>';
//     msg += i + ' x 4 = ' + (i * 4) + '<br>';
//     msg += i + ' x 5 = ' + (i * 5) + '<br>';
//     msg += i + ' x 6 = ' + (i * 6) + '<br>';
//     msg += i + ' x 7 = ' + (i * 7) + '<br>';
//     msg += i + ' x 8 = ' + (i * 8) + '<br>';
//     msg += i + ' x 9 = ' + (i * 9) + '<br>';
//     msg += i + ' x 10  = ' + (i * 10) + '<br>';  
//     i++;
// }
// document.write(msg);


///Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
///При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
///Учтите, что достаточно одной переменной(не 10) для ввода чисел пользователем.

// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;
// let count5 = 0;

// for (let i = 0; i < 10; i++) {
//     let nums = +prompt('Enter 10 numbers: ');
//     if (nums > 0) {
//         count1++;
//     }
//     if (nums < 0) {
//         count2++;
//     }
//     if (nums % 2 == 0) {
//         count3++;
//     }
//     if (nums % 2 !== 0) {
//         count4++;
//     }
//     if (nums == 0) {
//         count5++;
//     }
// }

// if (count1 > 0) {
//     console.log(`Количество положительных чисел ${count1}`);
// }
//  if (count2 < 0) {
//     console.log(`Количество отрицательных чисел ${count2}`);
// }
//  if (count3 % 2 == 0) {
//     console.log(`Количество четных чисел ${count3}`);
// }
// if (count4 % 2 !== 0) {
//     console.log(`Количество нечетных чисел ${count4}`);
// }
// if (count5 == 0) {
//     console.log(`Количество нулей ${count5}`);
// }


///Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
///И так до тех пор, пока пользователь не откажется.

// do {

//     let num1 = +prompt('Enter first number');
//     let num2 = +prompt('Enter second number');
//     let op = prompt('Choose operation: + - / *');
//     let cont = prompt('Push Y if you want to continue and N if exit');

//     if (cont == 'Y') {
//         switch (op) {
//             case '+':
//                 console.log(num1 + num2);
//                 break;
//             case '-':
//                 console.log(num1 - num2);
//                 break;
//             case '/':
//                 console.log(num1 / num2);
//                 break;
//             case '*':
//                 console.log(num1 * num2);
//                 break;
//         }
//     }
// }while (cont !== 'N');
