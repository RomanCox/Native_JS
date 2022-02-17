/*
const todoList_1 = "5476-yunjsd" //v1()
const todoList_2 = "0985-slkjdf" //v1()

const todoLists = [
    {
        id: todoList_1,
        title: "what to learn",
        filter: "all",
        /!*tasks: [
            {id: 11, title: "HTML", isDone: true},
            {id: 12, title: "CSS", isDone: true},
            {id: 13, title: "JS/TS", isDone: true},
        ]*!/
    },
    {
        id: todoList_2,
        title: "what to buy",
        filter: "all",
        /!*tasks: [
            {id: 21, title: "MILK", isDone: true},
            {id: 22, title: "CHEESE", isDone: true},
            {id: 23, title: "BREAD", isDone: true},
        ]*!/
    },
]

const tasks = {
    [todoList_1]: [
        {id: 11, title: "HTML", isDone: true},
        {id: 12, title: "CSS", isDone: true},
        {id: 13, title: "JS/TS", isDone: true},
    ],
    [todoList_2]: [
        {id: 21, title: "MILK", isDone: true},
        {id: 22, title: "CHEESE", isDone: true},
        {id: 23, title: "BREAD", isDone: true},
    ]
}

console.log(tasks[todoList_1])
console.log(tasks[todoList_1].find(t => t.title === "HTML"))
console.log(tasks[todoLists[0].id])*/

const todoLists = [
    {
        id: "1",
        title: "What to learn",
        filter: "all",
        tasks: [
            {id: "11", title: "HTML", isDone: true},
            {id: "12", title: "CSS", isDone: true},
            {id: "13", title: "REACT JS/TS", isDone: false},
        ]
    },
    {
        id: "2",
        title: "What to buy",
        filter: "all",
        tasks: [
            {id: "21", title: "Bread", isDone: false},
            {id: "22", title: "Meat", isDone: true},
            {id: "23", title: "Beer", isDone: true},
        ]
    },
]

// reduce

const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce((acc, el) => acc + el, 0))

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

console.log(students.reduce((acc, el, i) => { // метод reduce создает коллбэк, в который принимаает 2 значения:
    if (i > 0) {
        if (el.age > 20) {                             // acc (ему задаем либо первоначальное значение, либо он берет первый эл. массива)
            acc.push(el.name)                          // и el - это след элемент массива,
            return acc                                 // после выполнения функции в acc закидывается новое значение,
        }                                       // которое возращает функция    }
    }
    return acc
}, []))

console.log(students
    .filter(s => s.age > 20)
    .map(s => s.name)
)

console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))

