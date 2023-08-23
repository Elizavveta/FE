// Решить следующие задачи:
// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
// Написать программу, которая получает два числа и выводит наименьшее
// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.


// ============== 1 task===========
// не знаю первое

// ======= 2 task ================
// const num1 = prompt("first number")
// const num2 = prompt("second number")

// const minNumber = Math.min(num1, num2)

// console.log(`smallest number: ${minNumber}`)

// ============== 3 task ==============

// const number = prompt("Your number")
// if(number < 100){
//     console.log("Number less than 100")
// } else if (number > 100) {
//     console.log("Number bigger than 100")
// } else{
//     console.log("The number is 100")
// }

// ========== 4 task =============

let firstName = prompt("write your first name")
 let years = prompt("write how old are you")
 
 if(years >= 21){
    console.log(`Hello, ${firstName}`)
 }else{
    console.log(`Hi, ${firstName}`)
 }