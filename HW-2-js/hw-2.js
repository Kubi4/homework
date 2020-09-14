// // task 1
// var color = prompt("Введите цвет","");
// if (color == 'red') {
//     document.write("<div style='background-color: red;'>красный</div>");
// } else if (color == 'black') {
//     document.write("<div style='background-color: black; color: white;'>черный</div>");
// } else if (color == 'blue') {
//     document.write("<div style='background-color: blue;'>синий</div>");
// } else if (color == 'green') {
//     document.write("<div style='background-color: green;'>зеленый</div>");
// } else {
//     document.write("<div style='background-color: gray;'>Я не понял</div>");
// }


// // task 2
// var age = +prompt("Введите возраст","")
// if (age <= 0 || age >= 100 ) {
//     document.write("<div>age error</div>")
// }


// task 3
// var jan = 31;
// var feb = 28;
// var mar = 31;
// var apr = 30;
// var may = 31;
// var jun = 30;
// var jul = 31;
// var aug = 31;
// var sep = 30;
// var oct = 31;
// var nov = 30;
// var dec = 31;
// var month = prompt("Введите месяц в формате jan, feb и тд", "")
// switch (month.toLowerCase()) {
//     case 'jan':
//         alert(jan);
//         break;
//     case 'feb':
//         alert(feb);
//         break;
//     case 'mar':
//         alert(mar);
//         break;
//     case 'apr':
//         alert(apr);
//         break;
//     case 'may':
//         alert(may);
//         break;
//     case 'jun':
//         alert(jun);
//         break;
//     case 'jul':
//         alert(jul);
//         break;
//     case 'aug':
//         alert(aug);
//         break;
//     case 'sep':
//         alert(sep);
//         break;
//     case 'oct':
//         alert(oct);
//         break;
//     case 'nov':
//         alert(nov);
//         break;
//     case 'dec':
//         alert(dec);
//         break;
//     default:
//         alert('error');
//         break;
// }


// task 4, 5
// var helloage = +prompt("Сколько вам лет?","");
// if (helloage >= 1 && helloage <= 18) {
//     alert("Привет, школьник. Сегодня хороший день и хорошая погода.");
// } else if (helloage > 18 && helloage <= 24){
//     alert("Привет, студент. Сегодня хороший вечер и хорошая погода.");
// } else if (helloage > 24 && helloage <= 64){
//     alert("Привет, рабочий. Сегодня хороший день и хорошая погода.");
// } else if (helloage > 64 && helloage <= 100){
//     alert("Привет, пенсионер. Сегодня хороший вечер и хорошая погода.");
// } else {
//     alert("error"); 
// }


// task 6
// var a = {
//     tagName: 'body',
//     subTags: b = {
//         tagName: 'div',
//         subTags: d = {
//             tagName: 'span',
//             text: 'Enter a data please:'
//         },
//         e = {
//             tagName: 'br'
//         },
//         f = {
//             tagName: 'input',
//             attrs: 'type=\'text\' id=\'name\''
//         },
//         g = {
//             tagName: 'input',
//             attrs: 'type=\'text\' id=\'surname\''
//         }
//     }, 
//     c = {
//         tagName: 'div',
//         subTags: h = {
//             tagName: 'button',
//             attrs: 'id=\'ok\'',
//             text: 'OK'
//         },
//         i = {
//             tagName: 'button',
//             attrs: 'id=\'cancel\'',
//             text: 'Cancel'
//         }
//     }
// }


// task 7
// var notebook = {
//     brand: prompt('Enter a name of brand'),
//     type: prompt('Enter a type'),
//     model: prompt('Enter a model'),
//     ram: prompt('Enter a ram size'),
//     size: prompt('Enter a size'),
//     weight: prompt('Enter a weight'),
//     resolution: {
//         width: prompt('Enter a width'),
//         height: prompt('Enter a height')
//     }
// }
// var phone = {
//     brand: prompt('Enter a name of brand'),
//     model: prompt('Enter a model'),
//     ram: prompt('Enter a ram size'),
//     color: prompt('Enter a color')
// }
// var person = {
//     name: "Donald",
//     surname: "Trump",
//     married: true,
// }
// var person = {
//     name: prompt('Enter a name'),
//     surname: prompt('Enter a surname'),
//     married: confirm('Is married ?')
// }


// task 8
// do {
//     var a = confirm('Stop ?');
// } while (a == false);


// task 9
// var a = prompt('Enter any positive number');
// if (a <= 0) {
//     console.log('It is not positive number');
// } else if (a == 1) {
//     console.log('nothing to show');
// } else {
//     for (var b = 1; b < a; b++) {
//         console.log(b);
//     }
// }


// task 10
// var a = 0;
// while(true) {
//     if(Math.random() > 0.9) {
//     alert(++a);
//     break;
//     } else {
//         a++;
//         }
// }


// task 11
// var a = '';
// var n = prompt('Enter number of #');
// for (var b = 0; b < n; b++) {
//     a += '#';
// }
// console.log(a);


// task 12
// var a = [];
// var n = prompt('Enter N');
// for (var b = 0; b < n; b++) {
//     a.push(b ** 3);
// }




