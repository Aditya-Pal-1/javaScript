

let form=document.getElementById('form');
let input=document.getElementById('input');
let msg=document.getElementById('msg');
let posts=document.getElementById('posts');

// console.log(form)
// console.log(input)
// console.log(msg)
// console.log(posts)

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation=()=>{
    if(input.value ===''){
        msg.innerHTML="TODO can not be empty";
    }
    else{
        msg.innerHTML="";
        acceptData();
        createPosts();
    }
}

let data={};
let acceptData=()=>{
    data["text"]=input.value;
}

let createPosts = ()=>{
    posts.innerHTML +=`
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i class="fas fa-edit" onClick="EditPost(this)"></i>
        <i class="fas fa-trash-alt" onClick="deletePost(this)"></i>
    </span>
    </div>`;
    input.value='';
}

let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
}

let EditPost = (e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}





