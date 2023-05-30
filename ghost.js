const textArea = document.getElementById("textArea");

textArea.addEventListener("focus", () => {
  createGhostDiv();
});

textArea.addEventListener("blur", () => {
  removeGhostDiv();
});

function createGhostDiv() {
  const ghostDiv = document.createElement("div");
  ghostDiv.id = "ghostDiv";
  ghostDiv.style.width = "200px";
  ghostDiv.style.height = "60px";
  ghostDiv.style.border = "2px solid black";
  ghostDiv.innerText = "Boo! I`m a ghost!";
  textArea.parentNode.appendChild(ghostDiv);
}

function removeGhostDiv() {
  const ghostDiv = document.getElementById("ghostDiv");
  if (ghostDiv) {
    ghostDiv.parentNode.removeChild(ghostDiv);
  }
}
