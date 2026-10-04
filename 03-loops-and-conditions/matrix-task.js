const warehouse = [
  ["яблоки", "пыль", "груши"],
  ["книги", "оружие", "инструменты"],
  ["одежда", "обувь", "посуда"],
];

let isSafe = true;

mainLoop: for (let i = 0; i < warehouse.length; i++) {
  for (let j = 0; j < warehouse[i].length; j++) {
    if (warehouse[i][j] === "оружие") {
      isSafe = false;
      console.log(
        `Проверка склада прервана! Обнаружено ${warehouse[i][j]} в коробке ${i + 1} под номером ${j + 1}.`,
      );
      break mainLoop;
    } else if (warehouse[i][j] === "пыль") {
      continue;
    }
  }
}

if (isSafe) {
  console.log(
    "Проверка склада прошла успешно. Запрещенных предметов не обнаружено.",
  );
}
