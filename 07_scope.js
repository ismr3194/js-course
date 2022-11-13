/*
Область видимости

Область видимости - определяет граници действия переменной

Типы области видимости
- Глобальная область видимости
    Глобальные переменные (пример)
    - window - веб браузеры
    - global - node.js
- Локальная область видимости
    Локальные переменные
- Область видимости блока (переменные объявленные с помощью 
    let и const внутри блока имеют область видимости, ограниченную
    этим блоком) { }
*/

// let a // глобальные переменные a, b
// let b

// function myFn() { // область видимости функции
//     let b // локальная переменная
//     a = true
//     b = 10
//     console.log(b) //10
// }

// myFn()

// console.log(a) // true
// console.log(b) // undefined

/*
Цепочка областей видимости
*/

// const a = 5 // глобальная область видимости

// function myFn() { // локальная область видимости функции myFn
//     function innerFn() { // локальная область видимости функции innerFn
//         console.log(a)
//     }
//     innerFn() 
// }

// myFn()
// innerFn() // переменная не определена (ошибка)

/*
Жизненный цикл переменной

*/

/*
Типы областей видимости
- 
*/

/*
Правила работы с переменными 
- все переменные объявляются перед их использованием
- стараться использовать const везде, где
    это возможно
- внутри функции не изменять переменные 
    с внешних областей видимости
*/

/*
Строгий режим
'use strict' // запрещает использовать необъявленных переменных
*/