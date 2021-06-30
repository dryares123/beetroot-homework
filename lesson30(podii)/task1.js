//Создать HTML-страницу с блоком текста в рамочке. 
//Реализовать возможность изменять размер блока, 
//если зажать мышку в правом нижнем углу и тянуть ее дальше.

const resDiv = document.getElementById('text');
const resizer = document.querySelector('div.content__textarea--resizer');

const startResize = e => {
    resDiv.style.width = (e.clientX - resDiv.offsetLeft) + 'px';
}

const stopResize = e => {
    window.removeEventListener('mousemove', startResize);
    window.removeEventListener('mouseup', stopResize);
}

const initResize = e => {
    e.preventDefault();

    window.addEventListener('mousemove', startResize);
    window.addEventListener('mouseup', stopResize);
}

resizer.addEventListener('mousedown', initResize);


