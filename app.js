// 1 vazifa
// let number = parseInt(prompt("Бутун сон киритинг:"));

// if (number > 0) {
//     number += 1;
// }

// alert("Натижа: " + number);

// 2 vazifa

// let number = parseInt(prompt("Бутун сон киритинг:"));

// if (number < 0) {
//     number += 1;
// } else {
//     number -= 2;
// }

// alert("Натижа: " + number);

// 3 vazifa

// let number = parseInt(prompt("Бутун сон киритинг:"));

// if (number > 0) {
//     number += 1;
// } else if (number < 0) {
//     number -= 2;
// } else {
//     number += 10;
// }

// alert("Натижа: " + number);

// 4 vazifa

// let num1 = prompt("Биринчи сон киритинг:");
// let num2 = prompt("Иккинчи сон киритинг:");;
// let num3 = prompt("Учинчи сон киритинг:");;

// let positiveNumbers = [num1, num2, num3].filter(num => num > 0);

// alert("Мусбат сонлар: " + positiveNumbers.join(", "));


// // 5 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сонни киритинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));
// let num3 = parseInt(prompt("Учинчи бутун сонни киритинг:"));

// let musbat = [num1, num2, num3].filter(num => num > 0).length;
// let manfiy = [num1, num2, num3].filter(num => num < 0).length;

// alert(`Мусбат сонлар: ${musbat}, Манфий сонлар: ${manfiy}`);

// 6 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сон киртинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));

// if (num1 > num2) {
//     alert(`${num1} катта ${num2}`);
// } else if (num2 > num1) {
//     alert(`${num2} катта ${num1}`);
// } else {
//     alert("Сонлар тенг");
// }


// // 7 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сонни киритинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));

// if (num1 < num2) {
//     alert(`Биринчи киритилган сон иккинчи киритилган сондан кичик`);
// } else if (num2 < num1) {
//     alert(`Иккинчи киритилган сон биринчи киритилган сондан кичик`);
// } else {
//     alert("Киритилган сонлар тенг");
// }


// // 8 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сонни киритинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));

// if (num1 > num2) {
//     alert(`${num1}, ${num2}`);
// } else {
//     alert(`${num2}, ${num1}`);
// }

// // 9 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сонни киритинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));

// if (num1 > num2) {
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
// }

// alert(`A = ${num1}, B = ${num2}`);


// // 10 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сонни киритинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));

// if (num1 !== num2) {
//     num1 += num2;
//     num2 = num1;
// } else {
//     num1 = 0;
//     num2 = 0;
// }

// alert(`A = ${num1}, B = ${num2}`);

// // 11 vazifa

// let num1 = parseInt(prompt("Биринчи бутун сонни киритинг:"));
// let num2 = parseInt(prompt("Иккинчи бутун сонни киритинг:"));

// if (num1 !== num2) {
//     if (num1 > num2) {
//         num2 = num1;
//     } else {
//         num1 = num2;
//     }
// } else {
//     num1 = 0;
//     num2 = 0;
// }

// alert(`A = ${num1}, B = ${num2}`);


// // 12 vazifa

// let num1 = prompt("Биринчи сон киритинг:");
// let num2 = prompt("Иккинчи сон киритинг:");
// let num3 = prompt("Учинчи сон киритинг:");

// let minNumber = Math.min(num1, num2, num3);

// alert(`Энг кичик сон бу: ${minNumber}`);


// // 13 vazifa

// let num1 = prompt("Биринчи сонни киритинг:");
// let num2 = prompt("Иккинчи сонни киритинг:");
// let num3 = prompt("Учинчи сонни киритинг:");

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);

// let middleNumber = numbers[1];

// alert(`Ўртадаги сон: ${middleNumber}`);


// // 14 vazifa

// let num1 = prompt("Биринчи сонни киритинг:");
// let num2 = prompt("Иккинчи сонни киритинг:");
// let num3 = prompt("Учинчи сонни киритинг:");

// let numbers = [num1, num2, num3];
// numbers.sort((a, b) => a - b);

// alert(`Энг кичик сон: ${numbers[0]}, Энг катта сон: ${numbers[2]}`);

// 15 vazifa

let num1 = parseInt(prompt("Биринчи сонни киритинг:"));
let num2 = parseInt(prompt("Иккинчи сонни киритинг:"));
let num3 = parseInt(prompt("Учинчи сонни киритинг:"));

let numbers = [num1, num2, num3];
numbers.sort((a, b) => b - a);

let yegindi = numbers[0] + numbers[1];

alert(`Иккита энг катта сонлар йиғиндиси: ${yegindi}`);

