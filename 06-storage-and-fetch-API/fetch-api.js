const newUser = {
  name: "Иван",
  role: "Админ",
};

fetch("https://example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(newUser),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Ошибка сети");
  })
  .then((data) => console.log("Успешно создано:", data))
  .catch((error) => console.error("Ошибка:", error));
