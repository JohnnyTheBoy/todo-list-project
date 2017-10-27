
//#region 

const addNoteButton = document.querySelector('#addNoteButton');
const noteInputField = document.querySelector('#noteInputField');
const clearListButton = document.querySelector('#clearListButton');
const noteList = document.querySelector("#noteList");
const resultSection = document.querySelector("#resultSection");



//#endregion





function addNote (note){

    let newNote = document.createElement("li");
    newNote.textContent = note;
    noteList.appendChild(newNote);

}

resultSection.addEventListener("click", (event)=>{

    if (event.target.tagName === "BUTTON"){
        noteList.innerHTML = "";
    }
})


inputSection.addEventListener ("click", (event)=>{

    if (event.target.tagName === "BUTTON"){
        addNote(noteInputField.value);
        noteInputField.value = "";
    }

})