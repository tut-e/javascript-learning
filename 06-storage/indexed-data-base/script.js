const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("users", { keyPath: "id" }); // Создаем хранилище "users"
};

request.onsuccess = function (event) {
  const db = event.target.result;

  // Создаем транзакцию для записи данных
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");

  // Добавляем объект напрямую БЕЗ stringify
  store.put({ id: 1, name: "Maria", role: "admin" });
};
