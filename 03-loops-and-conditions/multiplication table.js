for (let i = 1; i <= 10; i++) {
  // Внешний цикл
  console.log(`--- Таблица на ${i} ---`);

  for (let j = 1; j <= 10; j++) {
    // Внутренний цикл
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
