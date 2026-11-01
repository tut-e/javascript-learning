const BASE_URL = "https://example.com";

function apiRequest(endpoint, method = "GET", data = null) {
  const url = `${BASE_URL}${endpoint}`;

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // Токен авторизации, он добавляется тут ОДИН раз для всего сайта:
      // 'Authorization': 'Bearer ТОКЕН_ИЗ_LOCAL_STORAGE'
    },
  };

  // Если это POST, PUT или PATCH и у нас есть данные — упаковываем их в тело
  if (data && method !== "GET") {
    options.body = JSON.stringify(data);
  }

  // Возвращаем промис fetch
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${response.status}`);
    }
    return response.json();
  });
}

apiRequest("/users/1")
  .then((user) => console.log("Пользователь:", user.name))
  .catch((err) => console.error(err));

const myPost = { title: "Привет, Мир!", body: "Текст..." };

apiRequest("/posts", "POST", myPost)
  .then((newPost) => console.log("Статья создана с ID:", newPost.id))
  .catch((err) => console.error(err));
