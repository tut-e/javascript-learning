const request = indexedDB.open("MyDatabase", 2);

request.onupgradeneeded = function (event) {
  const db = event.target.result;

  if (db.objectStoreNames.contains("users")) {
    db.deleteObjectStore("users");
  }

  db.createObjectStore("users", { keyPath: "id", autoIncrement: true }); // Создаем хранилище "users"
};

request.onsuccess = function (event) {
  const db = event.target.result;

  // Создаем транзакцию для записи данных
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");

  // Добавляем объекты напрямую БЕЗ stringify
  store.add({ name: "Maria", role: "admin" }); //id: 1
  store.add({ name: "Alex", role: "user" }); //id: 2
  store.add({ name: "Ivan", role: "editor" }); //id: 3
};
