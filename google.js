
let rootelement=document.querySelector('.AllNotes');

let notes=[];

function renderelementToscreen(){
    if(localStorage.getItem('notes')){
        notes=JSON.parse(localStorage.getItem('notes'));
        notes.forEach(note=>{
            renderNoteList(note,note.UniqueId);
        })
    }
}

document.querySelector('#deleteAllNotes').addEventListener('click',()=>{
    document.querySelectorAll('.note').forEach(element=>{
        element.remove();
    })
    localStorage.clear();
})

document.querySelector('#Createbutton').addEventListener('click',()=>{
    let UniqueId='note'+Math.floor(Math.random()*1000);
    let note={
        title : document.querySelector('#input').value,
        content:document.querySelector('#text').value
    }
    addNotelocalStorage(note,UniqueId);
    if(note.title !=" " && note.content!=" "){
        renderNoteList(note,UniqueId);
    }
    else{
        alert("Enter Something");
    }
})

function renderNoteList(note,UniqueId){
        
        let maindiv=document.createElement('div');
        maindiv.classList.add('note',UniqueId);
        let notetitle=document.createElement('h4');
        let noteContent=document.createElement('p');
        let DeleteButton=document.createElement('button');
        DeleteButton.id="notebutton";

        DeleteButton.addEventListener('click',()=>{
            removeNoteElement(UniqueId);
        })

        notetitle.innerText=note.title;
        noteContent.innerText=note.content;
        DeleteButton.innerText="Delete Note";
        maindiv.appendChild(notetitle);
        maindiv.appendChild(noteContent);
        maindiv.appendChild(DeleteButton);
        rootelement.appendChild(maindiv);
        document.querySelector('#input').value="";
        document.querySelector('#text').value="";
}

function addNotelocalStorage(note,UniqueId){
    note={...note,UniqueId};
    notes.push(note);
    localStorage.setItem('notes',JSON.stringify(notes));
}



function removeNoteElement(id){
    document.querySelector('.'+id).remove();
    notes=JSON.parse(localStorage.getItem('notes'));
    let index=notes.findIndex(note=> note.UniqueId == id);
    notes.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notes))
}

renderelementToscreen();