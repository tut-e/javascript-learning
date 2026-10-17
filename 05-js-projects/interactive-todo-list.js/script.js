const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-btn");

const newTask = (text) => {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const taskText = document.createElement("span");
  taskText.textContent = text;
  li.append(taskText);

  li.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-btn")) {
      li.classList.toggle("completed");
    }
  });

  return li;
};

const deleteBtn = () => {
  const btn = document.createElement("button");
  btn.textContent = "x";
  btn.classList.add("delete-btn");

  btn.addEventListener("click", () => {
    btn.parentElement.remove();
    console.log("Задача была успешно удалена!");
  });

  return btn;
};

addButton.addEventListener("click", function () {
  console.log("Кнопка была успешно нажата!");
  if (todoInput.value.trim()) {
    console.log(`Добавляем задачу: ${todoInput.value.trim()}`);

    const taskElement = newTask(todoInput.value.trim());
    const buttonElement = deleteBtn();
    taskElement.append(buttonElement);

    const todoList = document.querySelector(".todo-list");
    todoList.append(taskElement);

    todoInput.value = "";
  }
});
