
function keyHasBeenPressed(){
    let textareaContent=document.querySelector('textarea');
    let charrsCount=document.querySelector('.charcount');
    charrsCount.innerHTML=String(textareaContent.value).length;

    let wordCount=document.querySelector('.wordCount');
    let arrayWords=String(textareaContent.value).split(' ');
    wordCount.innerHTML=arrayWords.length;

    let charLimit=200;
    let charLimitElement=document.querySelector('.charLimitSpan');
    charLimitElement.innerHTML=charLimit-textareaContent.value.length;
    
    if(textareaContent.value.length>20){
        textareaContent.value=String(textareaContent.value).substring(0,charLimit);
    }

}

document.querySelector('.clearbutton').addEventListener("click",()=>{
    document.querySelector('textarea').value='';
})









































// let input=document.querySelector('textarea');
// let characters=input.value;
// console.log(characters);
// function count_c(characters){
//     s=characters.split(" ");
//     document.getElementById('msg').innerHTML=s.length;
// }