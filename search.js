

let rootElement=document.querySelector('.results');
let data=[]
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    data=json
    console.log(data)
});

document.querySelector('#searchinput').addEventListener('keyup',()=>{
    let searchterm=document.querySelector('#searchinput').value;
    // console.log(searchterm);
    let resultArray=[];
    if(String(searchterm).trim().length > 0){
        resultArray=data.filter(product=> String(product.title).includes(searchterm));
        renderingProducts(resultArray);
    }
    else{
        removeElement();
    }
    
})

function renderingProducts(products){
    removeElement();
    products.forEach(element=>{
        renderingSingle(element);
    }); 
}
function renderingSingle(product){
    let resultdiv=document.createElement('div');
    let resultimage=document.createElement('img');
    let Title=document.createElement('p');
    let Price=document.createElement('p');
    let Pbutton=document.createElement('button');

    resultimage.src=product.image;
    Title.innerText=product.title;
    Price.innerText=product.price;
    Pbutton.innerText="Purchase";

    resultdiv.className='result';
    resultdiv.appendChild(resultimage);
    resultdiv.appendChild(Title);
    resultdiv.appendChild(Price);
    resultdiv.appendChild(Pbutton);

    rootElement.appendChild(resultdiv);
}

function removeElement(){
    document.querySelectorAll('.result').forEach(element =>{
        element.remove();
    });
}