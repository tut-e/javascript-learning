class InvalidLoginError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "InvalidLoginError";
    this.details = details;
  }
}

function checkLogin(login) {
  if (!/^[a-zA-Z0-9]{3,15}$/.test(login)) {
    throw new InvalidLoginError(
      "Неверный логин", // Короткое сообщение для UI
      "Длина логина должна быть от 3 до 15 символов и содержать только латинские буквы и цифры.", // Подробный комментарий
    );
  }
  return console.log("Регистрация успешно завершена!");
}

try {
  checkLogin("que");
} catch (error) {
  if (error instanceof InvalidLoginError) {
    console.error(`Ошибка валидации [${error.name}]: ${error.message}`);
    console.error(`Комментарий: ${error.details}`);
  } else {
    console.error("Неизвестная системная ошибка:", error);
  }
}
