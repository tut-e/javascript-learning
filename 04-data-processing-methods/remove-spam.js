const chat = ["Привет!", "Куплю гараж", "Выиграй РЕКЛАМА тут", "Как дела?"];

function removeSpam(messages) {
  for (let i = 0; i < messages.length; i++) {
    if (/реклама/i.test(messages[i])) {
      return messages.splice(i, 1)[0]; // Возвращаем саму строку
    }
  }
  return null;
}

const deleted = removeSpam(chat);
console.log(deleted); // "Выиграй РЕКЛАМА тут"
console.log(chat); // ["Привет!", "Куплю гараж", "Как дела?"] (массив изменился!)
