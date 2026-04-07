let surname = document.getElementById("surname")
let fontFam= document.getElementById("font")
let color= document.getElementById("color")
let fontSize = document.getElementById("fontWei")
let surOut= document.querySelectorAll("input[type='radio']")
let blendBtn = document.createElement("button")
blendBtn.textContent= "Blend Now"
let go= document.createElement("label")
go.textContent="Go: "
document.body.append(go)
go.after(blendBtn)
let outputSec = document.createElement("div")
document.body.append(outputSec)
outputSec.style.width="100%"
outputSec.style.position = "relative" 
outputSec.style.height= "100px"
surOut[0].checked = false
surOut[1].checked= false
surOut[2].checked= false

blendBtn.addEventListener('click', ()=>{
    outputSec.innerHTML=""
    outputSec.style.fontFamily=`${fontFam.value}`
    outputSec.style.fontSize=`${fontSize.value}`
    outputSec.style.color=`${color.value}`
    radioButton(surname.value, outputSec)
    surname.value=""
})

function radioButton(name, div){
    name = surname.value.split("")
    if(surOut[0].checked){
        surOut[1].checked= false
        surOut[2].checked= false
        
        for (let i = 0; i < name.length; i++) {
           let spanCont= document.createElement("span")
            let pixels= 15
            pixels *=(i+1)
            spanCont.textContent= name[i]
            spanCont.style.left= `${pixels}px`
            spanCont.style.top= `${pixels}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)  
        }
        return
    }
    if(surOut[1].checked){
        surOut[2].checked= false
        surOut[0].checked= false
        for (let i = 0; i < name.length; i++) {
            let spanCont= document.createElement("span")
            spanCont.textContent= name[i]
            spanCont.style.left= `${Math.floor(Math.random()*300)}px`
            spanCont.style.top= `${Math.floor(Math.random()*100)}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)      
        } 
        return;
    }
    if(surOut[2].checked){
        surOut[1].checked = false
        surOut[0].checked= false
        name.reverse()
        for (let i = 0; i < name.length; i++) {
            let spanCont= document.createElement("span")
            let pixels= 15
            pixels *=(i+1)
            spanCont.textContent= name[i]
            spanCont.style.left= `${pixels}px`
            spanCont.style.top= `${pixels}px`
            spanCont.style.position= "absolute"
            div.appendChild(spanCont)      
        }
        return
    }   
}
