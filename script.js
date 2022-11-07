"use strict"
window.addEventListener("DOMContentLoaded",() => {
 

// let btn = document.querySelector(".btn"),
//       input = document.querySelector("input");

//       btn.addEventListener("click", (e) => {
//         e.preventDefault()
//        input.value = generatePassword()

//       })

//     function generatePassword () {
//     let belgi = "123456789hecneEFUWEUHFU!";
//     let parol = "";
//     for(let i = 0; i < belgi.length; i++){
//         let valueParol = Math.round(Math.random() * (belgi.length + 1))
//         parol += belgi.charAt(valueParol)
//         console.log(valueParol);
//     }
//       return parol.slice(0, 6).toLocaleLowerCase();




//     } 

//     generatePassword()

})
// //let isName = ;

// // let isName = prompt(`Ismingizni kiriting`)

// // if (isName === `Firdavsbek`) {
// //     alert(`Xush kelibsiz web saitga`)
// // }else{
// //     alert(`Dafbo'l yaramas`)
// // }

function runTime() {
    let times = new Date();

    document.querySelector(`.hour`).innerHTML = times.getHours()
    document.querySelector(`.min`).innerHTML = times.getMinutes()
    document.querySelector(`.sec`).innerHTML = times.getSeconds()
}

setInterval(() => {
    runTime()
}, 1000);


let times = new Date();

let day = times.getDate()
let month = times.getUTCMonth()
let year = times.getUTCFullYear()


document.querySelector(`.sana`).innerHTML = day
document.querySelector(`.oy`).innerHTML = month
document.querySelector(`.yil`).innerHTML = year




// let a = 5
// let b = 6

// // let f = b

// console.log();

// let a = 24

// if(a % 5 === 0 && a % 3 === 0){
//     console.log(`FizzBazz`);
//  }
//  else if (a % 5 === 0) {
//      console.log(`Fiizz`);
// }
// else if (a % 3 === 0) {
//     console.log(`Bazz`);
// }
// else{
//     console.log(a);
// }

// function num(a,b){
//   let s = a > b ? a : b;
//   console.log(s);
// }
// num(17,26)


// function phote(w,h) {
//     console.log(w>h);
// }
// phote(100,50)