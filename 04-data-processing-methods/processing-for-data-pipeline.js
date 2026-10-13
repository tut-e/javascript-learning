const warehouseGoods = [
  {
    id: 1,
    name: "Смартфон",
    category: "электроника",
    price: 800,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Кофемашина",
    category: "техника",
    price: 1200,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Наушники",
    category: "электроника",
    price: 150,
    isAvailable: false,
  },
  {
    id: 4,
    name: "Телевизор",
    category: "электроника",
    price: 2500,
    isAvailable: true,
  },
  { id: 5, name: "Чайник", category: "техника", price: 80, isAvailable: true },
  {
    id: 6,
    name: "Ноутбук",
    category: "электроника",
    price: 1800,
    isAvailable: true,
  },
];

const totalCostOfElectronics = warehouseGoods
  .filter((item) => {
    const category = (item?.category ?? "").trim().toLowerCase();

    const hasValidPrice = typeof item?.price === "number" && item.price > 0;

    return category === "электроника" && item?.isAvailable && hasValidPrice;
  })
  .map((item) => {
    return item.price * 0.9;
  })
  .sort((a, b) => b - a)
  .reduce((total, price) => total + price, 0);

console.log(totalCostOfElectronics);
