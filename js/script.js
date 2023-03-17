"use strict";
// let userName = "Yasiya";
// let greeting = userName != undefined ? `Hello ${userName}` : 'And how to call you?'
// alert(greeting)
// let start = confirm("Поговорим?");
// if (start == true) {
//   let userName = prompt("What is your name?");
//   alert(`Привет, ${userName}`);
// }
// else{
//   alert('Не больно то и хотелось!');
// };

// function sumOfAll(a,b){
// let finalSumm = a + b ;
// return finalSumm;
// }

// function isBigger(a, b) {
//   if (a > b) {
//     return `${a}  is bigger`;
//   }
//   else{
//     return `${b}  is bigger`;
//   }
// }
// let first = Number(prompt("enter first value"));
// let second = Number(prompt("enter second value"));
// alert(isBigger(first, second));
// alert(sumOfAll(first, second));

// function ifPair(num) {
//   // if (num % 2 == 0) {
//   //   return `${num} is pair`;
//   // } else {
//   //   return "nope =(";
//   // }
//   let rest = num % 2 == 0 ? `${num} is pair` : "nope =("
//   return rest;
// }
// let someNumber = Number(prompt("Enter Number"));
// alert(ifPair(someNumber));
// function numberSquare(number1 , number2){
//   //  let square = number1 ** number2 ;
//   //  return square
//    let square = Math.pow(number1 , number2);
//    return square;
// }
// let numberToEntry = prompt("Enter any Number");
// let numberDegree = prompt("Enter Dergee")
// alert(numberSquare(numberToEntry , numberDegree));

// function mathOperation(a , b ,c ){
//   let result = (a * b) / c;
//   return result;
// }
// let first = prompt("Enter first number");
// let second = prompt("Enter second number");
// let third = prompt("Enter third number");
// alert(mathOperation(first , second , third));
// function hello(someName){
//   return `Hello ${someName}`
// }
// let nameEntry = prompt("Enter some Name");
// alert(hello(nameEntry));
// function radius(r){
//    let lenghts = 2 * Math.PI * r;
//    return lenghts;
// }
// let dataInput = prompt("Enter r");
// alert(radius(dataInput));
// function volumeCalculation(a , b){
//     let volume = Math.PI * a ** 2 * b;
//     return volume;
// }
// let dataInputR = prompt("Enter radius");
// let dataInputH = prompt("Enter height");
// alert(volumeCalculation(dataInputR , dataInputH));
// let drinks =  Number(prompt("Выберите напиток : 1) Чай , 2) Кофе , 3) Сок"))
// function drinksChoose(a){
//     if(a === 1){
//         return "Ваш чай готов!"
//     }
//     else if (a === 2){
//         return "Ваше кофе готово!"
//     }
//     else if ( a === 3){
//         return "Ваш сок готов!"
//     }
//     else {
//         return "Не правильно ввели"
//     }
// }
// alert(drinksChoose(drinks))
// function calculator() {
//   let first = Number(prompt("Enter First Number"));
//   let second = Number(prompt("Enter Second Number"));
//   let c = prompt("Enter Action to do");
//   action(first, second, c);
// }
// function action(a, b, c) {
//   switch (c) {
//     case "+": {
//       plus(a, b);
//       break;
//     }
//     case "-": {
//       minus(a, b);
//       break;
//     }
//     case "*": {
//       multiply(a, b);
//       break;
//     }
//     case "/": {
//       deviding(a, b);
//       break;
//     }
//   }
// }
// function plus(a, b) {
//   let result = a + b;
//   return alert(result);
// }
// function minus(a, b) {
//   let result = a - b;
//   return alert(result);
// }
// function multiply(a, b) {
//   let result = a * b;
//   return alert(result);
// }
// function deviding(a, b) {
//   let result = a / b;
//   return alert(result);
// }
// calculator();
// let number = 0;
// while(number <= 10){
//   if(number % 3 == 0 ){
//     console.log(number)
//   }
//   else if (number % 5 == 0){
//     console.log(number)
//   }
//   number++;
// }
// let number = 0;
// let summ = 0;
// while(number <= 20){
//     summ += number;
//     number ++;
// }
// console.log(summ);
// let counter = 0;
// while(counter <= 100){

//         if(counter % 3 === 0){
//             console.log("fizz")
//         }
//         else if(counter % 5 === 0){
//             console.log("buzz")
//         }
//         else {
//             console.log(counter)
//     }
//     counter++
// }
// for (let counter = 0; counter <= 100; counter++) {
//   if (counter % 3 === 0) {
//     console.log("fizz");
//   } else if (counter % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(counter);
//   }
// }
// let numberFromUser = Number(prompt("Enter Number"))
// let numberRandom = Math.random() * 10;
// let number = Math.ceil(numberRandom);
// while(numberFromUser != number ){
//         alert("Nope =(");
//         numberFromUser = Number(prompt("Enter Number (1 - 20)"));
// }
// if(numberFromUser === number){
//     alert("You are right")
// }

function randomNumber() {
  let numberByUser = Number(prompt("Enter Number in range 1-10"));
  let anyRandomNumber = Math.round(Math.random() * 10);
  let rightAnswers = 0;
  counting(numberByUser , anyRandomNumber , rightAnswers);
}
function counting(number1, number2 , counter) {
  while (counter <= 50) {
    if (number1 === number2) {
      ++counter;
      alert("GREAT JOB MAN");
      alert(`Right Answers : ${counter} out 50`);
      number1 = Number(prompt("Enter Number in range 1-10"));
    } else {
      alert("nope! =(");
      number1 = Number(prompt("Enter Number in range 1-10"));
    }
  }
}
randomNumber();