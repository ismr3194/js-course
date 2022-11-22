// Массивы

/*
Массив - это объект с цифровыми именами свойств
*/

// Формат записи массива

// const myArray = [1, 2, 3]
// console.log(myArray)
// [ 1, 2, 3 ]
// console.log(myArray.length)
// 3, длинная массива (вычисляется и обновляется автоматически)

// const myArray1 = new Array(1, 2, 3);
// console.log(myArray1)
// [ 1, 2, 3 ]

// Оператор сравнения для массивов и объектов

// console.log(myArray === myArray1) // false, ссылаются на разные объекты

// const myArray2 = myArray

// console.log(myArray === myArray2) // true, ссылаются на один и тот же объект

// const myArray3 = new Array(1, 2, 3, 4)

// console.log(myArray3) // [ 1, 2, 3, 4 ]

/*
Массив VS Объект

Прототипы влияют на то какие методы становятся доступными для массивов и объектов
*/

// const myObject = { // объект
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }

// console.log(myObject) // { '0': 1, '1': 2, '2': 3, length: 3 }

// const myArray = [1, 2, 3] // массив

// console.log(myArray) // [ 1, 2, 3 ]

/*
Чтение значений массива

*/

// const myArray = [1, true, 'a']
// console.log(myArray) // [ 1, true, 'a' ]

// console.log(myArray[0]) // 1
// console.log(myArray[1]) // true

// console.log(myArray.length) // 3

// Изменение и добавление эл. массива

// const myArray = [1, 2, 3, 4]
// console.log(myArray) // [ 1, 2, 3, 4 ]
// console.log(myArray.length) // 4

// myArray[2] = 'abc'

// console.log(myArray) // [ 1, 2, 'abc', 4 ]
// console.log(myArray[2]) // abc

// myArray[4] = true

// console.log(myArray) // [ 1, 2, 'abc', 4, true ]
// console.log(myArray[4]) // true

/*
Методы массивов (функции высшего порядка в массивах)

- push
- pop
- shift
- unshift
- forEach
- map
*/

// push (добавляет новый эл. списка в конец массива)

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

// myArray.push(4)

// console.log(myArray) // [ 1, 2, 3, 4 ]

// myArray.push(true)

// console.log(myArray) // [ 1, 2, 3, 4, true ]

// pop (удаляет последний эл. списка, также можно вызвать функцию, функция вернет значение удаленного эл.)

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

// myArray.pop()

// console.log(myArray) // [ 1, 2 ]

// const removeElement = myArray.pop()

// console.log(myArray) // [ 1 ]
// console.log(removeElement) // 2

// unshift (добавляет эл. в начало массива)

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

// myArray.unshift(true)

// console.log(myArray) // [ true, 1, 2, 3 ]

// myArray.unshift('abc')

// console.log(myArray) // [ 'abc', true, 1, 2, 3 ]

// shift (удаляет первый эл. в массива, аналогично с pop возвращает удаленный эл.)

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

// myArray.shift()

// console.log(myArray) // [ 2, 3 ]

// const removedElement = myArray.shift()

// console.log(myArray) // [ 3 ]
// console.log(removedElement) // 2

// forEach (перебирает каждый эл. массива и позволяет выполнить действие над каждый эл. массива)

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

// const res = myArray.forEach(el => console.log(el * 2))

// console.log(res) // undefined, метод forEach ничего не возвращает, главная цель пербрать каждый эл. в массиве

// console.log(myArray) // [ 1, 2, 3 ]
// Оригинальный массив не изменился 

// map (перебирает каждый эл. массива и позволяет выполнять действие над каждый эл. массива) 
// возвращает новый массив, не мутирует исходный массив

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

// const newArray = myArray.map(el => el * 3)
// console.log(newArray) // [ 3, 6, 9 ]

// const newArray = myArray.map((el) => { // функция ничего не возвращает, нужно добавить return
//     el * 3
// })

// console.log(newArray) // [ undefined, undefined, undefined ]
// console.log(myArray) // [ 1, 2, 3 ]
// Оригинальный массив не изменился

// Деструктуризация массивов

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

// Объявление новых переменных и присваивание значений на основе элементов массива
console.log(fruitOne) // Apple
console.log(fruitTwo) // Banana





















