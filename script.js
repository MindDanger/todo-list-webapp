// Get elements from HTML
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when clicking button
addBtn.addEventListener("click", addTask);

// Allow pressing Enter to add task
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {

  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);

  taskInput.value = "";

  // Toggle completed when clicking the task item
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove task when clicking delete button
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

}