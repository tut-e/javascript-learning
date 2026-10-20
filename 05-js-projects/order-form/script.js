const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasError = false;

  const errorMessages = document.querySelectorAll(".error-msg");
  errorMessages.forEach((item) => {
    item.textContent = "";
    item.style.display = "none";
  });

  const inputName = document.querySelector("#userName");
  if (inputName.value.trim().length < 2) {
    const errMessage = document.querySelector("#userNameError");
    errMessage.textContent = "Ошибка: минимальная длинна имени 2 символа";
    errMessage.style.display = "block";
    hasError = true;
  }

  const inputPhone = document.querySelector("#userPhone");
  if (!inputPhone.value.trim().startsWith("+")) {
    const errMessage = document.querySelector("#userPhoneError");
    errMessage.textContent = "Ошибка: номер должен начинаться со знака +";
    errMessage.style.display = "block";
    hasError = true;
  }

  const inputDelivery = document.querySelector("#deliveryMethod");
  if (!inputDelivery.value) {
    const errMessage = document.querySelector("#deliveryMethodError");
    errMessage.textContent = "Ошибка: выберите способ доставки";
    errMessage.style.display = "block";
    hasError = true;
  }

  const inputAgreement = document.querySelector("#agree");
  if (!inputAgreement.checked) {
    const errMessage = document.querySelector("#agreeError");
    errMessage.textContent =
      "Прочтите и примите условия пользования и политику конфиденциальности";
    errMessage.style.display = "block";
    hasError = true;
  }

  if (!hasError) {
    const formData = new FormData(form);
    const formProps = Object.fromEntries(formData);

    console.log(formProps);
    form.reset();
    alert("Данные успешно отправлены!");
  }
});
