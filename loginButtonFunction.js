
document.querySelector('.loginButton').addEventListener('click',()=>{
    let storedName=localStorage.getItem('name');
    let storedPw=localStorage.getItem('pw');

    let userName=document.querySelector('#userName');
    let password=document.querySelector('#userPassword');


    if(userName.value == storedName && password.value == storedPw){
        window.location="./shoppersloinButton.html";
    }
    else{
        alert("Error On Login");
    }

    // if(userName.value.length==0 && password.value.length==0){
    //     alert("Enter user name and password");
    // }
    // else{
    //     window.location = 'shoppersloinButton.html';
    // }
})
document.querySelector('.creatingAccount').addEventListener('click',()=>{
    window.location="registration.html";
})

document.querySelector('.LoginButton').addEventListener('click',()=>{
    let storedName=localStorage.getItem('name');
    let storedPw=localStorage.getItem('pw');

    let userName=document.querySelector('#userName');
    let password=document.querySelector('#userPassword');


    if(userName.value == storedName && password.value == storedPw){
        window.location="./sellindex3.html";
    }
    else{
        alert("Error On Login");
    }
})