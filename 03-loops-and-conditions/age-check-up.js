let age = prompt("Введите ваш возраст:");
let access = age >= 18 ? true : false;

if (access) {
  console.log("Доступ разрешен.");
} else {
  console.log("Доступ заблокирован. Пользователь не достиг совершеннолетия.");
}
