const fileList = document.getElementById("file-list");

fileList.addEventListener("click", (e) => {
  const clickedItem = e.target;
  if (clickedItem.tagName !== "LI") return;

  if (e.ctrlKey || e.metaKey) {
    clickedItem.classList.toggle("selected");
  } else {
    const allItems = fileList.querySelectorAll("li");
    allItems.forEach((item) => item.classList.remove("selected"));

    clickedItem.classList.add("selected");
  }
});
