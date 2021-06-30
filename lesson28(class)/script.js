///Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

// class Circle {
//     radius = 1;

//     constructor(radius) {
//         this.radius = radius;
//     }

//     get radius() {
//         return this.radius;
//     }

//     set radius(value) {
//         this.radius = value;
//     }

//     get diametr() {
//         return this.radius * 2;
//     }

//     lengthCircle() {
//         return 2 * Math.PI * this.radius;
//     }

//     areaCircle() {
//         return Math.pow(this.radius, 2) * Math.PI;
//     }

//     showInfo() {
//         console.log(`radius: ${this.radius}, diametr: ${this.diametr}, length: ${this.lengthCircle()}, area: ${this.areaCircle()}`);
//     }
// }

// let circle1 = new Circle(20);

// circle1.showInfo();

// circle1.radius = 15;

// circle1.showInfo();


///Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 

//Массив работников необходимо передавать через конструктор, а получать HTML - код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().'


class Employee {
    firstName = '';
    lastName = '';
    age = 0;
    position = '';

    constructor(firstName, lastName, age, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
    }

    get fullName() {
        return `${this.firstName}  ${this.lastName}`;
    }

    get age() {
        return this.age;
    }

    get position() {
        return this.position;
    }
}

const employers = [
    new Employee('Вася', 'Пупкин', 20, 'programmer'),
    new Employee('Иван', 'Иванов', 22, 'painter'),
    new Employee('Валик', 'Топ', 27, 'admin'),
]

class EmpTable {
    employers = [];

    constructor(employers) {
        this.employers = employers;
    }

    getHTML() {
        let htmlTable = '<table><tr><th>Full name</th><th>Age</th><th>Position</th></tr>';

        for (let i = 0; i < employers.length; i++) {
            let employer = employers[i];

            htmlTable += `<tr>`;

            htmlTable += `<td>${employer.fullName}</td>`;
            htmlTable += `<td>${employer.age}</td>`;
            htmlTable += `<td>${employer.position}</td>`;

            htmlTable += '</tr>';
        }

        htmlTable += '</table>';

        return htmlTable;
    }
}

const empTable = new EmpTable(employers);

console.log(empTable.getHTML());

document.getElementById('table').innerHTML = (empTable.getHTML());