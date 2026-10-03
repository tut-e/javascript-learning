function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      // Валидация: делить на ноль нельзя
      if (num2 === 0) {
        return "Ошибка: деление на ноль!";
      }
      return num1 / num2;

    case "**":
      return num1 ** num2; // Возведение в степень

    case "??":
      // Оператор нулевого слияния (короткое замыкание)
      return num1 ?? num2;

    default:
      return "Ошибка: неизвестный оператор";
  }
}

console.log(calculator(5, "+", 3)); // Выведет: 8
console.log(calculator(10, "/", 0)); // Выведет: Ошибка: деление на ноль!
console.log(calculator(2, "**", 3)); // Выведет: 8 (2 в кубе)

console.log(calculator(null, "??", 50)); // Выведет: 50
console.log(calculator(0, "??", 50)); // Выведет: 0 (так как 0 — не null и не undefined)
