function isLeapYear(year) {
  let date = new Date(year, 2, 0);

  return date.getDate() === 29;
}

// Проверяем работу функции:
console.log(isLeapYear(2024)); // true  (прошлый високосный год)
console.log(isLeapYear(2026)); // false (текущий год)
console.log(isLeapYear(2100)); // false (то самое исключение из правил: делится на 100, но не на 400)
console.log(isLeapYear(2400)); // true  (исключение из исключения: делится и на 100, и на 400)
