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
