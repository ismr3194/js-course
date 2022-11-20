/*
Функция - блок кода, который можно выполнять многократно

Функция может быть:
- именованной 
- присвоена переменной
- анонимной
- аргументом при вызове другой функции (callback функции)
- значением свойстава (метода) объекта

Функция - это объект

console.dir(myFn)

*/

// Объявление функции

// function myFn(a, b) { // function (ключевое слово), параметры функции
//     let c // тело функции
//     a = a + 1
//     c = a + b
//     return c // return (ключевое слово) результат
// }

// Функция возвращяет undefined если нет инструкции return
 
// Вызов функции 

// myFn (10, 3) // вызов функции () аргументы функции

/*
Передача значения по ссылке
*/

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) { // функция мутирует внешний объект
//     person.age += 1
//     return person
// }

// increasePersonAge(personOne) // передача объекта по ссылке
// console.log(personOne.age) // 22

// внутри функции не рекомендуется мутировать внешние объекты

// function increasePersonAge(person) {
//     const updatePerson = Object.assign({}, person) // создание копии объекта
//     updatePerson.age += 1
//     return updatePerson
// }

// const updatePersonOne = increasePersonAge(personOne)
// console.log(personOne.age) // 21
// console.log(updatePersonOne.age) // 22

// callback функции - это просто функции которые вызываются внутри других функций

// function printMyName() { // callback function
//     console.log('Samad')
// }

// console.log('start')

// setTimeout(printMyName, 2000)

/*
Правила работы с функциями
- Называйте функции исходя из выполняемых задач
- Одна функция должна выполнять одну задачу
- Не рекомендуется изменять внешние относительно функции переменные
*/

/*
Функциональные выражения


*/

// Объявленная функция

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// Функциональное выражение всегда анонимны (нет имени)

// function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// Присваивание функционального выражения переменной

// const myFunction = function(a, b) { // анонимное функциональное выражение
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// myFunction(5,3) // 9

// Функциональное выражение в вызове другой функции

// setTimeout(function() {
//     console.log('Отложенное сообщение')
// }, 1000)

// 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)

/*
Стрелочная функция это выражение. Стрелочные функции всегда анонимны.
*/

// (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// Как дать имя стрелочной функции?

// const myFunction = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// myFunction(5, 3) // 9

// setTimeout(() => {
//     console.log('Отложенное сообщение')
// }, 1000)

// 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)

// Сокращения в стрелочных функциях

// Если один параметр, то крыглые функции скобки можно опустить

// a => {
//     // Тело функции
// }

// Если скобки можно опустить если тело функции состоит из одного выражения

// (a, b) => a + b // в этом случае стрелочная функция неявно возвращает результат выражения (в этом случае return не нужно использовать)

// function multByFactor (value, multiplier = 1) {
//     return value * multiplier
// }

// const multByFactor = function(value, multiplier = 1) {
//     return value * multiplier
// }

// const multByFactor = (value, multiplier = 1) => value * multiplier

// console.log(multByFactor(10, 2))
// console.log(multByFactor(5))

// Значение параметров функций по умолчанию

// Пример 2

// const newPost = (post, addedAt = Date()) => ({
//     ...post, // Неявный возврат объекта
//     addedAt
// })

// Задание: нужно переписать с явным возвратом объекта

// const newPost = (post, addedAT = Date()) => {
//     const newObject = {
//         ...post,
//         addedAT
//     }

//     return newObject
// }

// const firstPost = {
//     ad:1,
//     author: 'Samad'
// }

// console.log(newPost(firstPost))
