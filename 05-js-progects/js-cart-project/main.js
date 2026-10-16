import { addToCart, printReceipt } from "./cart.js";

console.log("--- СТАРТ РАБОТЫ МАГАЗИНА ---\n");

addToCart("Ноутбук", 1, "Компьютеры");
addToCart("Мышка", 1, "Аксессуары");
addToCart("Мышка", 1, "Аксессуары");
addToCart("Наушники", 1, "Аксессуары");

printReceipt();
