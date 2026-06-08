function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  const taskId = event.dataTransfer.getData("text");
  const taskCard = document.getElementById(taskId);

  const column = event.target.closest(".column");

  if (column) {
    column.appendChild(taskCard);
  }
}
