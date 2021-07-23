import BotaoConclui from "./componentes/concluirTarefa.js";
import BotaoDeleta from "./componentes/deletarTarefa.js";

const newTask = (event) => {
  event.preventDefault();
  console.log(event)
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const newMessage = input.value;

  const task = document.createElement("li");
  task.classList.add('task')

  const content = `<p class="content">${newMessage}</p>`;

  task.innerHTML = content;

  task.appendChild(BotaoConclui());
  task.appendChild(BotaoDeleta());
  list.appendChild(task);
  input.value = " ";
};

const formButton = document.querySelector("[data-form-button]");

formButton.addEventListener("click", newTask);