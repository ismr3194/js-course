/*
Мутация в JS

мутация это изменение
*/

// const a = 10
// let b = a // копирование значения (copy by value)

// console.log(a) // 10
// console.log(b) // 10

// const person = {
//     name: 'Bob',
//     age:25
// }

// мутация объекта, на который ссылается переменная person
// person.age = 22
// person.isAdult = true

// console.log(person.age) // 22
// console.log(person.isAdult) // true

// Мутирование копий
// const person2 = person // копирование ссылки на объект person (copy by reference)

// person2.age = 26
// person2.isAdult = true

// console.log(person.age) // 26
// console.log(person.isAdult) // true

// Как измежать мутации?

// 1 вариант копировать объект, данный вариант подойдет если в объекте нет вложенных объектов 
// (если у объекта есть вложенные объект, ссылка на них сохранится)
// const person2 = Object.assign({}, person)


// 2 вариант копировать объект, имеет такой же нюанс что и 1 вариант
// const person2 = { ...person} // ... - оператор разделения объекта на свойства

// 3 вариант, данный вариант позволяет измежать мутации (ссылки на вложенные объекты не сохраняются)
// const person2 = JSON.parse(JSON.stringify(person))

// person2.age = 26

// console.log(person2.age) // 26
// console.log(person.age) // 25