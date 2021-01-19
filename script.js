function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function changeBackgroundColor(color) {
  const containerForm = document.getElementById("containerForm");
  containerForm.style.backgroundColor = "#" + color;
}

function appendMessage(author, msg) {
  const containerMessages = document.getElementById("containerMessage");

  const messageGroup = document.createElement("div");
  messageGroup.className = "message-group";

  const text = document.createElement("p");
  text.className = "message-text";
  text.innerHTML = author + ": " + msg;

  const button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = "Excluir";

  messageGroup.appendChild(text);
  messageGroup.appendChild(button);

  containerMessages.appendChild(messageGroup);

  button.addEventListener("click", function () {
    containerMessages.removeChild(messageGroup);
  });
}

function postMessage() {
  const name = document.getElementById("inputName").value;
  const message = document.getElementById("inputMessage").value;

  appendMessage(name, message);
}
