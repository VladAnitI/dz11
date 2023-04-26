let ArrText = document.getElementById('mainArr');
let mainArr = [12, 1, 6, 34, 3];

// добавление массива в DOM
const addInDOM = (text) => {
    ArrText.textContent = `${text}`
}

// Задание начального значения поля
addInDOM(mainArr);

// Сортировка по убыванию
const sortArrInDescOrder = (arr) => {
    return arr.sort((a, b) => {
        return (b - a)
    })
}

// Сортировка по возрастнаию
const sortArrInAscOrder = (arr) => {
    return arr.sort((a, b) => {
        return (a - b)
    })
}

// Самое большое число в массиве
const largestNumInArr = (arr) => {
    return Math.max.apply(null, arr)
}

// Самое маленькое число в массиве
const smallestNumInArr = (arr) => {
    return Math.min.apply(null, arr)
}

// Перемножение всех чисел массива
const multiplyingNumberInArrs = (arr) => {
    return arr.reduce((accum, numb) => accum * numb)
}

// let BTN1 = document.getElementById('BTN1');
// let BTN2 = document.getElementById('BTN2');
// let BTN3 = document.getElementById('BTN3');
// let BTN4 = document.getElementById('BTN4');
// let BTN5 = document.getElementById('BTN5');

// addInDOM(sortArrInDescOrder(mainArr))
// addInDOM(sortArrInAscOrder(mainArr))
// addInDOM(largestNumInArr(mainArr))
// addInDOM(smallestNumInArr(mainArr))
// addInDOM(multiplyingNumberInArrs(mainArr))