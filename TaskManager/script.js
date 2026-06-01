const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
    <input type="checkbox" class="check-box">
    <span class="task-text">${taskText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  const checkbox = li.querySelector(".check-box");
  const textSpan = li.querySelector(".task-text");
  const editBtn = li.querySelector(".edit-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  checkbox.addEventListener("change", function () {
    textSpan.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  editBtn.addEventListener("click", function () {
    if (editBtn.innerText === "Edit") {
      const input = document.createElement("input");
      input.type = "text";
      input.value = textSpan.innerText;
      input.className = "edit-input";

      li.replaceChild(input, textSpan);
      editBtn.innerText = "Save";
    } else {
      const input = li.querySelector(".edit-input");

      const newSpan = document.createElement("span");
      newSpan.className = "task-text";
      newSpan.innerText = input.value;

      if (checkbox.checked) {
        newSpan.classList.add("completed");
      }

      li.replaceChild(newSpan, input);
      editBtn.innerText = "Edit";
    }
  });
}