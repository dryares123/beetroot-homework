///Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// let age = prompt('What is your age ? Please enter: ');

// if (age == 0 || age <= 2) {
//     console.log('You are kid');
// }
// else if (age >= 12 || age <= 18)
// { console.log('You are teenager'); }
// else if (age >= 18 || age <= 60)
// { console.log('You are man'); }
// else if (age >= 60)
// { console.log('You are old'); }
// else { console.log('We havent such year'); }

///Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// let number = prompt("Enter number from 0 - 9: ");

// switch (number) {
//     case 1:
//         console.log('!');
//         break;
//         case 2:
//             console.log('@');
//         break;
//         case 3:
//             console.log('#');
//         break;
//         case 4:
//             console.log('$');
//         break;
//      case 5:
//         console.log('%');
//             break;
//     case 6:
//         console.log('^');
//         break;
//         case 7:
//             console.log('&');
//         break;
//     case 8:
//         console.log('*');
//         break;
//         case 9:
//             console.log('(');
//         break;
//         case 0:
//             console.log(')');
//         break;
// }

///Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// let year = prompt('Enter year: ');
// if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
//     console.log('year createn');
// }
// else { console.log('year nie createn'); }

///Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// let number = prompt('Enter number: ');

// if (number > 99 && number < 1000) {
//     if (number[0] == number[1] && number[1] == number[2]) {
//         console.log('numbers are similar');
//     }
//     else {
//         console.log('numbers are not similar');
//     }
// }
// else {   console.log('numbers are not трехзначное');}


///Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// let amountUsd = prompt('Enter amount of USD: ');
// let question = prompt('Which money do you want? ');

// let EUR = 'e';
// let UAN = 'u';

// if (question == 'e') {
//     result = amountUsd * 0.8;
//     console.log(`USD to EUR: ${result}`);
// }
// else if (question == 'u') {
//     result = amountUsd * 27;
//     console.log(`USD to EUR: ${result}`);
// }
// else { console.log('We dont have such money');}

///Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// let sum = prompt('Enter sum of purchase: ');

// if (sum >= 200 && sum <= 300) {
//     alert(`${sum * 0.97} = ${sum} * 0.97`);
// }
// else if (sum >= 300 && sum <= 500) {
//     alert(`${sum * 0.95} = ${sum} * 0.95``);
// }
// else if (sum > 500) {
//     alert(`${sum * 0.93} = ${sum} * 0.93`);
// }

///Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// let school = prompt('What is name of our school ? 1 - Bees 2 - Barca 3 - Beetroot');
// let capital = prompt('Столица Украины ? 1 - Киев 2 - Харьков 3 - Одесса');
// let box = prompt('Who is the champion of the heavyweight in box ? 1 - Fury 2 - Joshua 3 - Wilder');

// let score = 0;

// if (school == 3) {
//     score += 2;
// }
// if (capital == 1) {
//     score += 2;
// }
// if (box == 1) {
//     score += 2;
// }

// alert(`Your score is ${score}`);
