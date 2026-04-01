let pics = document.getElementById("pics")
let favoriteSection = document.getElementById("favorites")
let actions= document.getElementById("actions")

pics.addEventListener('click', (e)=>{
    if(e.target.tagName.toLowerCase()!=="img"){return}

    if(!favoriteSection.contains(e.target)){
        favoriteSection.appendChild(e.target)
        e.target.classList.add("moved")
        let li = document.createElement("li")
        li.textContent= `${e.target.src.slice(-19)} was moved to favorites`;
        li.classList.add("toFav")
        actions.append(li)
    }
})
favoriteSection.addEventListener('click', (e)=>{
    if(e.target.tagName.toLowerCase()!=="img"){return}

    if(favoriteSection.contains(e.target)){
        pics.appendChild(e.target)
        e.target.classList.remove("moved")
        let li = document.createElement("li")
        li.textContent= `${e.target.src.slice(-19)} was moved back to album`;
        li.classList.add("fromFav")
        actions.append(li)
    }
})