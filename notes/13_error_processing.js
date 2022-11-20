// Обработка ошибок

const fnWithError = () => {
    throw new Error('Some error')
}

// fnWithError() // выполнение кода остановится после появления Uncaught ошибки

// console.log('Continue...')

// try {
//     fnWithError()    
// } catch (error) {
//     console.error(error) // возвращает ошибку
//     console.log(error.message) // возвращает текст ошибки
// }

// console.log('Continue...')

// try / catch

// try {
//     // выполнение блока кода
// } catch (error) {
//     // Этот блок выполняется в случае возникновения ошибок в блоке try
// }
