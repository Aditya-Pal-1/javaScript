
let random1= Math.floor(Math.random()*100+1);
document.querySelector('.postNumber').innerHTML=random1;

document.querySelector('.followers').innerHTML=Math.floor(Math.random()*10000+1);
document.querySelector('.following').innerHTML=Math.floor(Math.random()*100+1);

fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user=data.results[0];
        document.querySelector('.profileName').innerHTML=user.name.first
        document.querySelector('.bioName').innerHTML=user.name.first+" "+user.name.last;
        document.querySelector('.profilepicture').src=user.picture.medium;
        for(let i=0;i<=random1;i++){
            let img=document.createElement('img');
            img.src="https://picsum.photos/9"+i;
            document.querySelector('.posts').append(img);
        }
    })
})