const boxApp = document.getElementById("boxApp");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");

/* creare funzione per aggiungere note*/
function addNotes() {
  const note = document.createElement("textarea");
  note.classList.add("note");
  note.placeholder = "empty element";
  boxApp.appendChild(note);
}
/*creare funzione per togliere ultima nota */
function deleteNotes() {
  const last = boxApp.lastElementChild;
  if (last) {
    boxApp.removeChild(last);
  }
}

addBtn.addEventListener("click", addNotes);
removeBtn.addEventListener("click", deleteNotes);
