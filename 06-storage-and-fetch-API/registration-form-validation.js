/**
 * Функция валидации данных пользователя
 * Принимает объект с данными и возвращает результат проверки.
 */
function validateRegistrationForm(data) {
  const errors = {};

  if (!data.username?.trim()) {
    errors.username = "Имя пользователя обязательно для заполнения";
  } else if (data.username.length < 3 || data.username.length > 15) {
    errors.username = "Имя пользователя должно быть от 3 до 15 символов";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = "Email обязателен для заполнения";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Некорректный формат email адреса";
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!data.password) {
    errors.password = "Пароль обязателен";
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Пароль должен содержать минимум 8 символов, включая одну букву и одну цифру";
  }

  return {
    isValid: Object.keys(errors).length === 0, // true, если объект с ошибками пустой
    errors: errors,
  };
}

// Пример А: Данные с ошибками
const badUserData = {
  username: "Al", // Слишком короткое
  email: "not-an-email", // Неверный формат
  password: "123", // Слишком простой и короткий
};

const validationA = validateRegistrationForm(badUserData);
console.log("Результат валидации А:", validationA);
/* Выведет:
{
  isValid: false,
  errors: {
    username: 'Имя пользователя должно быть от 3 до 15 символов',
    email: 'Некорректный формат email адреса',
    password: 'Пароль должен содержать минимум 8 символов...'
  }
}
*/

// Пример Б: Валидные данные
const goodUserData = {
  username: "alex_dev",
  email: "alex@example.com",
  password: "SecurePassword1",
};

const validationB = validateRegistrationForm(goodUserData);
console.log("Результат валидации Б:", validationB);
/* Выведет:
{
  isValid: true,
  errors: {}
}
*/

// Пример В: Как это использовать перед отправкой на сервер
if (validationB.isValid) {
  console.log("Данные верны! Отправляем fetch запросом на бэкенд...");
  // fetch('/api/register', { method: 'POST', body: JSON.stringify(goodUserData) });
} else {
  console.log("Отмена отправки. Выводим ошибки пользователю на экран.");
}
