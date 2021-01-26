// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
// (например n=4 , 1+2+3+4)


function sum(n) {
  result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
// console.log(sum(4));


// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
const student = {
  name: 'Test',
  surName: 'Testovich',
  isMale: true,
  telephone: 11111,
}
// console.log(student)
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
const campus = {
  faculty: 'Z',
  department: 'P',
}
// console.log(campus);

// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
student.campus = campus;
console.log(student);
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте

function studentinfo(student) {
  for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
  }
}
// studentinfo(student);


// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
function initArray() {
  let array = [];
  for (let i = 1; i <= 25; i++) {
    array.push(i)
  }
  return array;
}
// console.log(initArray());



// 3.1*Инициализация с помощью случайных чисел
function initArrayRandom() {
  let arrayRandom = [];
  for (let i = 0; i < 25; i++) {
    arrayRandom.push(Math.ceil(Math.random() * (100 - (-10)) + (-10)));
  }
  return arrayRandom;
}
// console.log(initArrayRandom());





// 3.2 Вывести элементы с четными индексами
function arrayEvenIndex() {
  let arrayEven = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray = [];
  for (let i = 0; i < arrayEven.length; i++) {
    if (arrayEven[i] % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
}

// console.log(arrayEvenIndex());

// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)

function arrayEvenValue() {
  let arrayEven = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray = [];
  for (let i = 0; i < arrayEven.length; i++) {
    let value = arrayEven[i];
    if (value % 2 === 0) {
      newArray.push(value);
    }
  }
  return newArray;
}

// console.log(arrayEvenValue());


// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
function valueArray() {
  let arr = [0, 1, 2, 3, 0, 4, 5];
  let newAr = [];
  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if(value === 0) {
      newAr.push(i);
    }
  }
  return newAr;
}
console.log(valueArray());