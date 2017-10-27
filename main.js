
//#region 

const addNoteButton = document.querySelector('#addNoteButton');
const noteInputField = document.querySelector('#noteInputField');
const clearListButton = document.querySelector('#clearListButton');
const noteList = document.querySelector("#noteList");
const resultSection = document.querySelector("#resultSection");
const inputDisplay = document.querySelector("#inputDisplay");



//#endregion





function addNote(note) {
    if (!checkInput(note)) { return };
    inputDisplay.textContent = '';
    let newNote = document.createElement("li");
    newNote.textContent = note;
    noteList.appendChild(newNote);

}

resultSection.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        noteList.innerHTML = "";
    }
})


inputSection.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        addNote(noteInputField.value);
        noteInputField.value = "";
    }

})


const checkInput = (note) => {
    if (note === "") {
        inputDisplay.textContent = "Warning: empty note!";
        noteInputField.setAttribute("disabled", "true");
        window.setTimeout(() => {
            inputDisplay.textContent = "";
            noteInputField.removeAttribute("disabled");
        }, 1000);
        return false;
    }
    return true;
}