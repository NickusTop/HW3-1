let age = "14";
let name = "Mykyta";
let isStudent = false;
let myString = "Допобачення!";
let myNumber = 20;
myNumber += 10;
let myNull = null;
console.log(age);
console.log(name);
console.log(isStudent);
console.log(myString);
console.log(myNumber);
console.log(myNull);
let userName = prompt("Введіть ваше ім'я:");
alert("Привіт " + userName + "!");
let confrm = confirm("Ви підтверджуєте дію?");
if (confrm) {
    alert("Дякую за підтвердження!");
}
    else {
     alert("Дію відмінено!");
    }
alert("Увага! Ця дія небезпечна.");
let danger = confirm("Ви впевнені, що хочете продовжити?");
if (danger) {
    alert("Дякую за підтвердження!");
}
    else {
     alert("Дію відмінено!");
    }