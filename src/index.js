/* Задача 1.
 Дано масив чисел.
 Перебрати масив, знайти найбільше число
*/
const numbers = [3, 5, 2, 4, 1, 7, 3];
let maxNumber = numbers[0];
for (let num of numbers) {
    if (num > maxNumber) {
        maxNumber = num;
    }
}
// console.log(`Найбільше число: ${maxNumber}`)
/* Задача 2.
Дано масив чисел.
Знайти середнє значення у цьому масиві чисел.
*/
const numbers2 = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers2) {
    sum += num;
}
const avgNumber = sum / numbers2.length;
// console.log(`Середнє арифметичне масиву: ${avgNumber}`)
/*Задача 3.
Дано масив чисел.
Знайти перше від'ємне число у масиві.
*/
const numbers3 = [2, -4, 2, 6, 9, -6];
let firstNegative;
for (let num of numbers3) {
    if (num < 0) {
        firstNegative = num;
        break;
    }
}
const item = { name: 'футболка', price: 20 };
const { price } = item;
const discount = 10;
const discountAmount = (discount / 100) * price;
const totalCost = price - discountAmount;
const David = { name: 'David', hourlyRate: 10 };
const DavidAmount = David.hourlyRate * 40;
const invoice = { name: David.name, amount: DavidAmount };
const books = [
    {
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: 12.99
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 16.5
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        price: 14.75
    }
];
for (let book of books) {
    console.log(`Книга: ${book.title}. Автор: ${book.author}. Ціна: ${book.price}$`);
}
const students = [
    { name: 'Марія', course: 2, averageGrade: 4.5 },
    { name: 'Іван', course: 3, averageGrade: 4.1 },
    { name: 'Олександр', course: 1, averageGrade: 4.8 }
];
let totalAverage = 0;
let highestAverageStudent = null;
let highestAverage = 0;
let suma = 0;
for (let student of students) {
    sum += student.averageGrade;
    if (student.averageGrade > highestAverage) {
        highestAverage = student.averageGrade;
        highestAverageStudent = student;
    }
}
totalAverage = sum / students.length;
console.log(`Середній бал серед усіх студентів: ${totalAverage}`);
if (highestAverageStudent !== null) {
    console.log(`Студент з найвищим середнім балом: ${highestAverageStudent}`);
}
else {
    console.log('Студент з найвищим середнім балом не знайденим!');
}
