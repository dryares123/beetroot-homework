//1. Создайте страницу с текстовым полем ввода. 
//При нажатии на кнопку подтверждения, данные из поля должны отображаться в документе, поле ввода – очищаться, а фоновый цвет меняться в зависимости от введённого значения.
// let message = document.querySelector('.subscription-message');
// let form = document.querySelector('.subscription');
// let text = document.querySelector('.message');

// form.onsubmit = function (e) {
//     e.preventDefault();
//     message.textContent = text.value;
// }

// function whichButton(e) {
//     // Handle different event models
//     let e = e || window.event;
//     let btnCode;

//     if ('object' === typeof e) {
//         btnCode = e.button;

//         switch (btnCode) {
//             case 0:
//                 console.log('Нажата левая кнопка.');
//             break;

//             case 1:
//                 console.log('Нажата средняя кнопка или колёсико.');
//             break;

//             case 2:
//                 console.log('Нажата правая кнопка.');
//             break;

//             default:
//                 console.log('Неопределённое событие: ' + btnCode);
//         }
//     }
// }


// var today = ""; //переменная текущей даты

// window.onload = init; //после загрузки страницы

// function init(){

// var button = document.getElementById("addButton") //доступ к кнопке

// button.onclick = handleButtonClick; //подключение созданной функции к переменной

// }

// function handleButtonClick() { //при клике на кнопку

// document.getElementById('DateHistory').innerText = today;

// today = new Date();

//   document.getElementById('time').innerHTML = today; //вывод текущей даты

// }


// let vue_det = new Vue({
//   el: '#intro',
//   data: {
//     timestamp: ""
//   },
//   created() {
//       setInterval(this.getNow, 1000);
//   },
//   methods: {
//       getNow: function() {
//           const today = new Date();
//           const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//           const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//           const dateTime = date +' '+ time;
//           this.timestamp = dateTime;
//       }
//   }
// });

// let button = document.querySelector("button");

// button.addEventListener("mousedown", function (event) {
//   if (event.which == 1)
//     console.log("Левая");
//   else if (event.which == 2)
//     console.log("Средняя");
//   else if (event.which == 3)
//     console.log("Правая");
// }

// const Time = {
//   el: "#time",
//   methods: {
//     document.write(Date());
//   }
// } 
