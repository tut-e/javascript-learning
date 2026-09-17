const basePrice = 1000;      // Исходная цена товара в рублях (константа)
let discountPercent = 0;     // Размер скидки в процентах (значение будет меняться)
let finalPrice;              // Будущая цена со скидкой

// Внутри круглых скобок находится ВЫРАЖЕНИЕ basePrice > 500, которое вернет true или false
if (basePrice > 500) {
    discountPercent = 15;    // Инструкция присваивания: если цена > 500, скидка 15%
} else {
    discountPercent = 5;     // Если цена меньше или равна 500, скидка 5%
}

// Произведение математических расчеты и возвращение итогового числа
finalPrice = basePrice * (1 - discountPercent / 100);

// Вывод результата
console.log("Исходная цена: " + basePrice + " руб.");
console.log("Ваша скидка: " + discountPercent + "%");
console.log("Итоговая цена к оплате: " + finalPrice + " руб.");
