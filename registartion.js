document.querySelector('#rgstr_btn').addEventListener('click',()=>{
    

    var name = document.getElementById('userName');
    var pw = document.getElementById('password');
    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');


    }else{
        localStorage.setItem('name', userName.value);
        localStorage.setItem('pw', password.value);
        alert('Your account has been created');
        window.location="shopeersLogin.html"
    }
})