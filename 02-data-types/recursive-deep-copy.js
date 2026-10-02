function deepClone(value) {
  // возвращаем его как есть (это примитивы: строки, числа, boolean и т.д.)
  if (typeof value !== "object" || value === null) {
    return value;
  }

  // функции обычно не клонируют, а копируют по ссылке, чтобы сохранить методы
  if (typeof value === "function") {
    return value;
  }

  // отдельное копирование для Date и RegExp тк они содержат неперечисляемые объекты внутри
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  // создаем новый массив или объект в зависимости от исходного типа
  const clone = Array.isArray(value) ? [] : {};

  // рекурсивно перебираем все свойства (включая вложенные)
  for (const key in value) {
    // Проверяем, что свойство принадлежит самому объекту, а не его прототипу
    if (value.hasOwnProperty(key)) {
      clone[key] = deepClone(value[key]); // рекурсивный вызов
    }
  }

  return clone;
}
