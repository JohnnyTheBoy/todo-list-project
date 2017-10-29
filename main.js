
//#region - Selectors

const addNoteButton = document.querySelector('#addNoteButton');
const noteInputField = document.querySelector('#noteInputField');
const clearListButton = document.querySelector('#clearListButton');
const noteList = document.querySelector("#noteList");
const resultSection = document.querySelector("#resultSection");
const inputDisplay = document.querySelector("#inputDisplay");
const noteListElements = noteList.children;

//#endregion


//#region - add note main function
function addNote(input) {
    if (!checkInput(input, inputDisplay)) { return };
    let newNote = document.createElement("li");
    newNote.textContent = input.value;
    noteList.appendChild(newNote);
    addNoteButtons(newNote);
}
//#endregion


// document.addEventListener("click", (event) => console.log(event.target));

//#region - inputSection listeners
inputSection.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        addNote(noteInputField);
        noteInputField.value = "";
    }
})
//#endregion

//#region - resultSection listeners

noteList.addEventListener("mouseover", (event) => {

    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = '#cadcf9';
        let children = event.target.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove("hidden");
        }
    }
    else if (event.target.tagName === "BUTTON") {
        event.target.parentNode.style.backgroundColor = '#cadcf9';
        let parent = event.target.parentNode;
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].classList.remove("hidden");
        }
    }
});

noteList.addEventListener("mouseout", (event) => {

    if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "";
        let children = event.target.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add("hidden");
        }
    }
    else if (event.target.tagName === "BUTTON") {
        event.target.parentNode.style.backgroundColor = "";
        let parent = event.target.parentNode;
        for (let i = 0; i < parent.children.length; i++) {
            parent.children[i].classList.add("hidden");
        }
    }
})

resultSection.addEventListener("click", (event) => {
    let selected = event.target;
    let parent = selected.parentNode;
    let next = parent.nextElementSibling;
    let prev = parent.previousElementSibling;


    if (selected.tagName === "BUTTON") {
        if (selected.className === "remove") {
            noteList.removeChild(parent);
        }
        else if (selected.className === "moveUp") {
            if (parent === noteList.firstElementChild) {
                return;
            } else {
                noteList.insertBefore(parent, prev);
                parent.style.backgroundColor = "";
                let children = parent.children;
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.add("hidden");
                }

            }
        }
        else if (selected.className === "moveDown") {
            if (parent === noteList.lastElementChild) {
                return;
            }
            else {
                noteList.insertBefore(next, parent);
            }
        }
        else { noteList.innerHTML = ""; }
    }
});
//#endregion


//#region - Input field validation
const checkInput = (input, display) => {
    if (input.value === "") {
        display.textContent = "Warning: empty note!";
        input.setAttribute("disabled", "true");
        window.setTimeout(() => {
            display.textContent = "";
            input.removeAttribute("disabled");
        }, 1000);
        return false;
    }
    return true;
}
//#endregion

//#region - add note buttons : remove, move up, move down
function addNoteButtons(note) {
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("remove");
    remove.classList.add("hidden");
    note.appendChild(remove);

    let moveDown = document.createElement("button");
    moveDown.textContent = "Move Down";
    moveDown.classList.add("moveDown");
    moveDown.classList.add("hidden");
    note.appendChild(moveDown);

    let moveUp = document.createElement("button");
    moveUp.textContent = "Move Up";
    moveUp.classList.add("moveUp");
    moveUp.classList.add("hidden");
    note.appendChild(moveUp);
}
//#endregion

