/* Задача 1.
 Дано масив чисел.
 Перебрати масив, знайти найбільше число
*/
const numbers: number[] = [3, 5, 2, 4, 1, 7, 3]
let maxNumber: number = numbers[0]
for (let num of numbers) {
  if (num > maxNumber) {
    maxNumber = num
  }
}
// console.log(`Найбільше число: ${maxNumber}`)

/* Задача 2.
Дано масив чисел.
Знайти середнє значення у цьому масиві чисел.
*/
const numbers2: number[] = [10, 20, 30, 40, 50]
let sum: number = 0
for (let num of numbers2) {
  sum += num
}
const avgNumber = sum / numbers2.length
// console.log(`Середнє арифметичне масиву: ${avgNumber}`)

/*Задача 3.
Дано масив чисел.
Знайти перше від'ємне число у масиві.
*/
const numbers3: number[] = [2, -4, 2, 6, 9, -6]
let firstNegative: number | undefined
for (let num of numbers3) {
  if (num < 0) {
    firstNegative = num
    break
  }
}
// console.log(`Перше від'ємне число: ${firstNegative}`)
/*
Задача 4.
Обчислення вартості покупки з урахуванням знижки
Створіть програму для обчислення вартості покупки з урахуванням знижки на основі ціни товару та величини знижки

Декомпозиція.
1. Створіть тип даних Item, який містить назву товару (name) та ціну товару (price).
2. Створіть змінну item, яка представляє товар "Футболка" з ціною 20$
3. Створити змінну, яка буде містити величину знижки у відсотках
4. Обчислити вартість покупки з урахуванням знижки
*/

type Item = {
  name: string
  price: number
}

const item: Item = { name: 'футболка', price: 20 }
const { price } = item
const discount: number = 10
const discountAmount = (discount / 100) * price
const totalCost = price - discountAmount
// console.log(`Зі знижкою ${totalCost}$`)

/*
Задача 5.
Створіть програму для обчислення оплати праці працівників на основі годинної ставки та кількості годин праці.
*/
type Emploee = {
  name: string
  hourlyRate: number
}

type Paycheck = {
  name: string
  amount: number
}

const David: Emploee = { name: 'David', hourlyRate: 10 }
const DavidAmount: number = David.hourlyRate * 40
const invoice: Paycheck = { name: David.name, amount: DavidAmount }
// console.log(`Зарплата для ${invoice.name}: ${invoice.amount}$`)

/*
Задача 6
Створіть програму книжкового магазину, яка буде відображати інформацію про наявні книги
*/
type Book = {
  title: string
  author: string
  price: number
}

const books: Book[] = [
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
]
for (let book of books) {
  console.log(
    `Книга: ${book.title}. Автор: ${book.author}. Ціна: ${book.price}$`
  )
}
/*
Задача: Список студентів і найкращий студент
Створіть программу для університету, яка відображатиме інформацію про студентів
та знаходитиме студента з найвищим середнім балом.
Декомпозиція.
1. Створіть тип даних Student, який містить ім'я студента (name), курс (course), середній бал (averageGrade)
2. Створіть масив students, що містить об'єкти типу Student з даними про студентів.
3. Обчисліть середній бал серед усіх студентів та виведіть його у консоль.
4. Знайдіть студента з найвищим середнім балом та виведіть його дані у консоль.
*/

type Student = {
  name: string
  course: number
  averageGrade: number
}

const students: Student[] = [
  { name: 'Марія', course: 2, averageGrade: 4.5 },
  { name: 'Іван', course: 3, averageGrade: 4.1 },
  { name: 'Олександр', course: 1, averageGrade: 4.8 }
]

let totalAverage: number = 0
let highestAverageStudent: Student | null = null
let highestAverage: number = 0

let suma: number = 0
for (let student of students) {
  sum += student.averageGrade
  if (student.averageGrade > highestAverage) {
    highestAverage = student.averageGrade
    highestAverageStudent = student
  }
}
totalAverage = sum / students.length

console.log(`Середній бал серед усіх студентів: ${totalAverage}`)
if (highestAverageStudent !== null) {
  console.log(`Студент з найвищим середнім балом: ${highestAverageStudent}`)
} else {
  console.log('Студент з найвищим середнім балом не знайденим!')
}
