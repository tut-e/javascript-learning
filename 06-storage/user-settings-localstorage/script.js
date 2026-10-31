const form = document.querySelector("form");

const userSettings = {
  username: "Имя",
  theme: "Светлая",
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
