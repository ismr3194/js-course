/*
Объекты

Практически все сущности в JS - объекты

Объект - это набор свойств "Имя: значение"

Объект - тип значения
Объект - тип переменных

Порядок свойств в объекте не имеет значения
*/

// //Структура и синтаксит объекта
// const myCity = {
//     city: 'New York', //city - свойство, 'New York' - значение свойства
//     popular: true,
//     country: 'USA'
// }

// //получения свойств объекта
// console.log(myCity.city) //получение свойства city объекта myCity (такая запись называется точечная запись (Dot notation))

// console.log(myCity.popular) // true

// //Изменение значений объекта

// myCity.city = 'Moscow'
// myCity.country = 'Russia'
// console.log(myCity) // Moscow
// //{ city: 'Moscow', popular: true, country: 'Russia' }

// //Добавление новых свойств

// myCity.mayor = 'Sergey Sobyanin'
// console.log(myCity)
// //{ city: 'Moscow', popular: true, country: 'Russia', mayor: 'Sergey Sobyanin' }

// //Удаление свойств

// delete myCity.mayor //оператор удаления delete

// console.log(myCity)
// // { city: 'Moscow', popular: true, country: 'Russia' }

// // Доступ к значению свойств с использованием скобок []

// myCity['mayor'] = 'Sergey Sobyanin' //скобочная запись (bracket notation)

// console.log(myCity)
// // { city: 'Moscow', popular: true, country: 'Russia', mayor: 'Sergey Sobyanin' }

// const timeZonePropertyName = 'timeZone'
// myCity[timeZonePropertyName] = 'UTC+3'

// console.log(myCity)
// // { city: 'Moscow', popular: true, country: 'Russia', mayor: 'Sergey Sobyanin', timeZone: 'UTC+3' }

// Вложенный объект
// const myCity = {
//     city: 'Moscow',
//     info: { // вложенный объект
//         isPopular: true,
//         country: 'Russia'
//     }
// }

// console.log(myCity.info.isPopular) //точечная запись
// // true

// delete myCity.info['isPopular'] //скобочная запись

// console.log(myCity)
// // { city: 'Moscow', info: { country: 'Russia' } }

// const name = 'Samad'
// const postsQty = 23

// //сокращенная запись (рекомендуется использовать)
// const userProfile = {
//     name, // сокращенные свойства рекомендуется размещать в начале объекта
//     postsQty,
//     hasSignedAgreement: false
// }

// console.log(userProfile)
// // { name: 'Samad', postsQty: 23, hasSignedAgreement: false }

/*
Глобальные объекты

window - веб браузеры
global - node.js

globalThis - унифицированный глобальный объект

Свойства глобальных объектов 

console.log()
window.console.log()
globalThis.console.log()
*/

/*
Методы

Метод - свойство объекта, значение которого - функция

*/

// const myCity = {
//     city: 'Moscow',
//     cityCreeting: function () { // метод
//         console.log('Creeting!!')
//     }
// }

// const myCity = {
//     city: 'Moscow',
//     cityCreeting () { // метод
//         console.log('Creeting!!')
//     }
// }

// myCity.cityCreeting() // вызов метода
// // 'Creeting!!'










