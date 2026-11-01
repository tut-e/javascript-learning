const form = document.querySelector("form");

const userSettings = {
  username: "Имя",
  theme: "light",
  notifications: true,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputName = document.querySelector("#username");
  userSettings.username = inputName.value.trim() || userSettings.username;

  const themeSelect = document.getElementById("theme");
  userSettings.theme = themeSelect.value ?? userSettings.theme;

  const inputNotifications = document.querySelector("#notifications");
  userSettings.notifications = inputNotifications.checked;

  localStorage.setItem("usersettings", JSON.stringify(userSettings));
});

const savedData = localStorage.getItem("usersettings");

try {
  const userData = JSON.parse(savedData);
  if (userData) {
    userSettings.username = userData.username ?? userSettings.username;
    userSettings.theme = userData.theme ?? userSettings.theme;
    userSettings.notifications =
      userData.notifications ?? userSettings.notifications;
  }
  document.getElementById("username").value = userSettings.username;
  document.getElementById("theme").value = userSettings.theme;
  document.getElementById("notifications").checked = userSettings.notifications;

  if (userSettings.theme === "dark") {
    document.body.classList.add("dark-theme");
  }
} catch (error) {
  console.log("Упс, что-то пошло не так!");
  console.error(error.message);
}
