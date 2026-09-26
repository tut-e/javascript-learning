function getDaysUntilNewYearString() {
  let now = new Date();
  now.setHours(0, 0, 0, 0); // Обнуляем время, чтобы получить календарные дни
  
  let nextYear = now.getFullYear() + 1;
  let newYearDate = new Date(nextYear, 0, 1);
  
  let differenceInMs = newYearDate - now;
  let msInDay = 24 * 60 * 60 * 1000;
  let daysLeft = Math.floor(differenceInMs / msInDay); // Получаем 97
  
  // 💡 Подключаем магию локализации JavaScript для русского языка
  let pluralRules = new Intl.PluralRules('ru-RU');
  let rule = pluralRules.select(daysLeft); // На основе числа 97 выберет категорию 'many'
  
  // Создаем словарь с правильными окончаниями
  let wordMapping = {
    one: 'день',   // например, 1, 21, 31
    few: 'дня',    // например, 2, 3, 4, 22
    many: 'дней',  // например, 5, 11, 96, 97
    other: 'дней'  // на всякий случай для дробных чисел
  };
  
  let correctWord = wordMapping[rule];
  
  return `До Нового года осталось: ${daysLeft} ${correctWord}`;
}

console.log(getDaysUntilNewYearString()); 
// Выведет: "До Нового года осталось: 97 дней"

