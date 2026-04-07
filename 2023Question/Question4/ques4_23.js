let kms = document.getElementById("Distance")
let pace = document.getElementById("targetPace")
let calculateBtn = document.getElementById("Calculate")
let table = document.getElementById("paceTable")
let tbody = document.querySelector("#paceTable tbody")

calculateBtn.addEventListener('click', ()=>{
    tbody.innerHTML= "";
    console.log(tbody)
    distance = kms.value
    pacePKm = pace.value
    if(isNaN(distance) || !pacePKm.includes(":") ||pace.length===0 || distance.length===0){
        return alert("Please enter a valid distance or time")
    }
    tbody.style.display = "table-row-group";
    for (let i = 1; i <= distance; i++) {
        let finalTime = calculate_time(pacePKm, i) 
        tbody.innerHTML +=
        `
            <tr>
                <td>${i}</td>
                <td>${finalTime}</td>
            </tr>
        `   
    }  
    console.log(tbody)
})

function calculate_time(mytime, myfunction){
    let mmss= mytime.split(":")
    if (mmss.length===3){
        let hours = mmss[0]
        let minutes= mmss[1]
        let seconds= mmss[2]
        let newHrs= Math.ceil(Number(hours*myfunction))
        if(newHrs<10){
            newHrs= "0"+newHrs
        }
        let newMin= Math.ceil(Number(minutes*myfunction))
        if(newMin>=60){
            let toHrs= newMin/60 
            newHrs= newHrs+toHrs
            newMin=Math.ceil(Number(newMin%60))
        }
        if(newMin<10){
            newMin= "0"+newMin
        }
        let newSec = Math.ceil(Number(seconds*myfunction))
        if(newSec>=60){
           let toMins= Math.floor(newSec/60)
            newMin= Number(newMin)+toMins
            newSec=Math.ceil(newSec%60)
        }
        if(newSec<10){
            newSec= "0"+newSec
        }
        return `${newHrs}:${newMin}:${newSec}`
    }
    let hrs= 0
    let minutes= mmss[0]
    let seconds= mmss[1]
    let newMin= minutes*myfunction
    if(newMin>=60){
        let toHrs= newMin/60 
        hrs+=toHrs
        newMin=Math.ceil(newMin%60)
    }
    if(newMin<10){
        newMin= "0"+newMin
        console.log(typeof(newMin))
    }
    let newSec = seconds*myfunction
    if(newSec>=60){
        let toMins= Math.floor(newSec/60)
        newMin= Number(newMin)+toMins
        newSec=Math.ceil(newSec%60)
    }
    if(newSec<10){
        newSec= "0"+newSec
    }
    if (hrs>0){
        return `${hrs}:${newMin}:${newSec}`
    }
    return `${newMin}:${newSec}`
}