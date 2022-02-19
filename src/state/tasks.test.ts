import {ActionType, div, mult, salaryReducer, sub, sum, sumAC} from "./tasks";


test("sum", () => {
    //1. Тестовые данные
    //2. Выполенение тестируемого кода
    //3. Проверка ожидаемого результа
    const a: number = 570;
    const b: number = 330;

    //2. Выполенение тестируемого кода
    const result = sum(a, b);

    //3. Проверка ожидаемого результа
    expect(result).toBe(900)
})

test("sub", () => {
    //1. Тестовые данные
    const a: number = 570;
    const b: number = 30;

    //2. Выполенение тестируемого кода
    const result = sub(a, b);

    //3. Проверка ожидаемого результа
    expect(result).toBe(540)
})

test("mult", () => {
     //3. Выполенение тестируемого кода с указанными занчениями и проверка ожидаемого результа
    expect(mult(570, 3)).toBe(1710)
})

test("div", () => {
    const a: number = 570;
    const b: number = 3;
    const result = div(a, b);
    expect(result).toBe(190)
})

test("salaryReducer", () => {
    const sumAction = sumAC(330)
    expect(salaryReducer(570, sumAction)).toBe(900)
    const subAction: ActionType = {type: "sub", payload: 30}
    expect(salaryReducer(570, subAction)).toBe(540)
    const multAction: ActionType = {type: "mult", payload: 3}
    expect(salaryReducer(570, multAction)).toBe(1710)
    const divAction: ActionType = {type: "div", payload: 3}
    expect(salaryReducer(570, divAction)).toBe(190)
})