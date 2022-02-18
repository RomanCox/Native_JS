const names = ["Bob", "Alex", "Mike", "Nick"]

console.log(names.sort()) // сортировка по таблица символов Юникода, не создает новый массив, меняет исходный
console.log(names.sort().reverse()) // сортировка в обратно порядке

const numbers = [100, 2, 333, 90, 888, 666, 42]

const compareFn = (a, b) => { // по возрастанию
    if (a > b) {
        return 3 // вернуть любое положительное число, если так - тогда меняет местами a и b
    } else {
        return -1000 // вернуть любое отрицательно число - тогда a и b не меняет местами
    }
}

console.log(numbers.sort(compareFn))
console.log(numbers.sort((a, b) => a - b)) // если a больше b - тогда возвращает положительное число!
// чтобы сделать обртану сортировку - добавить метод reverse перед последней скобкой

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    }
];

console.log([...students].sort((a, b) => a.scores - b.scores)) // работа с number поэтому возвращать значение для compareFn не надо
console.log([...students].sort((a, b) => a.name < b.name ? -1 : 1)) // сравниваем строки - поэтому надо вернуть значение для compareFn
console.log([...students].sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)) // приводит все строки к заглавным буквам

// метод sort мутирует исходный массив и возвращает ссылку на него же
// при сортировке строк работает без параметров, если числа - передается compareFn
// compareFn - сравнивает 2 значения, если ей вернуть отрицательное занчение - оставляем все как есть,
// если возвращается положительное значение - меняет элементы местами, проходит по массиву циклически, пока он не будет упорядочен

let arr = [16, 45, 2, 84, 60, 14]

function mySort1(arr) {
    let resultArr = [];
    do {
        let minValue = Math.min(...arr);
        resultArr.push(minValue);
        arr.splice(arr.indexOf(minValue), 1);
    } while (arr.length !== 0);
    return resultArr;
}

function mySort2(arr) {
    let newArray = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength && arr.length > 0; i++) {
        let minValue = arr.reduce((acc, el) => {
            return acc < el ? acc : el;
        })
        newArray.push(minValue);
        arr = arr.filter(e => e !== minValue);
    }
    return (newArray);
}

function mySort3(arr) {
    let newArray = [...arr];
    const innerFunction = () => {
        let betweenValue;
        let sortedArray = false;
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] > newArray[i+1]) {
                sortedArray = true;
                betweenValue = newArray[i+1];
                newArray[i+1] = newArray[i];
                newArray[i] = betweenValue;
            }
        }
        sortedArray ? innerFunction(newArray) : ''
    }
    innerFunction(newArray);
    return newArray;
}

function mySort4(arr) {
    let isSorted;
    for (let i = 0; i < arr.length - 1; i++) {
        isSorted = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                isSorted = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (isSorted) {
            return arr;
        }
    }
}

console.log(mySort1(arr))