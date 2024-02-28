const noteBook = document.getElementById("notebook")

const infoText = document.getElementById("info")

const plusBtn = document.getElementById("btn")

console.log(noteBook)

// infoText.addEventListener('dblclick',()=>{
    
// })

// function addToNote(){
//     noteBook.classList.add = `<p1>${text}</p1>`
// }

// plusBtn.addEventListener('click',function(){

// })

getNotes().forEach((note)=>{

    const noteElement = createNote(note.id,note.content)
    noteBook.insertBefore(noteElement,plusBtn)
    
});

function createNote(id,content){
    const element = document.createElement('textarea')
    element.classList.add("note");
    element.placeholder = "Empty";
    element.value = content

    element.addEventListener('dblclick',() => {
        const warning = confirm('Do you really want to delete this note')
        if(warning){
            deleteNote(id,element);
        }

    });
    //const del = document.createElement('button')
    // console.log(del)
    // del.classList.add("delBtn")
    // del.textContent = 'delete'
    // del.addEventListener('click',()=>{
    //     const warning = confirm('Do you really want to delete this note')
    //     if(warning){
    //             deleteNote(id,element);
    //        }
    // });
    //element.parentNode.insertBefore(del,element.nextSibling)

    element.addEventListener('input',()=>{
        updateNote(id,element.value)
    });

    return element;
};

// for deleting a node
function deleteNote(id,element){
    const notes = getNotes().filter((note)=>note.id!=id)
    save(notes)
    noteBook.removeChild(element)

}
// function to update node

function updateNote(id,content){
    const notes = getNotes()
    const target = notes.filter((note)=>note.id==id)[0];
    target.content = content
    save(notes)

};


// function to adding a note
function addToNote(){
    console.log('clicked')
    const notes = getNotes();

    const noteObj = {
        id: Math.floor(Math.random()*1000),
        content:''
    }
    const noteElement = createNote(noteObj.id,noteObj.content)
    noteBook.insertBefore(noteElement,plusBtn)

    notes.push(noteObj)

    save(notes);

}

// to save a notes

function save(notes){

    localStorage.setItem('note-app',JSON.stringify(notes))

}

function getNotes(){
    return JSON.parse(localStorage.getItem('note-app') || '[]');
}

plusBtn.addEventListener('click',addToNote)
