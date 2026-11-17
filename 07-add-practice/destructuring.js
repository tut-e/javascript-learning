const response = {
  status: "ok",
  data: {
    city_name: "Москва",
    forecast: [
      { day: "Сегодня", temp: -4 },
      { day: "Завтра", temp: -7 },
    ],
  },
};

const {
  data: {
    city_name: city,
    forecast: [{ temp: todayTemp, windSpeed = 3 }] = {},
  },
} = response;

console.log(city);
console.log(todayTemp);
console.log(windSpeed);
