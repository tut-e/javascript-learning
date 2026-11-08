const products = [
  {
    id: 1,
    title: "Смартфон Apple iPhone 15",
    category: "electronics",
    price: 90000,
    inStock: true,
  },
  {
    id: 2,
    title: "Умные часы Xiaomi",
    category: "electronics",
    price: 5000,
    inStock: true,
  },
  {
    id: 3,
    title: "Кожаный диван",
    category: "furniture",
    price: 120000,
    inStock: false,
  },
  {
    id: 4,
    title: "Беспроводные наушники",
    category: "electronics",
    price: 15000,
    inStock: false,
  },
  {
    id: 5,
    title: "Офисное кресло",
    category: "furniture",
    price: 12000,
    inStock: true,
  },
  {
    id: 6,
    title: "Книга по JavaScript",
    category: "books",
    price: 1500,
    inStock: true,
  },
];

// Объект с активными фильтрами (то, что выбрал пользователь на сайте)
const activeFilters = {
  category: "electronics",
  maxPrice: 20000,
  onlyInStock: true,
};

/**
 * Функция фильтрации
 * Метод .filter() создает новый массив со всеми элементами,
 * прошедшими проверку в функции-колбэке.
 */
function filterProducts(items, filters) {
  return items.filter((product) => {
    // Проверка 1: Категория (если фильтр задан, он должен совпадать)
    if (filters.category && product.category !== filters.category) {
      return false; // Отсеиваем товар
    }

    // Проверка 2: Максимальная цена
    if (filters.maxPrice && product.price > filters.maxPrice) {
      return false; // Отсеиваем товар
    }

    // Проверка 3: Наличие на складе
    if (filters.onlyInStock && !product.inStock) {
      return false; // Отсеиваем товар
    }

    // Если товар успешно прошел все проверки, возвращаем true (оставляем его)
    return true;
  });
}

const filteredResult = filterProducts(products, activeFilters);

console.log("Результат фильтрации:", filteredResult);
