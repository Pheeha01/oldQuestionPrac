let testMarks= document.getElementById("testResults");
let calculateBtn= document.getElementById("computeBtn");
let clearBtn=document.getElementById("clearFields");
let perc1 = document.getElementById("test1Perc")
let perc2 = document.getElementById("test2Perc")
let perc3 = document.getElementById("test3Perc")
let perc4 = document.getElementById("test4Perc")


function calculateAndDisplay(inputValue, maxScore, outputElement) {
    if (inputValue > maxScore) {
        alert(`Aowa monna, moes you know that your test was out of ${maxScore}, so how did you go above that?`);
        return;
    }
    let percentage = Math.ceil((Number(inputValue) / maxScore) * 100);

    outputElement.textContent = `${percentage}`;
}

testMarks.addEventListener('input', (e)=>{
    if(isNaN(e.target.value)){
            alert("enter a valid number and it should be greater than or equals to 0")
            e.target.value =""
    }
    else{
        switch (e.target.id){
            case "test1":
                calculateAndDisplay(e.target.value, 50, perc1) 
                calculateBtn.addEventListener('click', ()=>{
                    if (Number(perc1.textContent) > 50) {
                    perc1.classList.add("pass");
                    } else {
                    perc1.classList.add("fail");
                    }
                })              
                break;
            case "test2":
                calculateAndDisplay(e.target.value, 60, perc2)
                calculateBtn.addEventListener('click', ()=>{
                    if (Number(perc2.textContent) > 50) {
                    perc2.classList.add("pass");
                    } else {
                    perc2.classList.add("fail");
                    }
                }) 
                break;
            case "test3":
               calculateAndDisplay(e.target.value, 60, perc3)
               calculateBtn.addEventListener('click', ()=>{
                    if (Number(perc3.textContent) > 50) {
                    perc3.classList.add("pass");
                    } else {
                    perc3.classList.add("fail");
                    }
                }) 
                break;
            case "test4":
                calculateAndDisplay(e.target.value, 50, perc4)
                calculateBtn.addEventListener('click', ()=>{
                    if (Number(perc4.textContent) > 50) {
                    perc4.classList.add("pass");
                    } else {
                    perc4.classList.add("fail");
                    }
                }) 
                break;
        }
    }
    clearBtn.addEventListener("click", () => {
        document.querySelectorAll("#testResults input").forEach(input => {
            input.value = "";
        });
        document.querySelectorAll(".pass, .fail").forEach(el => {
            el.textContent = "";
            el.classList.remove("pass", "fail");
        });
    });
})

// testMarks.addEventListener('input', (e)=>{
//     if(isNaN(e.target.value)){
//             alert("enter a valid number and it should be greater than or equals to 0")
//             e.target.value =""
//     }
//     else{
//         switch (e.target.id){
//             case "test1":
//                 if(e.target.value > 50){
//                     alert("Aowa monna, moes you know that your test was out of 50, so how did you go above that?")
//                 }
//                 else{
//                     calculateBtn.addEventListener('click', ()=>{
//                         let percentage= Math.ceil((Number(e.target.value)/50)*100)
//                         perc1.textContent = `${percentage}`
//                         if(percentage>50){
//                             perc1.classList.add("pass")
//                         }
//                         else{
//                             perc1.classList.add("fail")
//                         }   
//                     })
//                 }
//                 break;
//             case "test2":
//                 if(e.target.value > 60){
//                     alert("Aowa monna, moes you know that your test was out of 60, so how did you go above that?")
//                 }
//                 else{
//                     calculateBtn.addEventListener('click', ()=>{
//                         let percentage= Math.ceil((Number(e.target.value)/60)*100)
//                         perc2.textContent = `${percentage}`
//                         if(percentage>50){
//                             perc2.classList.add("pass")
//                         }
//                         else{
//                             perc2.classList.add("fail")
//                         }
//                     })               
//                 }
//                 break;
//             case "test3":
//                 if(e.target.value > 60){
//                     alert("Aowa monna, moes you know that your test was out of 60, so how did you go above that?")
//                 }
//                 else{
//                     calculateBtn.addEventListener('click', ()=>{
//                         let percentage= Math.ceil((Number(e.target.value)/60)*100)
//                         perc3.textContent = `${percentage}`
//                         if(percentage>50){
//                             perc3.classList.add("pass")
//                         }
//                         else{
//                             perc3.classList.add("fail")
//                         }
//                     })                
//                 }
//                 break;
//             case "test4":
//                 if(e.target.value > 50){
//                     alert("Aowa monna, moes you know that your test was out of 50, so how did you go above that?")
//                 }
//                 else{
//                     calculateBtn.addEventListener('click', ()=>{
//                         let percentage= Math.ceil((Number(e.target.value)/50)*100)
//                         perc4.textContent = `${percentage}`
//                         if(percentage>50){
//                             perc4.classList.add("pass")
//                         }
//                         else{
//                             perc4.classList.add("fail")
//                         }
//                     })                
//                 }
//                 break;
//         }
//     }
//     clearBtn.addEventListener("click", () => {
//         document.querySelectorAll("#testResults input").forEach(input => {
//             input.value = "";
//         });
//         document.querySelectorAll(".pass, .fail").forEach(el => {
//             el.textContent = "";
//             el.classList.remove("pass", "fail");
//         });
//     });
// })