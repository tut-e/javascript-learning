import prices from "./prices.js";

const cart = new Map();

const uniqueCategories = new Set();

export function addToCart(itemName, count = 1, category = "Электроника") {
  if (cart.has(itemName)) {
    cart.set(itemName, cart.get(itemName) + count);
  } else {
    cart.set(itemName, count);
  }
  uniqueCategories.add(category);
  console.log(`🛒 Добавлено: ${itemName} (${count} шт.)`);
}

export function calculateTotal() {
  let totalPrice = 0;
  let totalItems = 0;

  for (let count of cart.values()) {
    totalItems += count;
  }

  for (let [item, count] of cart) {
    totalPrice += prices[item] * count;
  }

  return { totalPrice, totalItems };
}

export function printReceipt() {
  const totals = calculateTotal();

  console.log("\n--- ТЕХНИЧЕСКИЙ АУДИТ ПРАЙС-ЛИСТА ---");
  for (let key in prices) {
    console.log(`  Свойство прайса: ${key} -> ${prices[key]}`);
  }

  console.log("\n--- ВАШ ФИНАЛЬНЫЙ ЧЕК ---");
  cart.forEach((count, item) => {
    console.log(`• ${item} x ${count} шт. = ${prices[item] * count} руб.`);
  });

  console.log(
    `\nУникальные категории в заказе: ${[...uniqueCategories].join(", ")}`,
  );
  console.log(`Всего вещей: ${totals.totalItems} шт.`);
  console.log(`ИТОГО К ОПЛАТЕ: ${totals.totalPrice} руб.`);
  console.log("------------------------");
}
