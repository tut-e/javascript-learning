const cart = new Map([
  ["Ноутбук", 1],
  ["Мышка", 2],
  ["Наушники", 1],
]);

const prices = {
  Ноутбук: 50000,
  Мышка: 1500,
  Наушники: 3000,
  currency: "RUB",
};

console.log("--- Проверка наличия товаров ---");
for (let productName of cart.keys()) {
  console.log(`Проверяем остатки для: ${productName}... Ок`);
}

let totalItems = 0;
for (let count of cart.values()) {
  totalItems += count;
}
console.log(`\nВсего товаров в корзине: ${totalItems} шт.`);

console.log("\n--- Сканируем прайс-лист ---");
for (let key in prices) {
  if (key === "currency") {
    console.log(`[Системная инфо]: Валюта магазина — ${prices[key]}`);
  } else {
    console.log(`Товар в базе: ${key}, Цена: ${prices[key]} руб.`);
  }
}

let totalPrice = 0;

for (let [item, count] of cart) {
  let pricePerOne = prices[item];
  totalPrice += pricePerOne * count;
}
console.log(`\nОбщая стоимость заказа: ${totalPrice} руб.`);

console.log("\n--- ВАШ ЧЕК ---");
cart.forEach((count, item) => {
  let cost = prices[item] * count;
  console.log(`• ${item} x ${count} шт. = ${cost} руб.`);
});
console.log("----------------");
console.log(`ИТОГО К ОПЛАТЕ: ${totalPrice} руб.`);
