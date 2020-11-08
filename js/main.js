let textarea = document.getElementsByClassName("textarea");
let notesContainer = document.getElementById("notes-container");
let notes;
let id = 0;
window.onload = function(){
   notes =  JSON.parse(localStorage.getItem('note'));
   console.log(notes);
   if(notes == null){
       notes = [];
       localStorage.setItem('note',  JSON.stringify(notes));
   }else{
       id = notes[notes.length - 1].id;
   }
}

let note = {
    text: null,
    id: null
}

function saveNoteToLS(textareaId){
    console.log(textareaId);
    note = {
        text: textarea[textareaId].value,
        id: textareaId
    }
    let currentAreas = notes.filter(currentNote => currentNote.id == textareaId);
    console.log(currentAreas);
    if(currentAreas.length != 0){
        notes = notes.filter(currentNote => currentNote.id != textareaId);
        localStorage.setItem('note', JSON.stringify(notes));
    }
    notes.push(note);
    localStorage.setItem('note', JSON.stringify(notes));

}
function createNew(){
    let newNote = document.createElement("div");
    newNote.className += 'note';
    //newNote.appendChild(newNote);
    notesContainer.appendChild(newNote);
    newNote.innerHTML = `
    <div class="note-header">
        <button class="note-header__delete"></button>
    </div>
    <div class="note-context">
        <textarea onchange="saveNoteToLS(${id++})" type="text" name="textarea" class="textarea"></textarea>
    </div>`;
    notesContainer.appendChild(newNote);
}

