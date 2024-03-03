const createBtn = document.getElementById("create");
const noteTitle = document.getElementById("title");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "Название",
    completed: true,
  },
  {
    title: "Название2",
    completed: false,
  },
];

render();

function render() {
  listElement.innerHTML = "";
  notes.forEach((note, index) => {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note, index));
  });
}

createBtn.onclick = function () {
  const newTitle = noteTitle.value;
  if (newTitle.length == 0) {
    return;
  }
  notes.push({
    title: newTitle,
    completed: false,
  });
  noteTitle.value = "";
  render();
};

listElement.addEventListener("click", function (event) {
  const dataSet = event.target.dataset;
  if (dataSet.index) {
    const index = parseInt(event.target.dataset.index);
    type = dataSet.type;
    if (type == "remove") {
      notes[dataSet.index].completed = false;
    }
    if (type == "toggle") {
      notes[dataSet.index].completed = true;
    }
    render();
  }
});

function getNoteTemplate(note, index) {
  return `
    <li
        class="list-group-item d-flex justify-content-between 
        align-items-center"
    >
    <span class="${note.completed ? "text-decoration-line-through" : ""}">
        ${note.title}
    </span>
    <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
    </span>
    </li>`;
}
