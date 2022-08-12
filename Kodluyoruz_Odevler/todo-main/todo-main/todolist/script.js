const add = document.querySelector('#liveToastBtn');
add.addEventListener('click',newElement);

let storageItems = [];

const input = document.querySelector('#task');
const ul = document.querySelector('#list');

ul.addEventListener('click',deleteItems)



let getItemsFls = function(){
    if(localStorage.getItem('storageItems')===null){
        storageItems=[];
    }else{
        storageItems = JSON.parse(localStorage.getItem('storageItems'));
    }
    return storageItems;
}

function loadItemFromLs(){
    storageItems = getItemsFls()
    storageItems.forEach(element => {
        createElement(element)
    });
}

loadItemFromLs()


let setItemsTols = function(text){
    storageItems = getItemsFls();
    storageItems.push(text);
    localStorage.setItem('storageItems',JSON.stringify(storageItems));
}

function newElement(event){
    
    if(input.value.trim() ==''){
        notAddFunction();
    }else{
        addFunction();

        createElement(input.value)

        setItemsTols(input.value);
        console.log(input.value)
        
        input.value = ''
    }
}

function createElement(text){
    const li =document.createElement('li');
    li.innerHTML ='<i class="fa-solid fa-check ok"></i> '+ text

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times text-dark"></i>';

    li.appendChild(a)
    ul.appendChild(li)
}

function deleteItemFromLs(text){
    storageItems = getItemsFls()
    storageItems.forEach(function(item,index){
        if(item===text){
            storageItems.splice(index,1)
        }
    })
    localStorage.setItem('storageItems',JSON.stringify(storageItems))
}

function deleteItems(e){
    if(e.target.className === "fas fa-times text-dark"){
        e.target.parentElement.parentElement.remove();

        deleteItemFromLs(e.target.parentElement.parentElement.textContent.trim())
    }

    e.target.style.background == 'aqua' ? e.target.style.background ='' : e.target.style.background ='aqua';
    e.target.style.color =='white' ? e.target.style.color ='black' : e.target.style.color ='white';
    e.target.classList.toggle('ekle');
    e.target.firstElementChild.classList.toggle('ok');

    e.preventDefault()
}

addFunction = (event) => {
    let myAlert = document.querySelector('#liveToast');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}

notAddFunction = (event) => {
    let myAlert = document.querySelector('#liveToast1');
    let bsAlert = new bootstrap.Toast(myAlert);
    bsAlert.show();
}