// const playList = [

//     {

//         author: "LED ZEPPELIN",

//         song: "STAIRWAY TO HEAVEN"

//     },

//     {

//         author: "QUEEN",

//         song: "BOHEMIAN RHAPSODY"

//     },

//     {

//         author: "LYNYRD SKYNYRD",

//         song: "FREE BIRD"

//     },

//     {

//         author: "DEEP PURPLE",

//         song: "SMOKE ON THE WATER"

//     },

//     {

//         author: "JIMI HENDRIX",

//         song: "ALL ALONG THE WATCHTOWER"

//     },

//     {

//         author: "AC/DC",

//         song: "BACK IN BLACK"

//     },

//     {

//         author: "QUEEN",

//         song: "WE WILL ROCK YOU"

//     },

//     {

//         author: "METALLICA",

//         song: "ENTER SANDMAN"

//     }

// ];

// function showSongs(playList) {
//     let htmlUl = '<ul>';
    
//     for (let i = 0; i < playList.length; i++) {
//         let song = playList[i];

//         htmlUl += '<li>';

//         htmlUl += `author ${song.author}: song ${song.song}`;

//         htmlUl += '</li>';
//     }

//     htmlUl += '</ul>';
//     return htmlUl;
// }

// document.getElementById('app').innerHTML = showSongs(playList);

function switchColor() {
    let app = document.getElementById('app');
    let color = app.className;

    switch (color) {
        case 'red':
            app.className = 'yellow';
            break;
        case 'yellow':
            app.className = 'green';
            break;
        case 'green':
            app.className = 'red';
            break;
    }
}