let toDo= document.getElementById("item");
let addBttn = document.getElementById("add");
let remBtn = document.getElementById("remove")
let ul= document.querySelector("#list")
let announce = document.createElement("label")
let countadd=1
let countrem=1

addBttn.addEventListener('click', ()=>{
    announce.innerHTML=""
    let todonow = toDo.value
    let li= document.createElement("li")
    if(countadd%2==0 && todonow.length!==0){
        li.classList.add("evenItem")
    }
    li.append(todonow)
    ul.appendChild(li)
    announce.innerHTML= `<br>${todonow}<br>${countadd} item(s) have been added`
    document.body.appendChild(announce).classList.add("added")
    countadd++
})
remBtn.addEventListener('click',()=>{
    let list=document.querySelectorAll("#list> li")
    let wasnotfound= false;
    list.forEach(li => {
        if(toDo.value !==li.textContent){
            wasnotfound=true;
        }
        else{
            li.remove()
            let todonow = toDo.value
            announce.innerHTML= `<br>${todonow}<br>${countrem} item(s) have been removed`
            document.body.appendChild(announce).classList.add("remItem")
        }
        if(countadd%2==0){
        li.classList.add("evenItem")
        }    
    });
    if(!wasnotfound){
        alert("Was not found")
        return
    }
    countrem++
})
