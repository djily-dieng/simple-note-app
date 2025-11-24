const boxApp = document.getElementById("boxApp");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("textareas")) || [];
  saved.forEach((value) => addNotes(value));
};

/* creare funzione per aggiungere note*/
function addNotes(value = "") {
  const note = document.createElement("textarea");
  note.classList.add("note");
  note.placeholder = "write here";
  note.value = value;
  boxApp.appendChild(note);
  note.addEventListener("input", saveNotes);
}
/*creare funzione per togliere ultima nota */
function deleteNotes() {
  const last = boxApp.lastElementChild;
  if (last) {
    boxApp.removeChild(last);
  }
}
function saveNotes() {
  const values = Array.from(boxApp.children).map((t) => t.value);

  localStorage.setItem("textareas", JSON.stringify(values));
}

addBtn.addEventListener("click", () => addNotes(""));
removeBtn.addEventListener("click", deleteNotes);
