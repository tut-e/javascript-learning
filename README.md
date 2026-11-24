# Мой путь в JavaScript

Репозиторий создан для изучения языка программирования **JavaScript**, хранения практических задач, конспектов и учебных мини-проектов. Код в проекте отформатирован с помощью **Prettier**.

## 🎯 Мои цели

- [x] Освоить базовый синтаксис JS (переменные, типы данных, циклы, условия)
- [x] Научиться работать со сложными структурами данных и методами их обработки
- [x] Написать несколько интерактивных мини-проектов (DOM, события, формы, корзина)
- [x] Понять работу с асинхронным кодом, сетевыми запросами (`Fetch API`) и браузерными хранилищами (`LocalStorage`, `IndexedDB`)
- [x] Разобраться в тонкостях ООП, прототипов и продвинутых паттернов

---

## 📂 Структура репозитория

- [`01-basics/`](./01-basics) — Базовые темы: переменные, правила именования, выражения и инструкции.
- [`02-data-types/`](./02-data-types) — Типы данных, работа с датами, строками, логическими операциями и глубоким копированием объектов.
- [`03-loops-and-conditions/`](./03-loops-and-conditions) — Условные конструкции, циклы, вложенные циклы и работа с матрицами.
- [`04-data-processing-methods/`](./04-data-processing-methods) — Методы массивов и объектов, `Map`, пайплайны обработки данных и алгоритмические задачи.
- [`05-js-projects/`](./05-js-projects) — Практические мини-проекты на связке HTML + CSS + JS (работа с DOM и событиями).
- [`06-storage-and-fetch-API/`](./06-storage-and-fetch-API) — Асинхронный JS, `Fetch API`, валидация форм и хранение данных в браузере (`LocalStorage`, `IndexedDB`).
- [`07-add-practice/`](./07-add-practice) — Дополнительная практика по современному синтаксису ES6+ (деструктуризация и др.).

---

## 📔 Дневник прогресса

### Тема 1: Основы JS и синтаксис (`01-basics/`)

- **Что изучено:** Разница между `let`, `const` и `var`, правила CamelCase, комментарии, отличия выражений (expressions) от инструкций (statements).
- **Теория:** Конспект с базовым синтаксисом — [`theory.js`](./01-basics/theory.js).
- **Практика:**
  - Калькулятор скидок — [`discount-calculator.js`](./01-basics/discount-calculator.js)
  - Проверка прав доступа пользователя к сайту — [`user-access.js`](./01-basics/user-access.js)

### Тема 2: Типы данных и работа с ними (`02-data-types/`)

- **Что изучено:** Примитивные и ссылочные типы данных, приведение типов, объект `Date`, рекурсия и глубокое копирование объектов.
- **Теория:** Конспект по типам данных — [`theory.js`](./02-data-types/theory.js).
- **Практика:**
  - Подсчет дней до Нового года — [`days-until-new-year.js`](./02-data-types/days-until-new-year.js)
  - Определение високосного года — [`leap-year.js`](./02-data-types/leap-year.js)
  - Рекурсивное глубокое копирование объектов — [`recursive-deep-copy.js`](./02-data-types/recursive-deep-copy.js)
  - Логика проверки логина пользователя — [`user-login.js`](./02-data-types/user-login.js)

### Тема 3: Условия и циклы (`03-loops-and-conditions/`)

- **Что изучено:** Конструкции `if / else`, `switch`, тернарный оператор, циклы `for`, `while`, вложенные циклы и работа с двумерными массивами (матрицами).
- **Практика:**
  - Проверка возраста пользователя — [`age-check-up.js`](./03-loops-and-conditions/age-check-up.js)
  - Базовый калькулятор — [`calculatror.js`](./03-loops-and-conditions/calculatror.js)
  - Работа с матрицами — [`matrix-task.js`](./03-loops-and-conditions/matrix-task.js) и [`matrix-task-2.js`](./03-loops-and-conditions/matrix-task-2.js)
  - Генератор таблицы умножения — [`multiplication table.js`](./03-loops-and-conditions/multiplication%20table.js)

### Тема 4: Методы обработки данных (`04-data-processing-methods/`)

- **Что изучено:** Методы массивов (`map`, `filter`, `reduce` и др.), перебор объектов, структура данных `Map` и построение цепочек (пайплайнов) преобразования данных.
- **Практика:**
  - «Выравнивание» вложенных объектов — [`flatten-object.js`](./04-data-processing-methods/flatten-object.js)
  - Выборка элементов из массива — [`get-gast-elements.js`](./04-data-processing-methods/get-gast-elements.js)
  - Клонирование и фильтрация объектов по возрасту — [`get-younger-clone.js`](./04-data-processing-methods/get-younger-clone.js)
  - Сравнение итерации `Map` и обычных объектов — [`map-vs-object-iteration.js`](./04-data-processing-methods/map-vs-object-iteration.js)
  - Система обработки заказов — [`order-processing-system.js`](./04-data-processing-methods/order-processing-system.js)
  - Пайплайн обработки данных — [`processing-for-data-pipeline.js`](./04-data-processing-methods/processing-for-data-pipeline.js)
  - Фильтрация спам-слов в строках — [`remove-spam.js`](./04-data-processing-methods/remove-spam.js)
  - Проверка валидности данных — [`validity-check.js`](./04-data-processing-methods/validity-check.js)

### Тема 5: Мини-проекты и работа с DOM (`05-js-projects/`)

- **Что изучено:** Манипуляции с DOM-деревом, обработка событий пользователя, работа с формами, модульная организация скриптов и настройка конфигурации JSON.
- **Проекты:**
  - **Базовая JSON-конфигурация** (`package.json`, `launch.json`) — [`basic-json-configuration/`](./05-js-projects/basic-json-configuration)
  - **Интерактивный список** — [`interactive-list-practice/`](./05-js-projects/interactive-list-practice)
  - **To-Do List (список задач)** — [`interactive-todo-list.js/`](./05-js-projects/interactive-todo-list.js)
  - **Корзина товаров** (расчет цен, управление товарами) — [`js-cart-project/`](./05-js-projects/js-cart-project)
  - **Форма оформления заказа** — [`order-form/`](./05-js-projects/order-form)

### Тема 6: Хранилища браузера и Fetch API (`06-storage-and-fetch-API/`)

- **Что изучено:** Сетевые запросы через `Fetch API`, написание API-клиента, клиентская валидация форм, сохранение состояния в `LocalStorage` и работа с клиентской базой данных `IndexedDB`.
- **Практика и мини-проекты:**
  - Работа с `IndexedDB` — [`indexed-data-base/`](./06-storage-and-fetch-API/indexed-data-base)
  - Сохранение пользовательских настроек в `LocalStorage` — [`user-settings-localstorage/`](./06-storage-and-fetch-API/user-settings-localstorage)
  - Клиент для работы с API и запросы — [`API-client.js`](./06-storage-and-fetch-API/API-client.js), [`fetch-api.js`](./06-storage-and-fetch-API/fetch-api.js)
  - Динамическая фильтрация данных — [`filtration.js`](./06-storage-and-fetch-API/filtration.js)
  - Валидация формы регистрации — [`registration-form-validation.js`](./06-storage-and-fetch-API/registration-form-validation.js)

### Тема 7: Дополнительная практика ES6+ (`07-add-practice/`)

- **Что изучено:** Деструктуризация массивов и объектов, синтаксический сахар современного JavaScript.
- **Практика:** Задачи на деструктуризацию — [`destructuring.js`](./07-add-practice/destructuring.js).
