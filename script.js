// Selezione degli elementi del DOM
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

// Bottone "Aggiungi"
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); // Rimozione degli spazi inutili

  if (taskText === "") {
    alert("Inserisci un'attività");
    return;
  }

  // Elemento <li>
  const taskItem = document.createElement("li");

  // Aggiunta del testo dell'attività
  taskItem.textContent = taskText;

  // Crea il bottone "Rimuovi"
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.classList.add("deleteBtn");

  // Bottone elemento <li>
  taskItem.appendChild(deleteBtn);

  // Aggiunta dell'elemento <li> alla lista <ul>
  taskList.appendChild(taskItem);

  // Reset input
  taskInput.value = "";

  // Evento per rimuovere l'attività
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });
});
