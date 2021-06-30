///1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

//==============================
// let car = {
//     producer: 'Benz',
//     model: 'Mercedes',
//     year: 2010,
//     speed: 350, 
// }

// function showInfo(producer, model, year, speed) {
//     console.log(`${car.producer}`);
//     console.log(`${car.model}`);
//     console.log(`${car.year}`);
//     console.log(`${car.speed}`);
// }

// showInfo();

// function averageSpeed(distance, speed) {
//     return speed / distance;
// }

// let distance = +prompt('Enter distance:');

// let time = averageSpeed(distance, car.speed);

// console.log(`Чтобы пройти такую дистанцию ${distance} со скоростью ${car.speed} потребуеться времени ${time}`);

//==================================


///Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

hours = +prompt('Enter hours');
minutes = +prompt('Enter minutes');
seconds = +prompt('Enter seconds');

function showTime(hours, minutes, seconds) {
    return console.log(`${hours}:${minutes}:${seconds}`);
}

showTime(hours, minutes, seconds);

function timeToSecond(hours, minutes, seconds) {
        return console.log(`${(hours / 12) * 3600} + ${minutes * 60} + ${seconds}`);
}

timeToSecond(hours, minutes, seconds);

function timeToMinutes(hours, minutes, seconds) {
    return console.log(`${(hours / 60)} + ${minutes} + ${seconds / 60}`);
}

timeToMinutes(hours, minutes, seconds);


function timeToHours(hours, minutes, seconds) {
    return console.log(`${hours} + ${minutes / 60} + ${seconds / 3600}`);
}

timeToMinutes(hours, minutes, seconds);


