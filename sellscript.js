document.querySelector('#loginbtn').addEventListener('click',()=>{
    var storedName = localStorage.getItem('userName');
    var storedPw = localStorage.getItem('password');

    var userName = document.getElementById('userId');
    var userPw = document.getElementById('userPw');
  

    if(userName.value == storedName && userPw.value == storedPw){
       
        window.location = './sellindex3.html';

    }else{
        alert('Invalid Details');
    }
})