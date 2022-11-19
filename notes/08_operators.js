/*
Операторы - это встроеная функция

Арифметические операторы + - * /

Операторы сравнения
=== - равно
!== - не равно
<= - меньше или равно
>= - больше или равно

Логические операторы 
! - не
&& - и
|| - или

Оператор присваивания
= 

Текстовые операторы
typeof 
instanceof
new
delete

Операнды или аргументы
*/

// let a, b
// a = 10
// b = a

// let c = a + b

// console.log(c) // 20

/*
Унарные операторы - у унарных операторов всегда один 
операнд (аргумент)
*/

// a++
// +a
// delete Obj.a
// typeof a
// new Object()

/*
Бинарных операторы - у бинарных операторов два оператора (аргумента)
*/

// a = 5
// a + b
// a += b
// a === b
// a && b

/*
Формат записи операторов
Инфиксная запись
*/

// a = true
// a + b
// a += 5
// a || b
// a > b

/*
Префиксная запись
*/

// ++a
// delete obj.a
// typeof a

/*
Постфиксная запись
*/

// a++
// myFunction()

/*
Приоритетность операторов
*/

/*
Логические операторы
! - не (всегда возвращает значение типа boolean (логический true/false))
&& - и (возвращает значение одного из операторов)
|| - или (возвращает значение одного из операторов)
*/

/*
Ложные значения

Boolean(value) -> false

false
0
''
undefined
null
*/

// console.log(Boolean('')) // false
// console.log(Boolean(' ')) // true
// console.log(Boolean(0)) // false

// console.log(typeof 10) // number
// console.log(typeof 'Samad') // string

// console.log(typeof 10 === 'number') // true

// let isUndefined 
// console.log(typeof isUndefined === 'undefined') // true

/*
Оператор ! чаще всего используется в условных инструкциях
*/

// console.log(!0) // true

// console.log(!!0) // false

// let a = {}

// console.log(!a) // false

// console.log(!!a) // true

/*
Оператор && - И

Выражение 1 && Выражение 2

Если Выражение 1 ложно:
1. Выражение 2 игнорируется
2. Возвращается результат Выражения 1
*/

/*
Оператор ||

Выражение 1 || Выражение 2

Если Выражение 2 истинно:
1. Выражение 2 игнорируется
2. Возвращается результат Выражение 1
*/

// console.log('Samad' || 'Dafault value') // Samad

// let b = 10
// b && console.log('Выполнено!')

/*
Оператор разделения объекта на свойства ...
*/

// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)

//Пример объединение объектов с помощью ...

// const buttonInfo = {
//     text: 'Buy'
// }

// const buttonStyle = {
//     color: 'yellow',
//     width: 200,
//     height: 300
// }

// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }

// console.table(button)

/*
Конкатенация строк

Оператор + для конкатенации строк

*/

// const hello = 'Hello'
// const world = 'World'

// const greeting = hello + ' ' + world

// Шаблонные строки
// const greeting = `${hello} ${world}`

// console.log(greeting)






