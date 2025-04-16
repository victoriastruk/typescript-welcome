/*
Задача 1
Створіть функцію для обчислення площі прямокутника.
Функція приймає 2 аргументи: ширина і довжина прямокутника
*/
function regtangleArea(width, height) {
    return `Площа прямоктника: ${width * height} см2`;
}
// console.log(regtangleArea(2, 4))
/*
Задача 2
Створіть фунцію для створення об'єкта користувача з вказаним ім'ям, віком та роллю
*/
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function createUser(name, age, role = Role.Guest) {
    return { name, age, role };
}
const user1 = createUser('Олександр', 30, Role.Admin);
const user2 = createUser('Ірина', 25, Role.User);
const user3 = createUser('Кирило', 44);
// console.log(user1)
// console.log(user2)
// console.log(user3)
/*

Задача 3
Створіть функцію для перевірки пароля на відповідність вимогам.
Перший аргумент - пароль.
Опціонально, додайте другий аргумент - мінімальну довжину пароля.
Використайте у вирішенні задачі саме опціональний аргумент!

*/
function validatePassword(password, minlength) {
    console.log(minlength);
    if (minlength === undefined) {
        minlength = 6;
    }
    return password.length >= minlength;
}
// console.log(validatePassword('abc'))
// console.log(validatePassword('strongpass', 12))
// console.log(validatePassword('securepassword', 5))
/*
Задача 4.
Напишіть функцію, яка приймає довільну кількість чисел і знаходить їх середнє арифметичне.
Використайте rest оператор
*/
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
        console.log('Список чисел порожній!');
        return 0;
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
function calculateOrderTotal(products) {
    if (products.length === 0) {
        console.log('Немає замовлень');
        return 0;
    }
    let totalPrice = 0;
    for (const product of products) {
        if (product.price < 0) {
            console.log(`Некоректна ціна товару "${product.name}"`);
            continue;
        }
        totalPrice += product.price;
    }
    return totalPrice;
}
const products = [
    { name: 'Футболка', price: 25 },
    { name: 'Шорти', price: 30 },
    { name: 'Носки', price: -5 }
];
const orderTotal = calculateOrderTotal(products);
console.log(orderTotal);
