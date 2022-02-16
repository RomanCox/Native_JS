const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//const arr = new Array() - создание массива, через литерал проще (new Array тогда под капотом)

// map
// 1. возвращает новый массив
// 2. не меняет кол-во элементов
// 3. Map принимает коллбэк функцию в качестве параметра
// 4. Коллбэк выполняет обработку и/или преобразование каждого эл-та исходного массива
// 5. Новый массив состоит из return нашего коллбэка
// 6. Исходный массив не изменяется (не мутирует)

const names = students.map((student) => student.name) //вместо функции можно укзать переменную, в кторой лежит функция
const namesAndGreetings = students.map((st)=> `Hi ${st.name}! You have a ${st.scores} scores!`)

const getName = s => s.name

const itMap = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callback(array[i])
    }
    return newArr
}

const getCopySt = s => ({...s})

console.log(itMap(students, getName))
console.log(itMap(students, getCopySt))

// filter/itFilter
// 1. возвращает новый массив
// 2. Возможно, меняет кол-во элементов
// 3. Filter принимает коллбэк функцию в качестве параметра
// 4. Коллбэк выполняет обработку каждого эл-та исходного массива
// 5. Коллбэк вохвращает true/false
// 6. Новый массив состоит из эл-в исходного массива
// 7. Исходный массив не изменяется (не мутирует)

const itFilter = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr
}

const filteredArr = students.filter(st => st.age >= 20)
console.log(filteredArr)
console.log(itFilter(students, s => s.age >= 20))

// find/itFind
// 1. Возвращает эл-т исходн массива
// 2. Возвращает один эл-т или ни одного
// 3. Find  принимает коллбэк функцию в качестве параметра
// 4. Коллбэк выполняет обработку каждого эл-та исходного массива
// 5. Коллбэк возвращает true/false
// 6. Возвращает первый эл-т на которм коллбэк вернет true или undefined
// 7. Исходный массив не изменяется (не мутирует)

const itFind = (x, callback) => {
    for (let i = 0; i < x.length; i++) {
        if (callback(x[i])) {
            return x[i]
        }
    }
}

const getBob = s => s.name === 'Bob'
console.log(itFind(students, getBob))