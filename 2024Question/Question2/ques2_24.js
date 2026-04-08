const makes = ["VW", "BMW", "BENZ", "AUDI", "FORD", "TOYOTA"]
const cars= [
    {name:"8R", type:"hatchback", image:"VW.png", make:"VW"},
    {name:"320i", type:"sedan", image:"BMW.png", make:"BMW" },
    {name:"A45S", type:"sports", image:"BENZ.png", make:"BENZ" },
    {name:"RS6", type:"hatchback", image:"AUDI.png", make:"AUDI" },
    {name:"SHELBY", type:"sportsback", image:"FORD.png", make:"FORD" },
    {name:"SUPRA", type:"sportsback", image:"TOYOTA.png", make:"TOYOTA" },
];
let makeList = document.getElementById("make-list");
let carName = document.getElementById("car-name")
let carType= document.getElementById("car-type")
let correct= document.getElementById("correct")
let carImg = document.getElementById("car-img")
let guessBtn= document.getElementById("guess-btn")
let total= document.getElementById("total")

for (let x = 0; x < makes.length; x++) {
    let options = document.createElement("option");
    options.value = makes[x];
    options.textContent = makes[x];
    makeList.appendChild(options);
}
let imgIndex = Math.floor(Math.random()*cars.length)
carImg.setAttribute("src", cars[imgIndex].image) 
carName.textContent= cars[imgIndex].name
carType.textContent= cars[imgIndex].type  

guessBtn.addEventListener('click', ()=>{
    if(makeList.value === cars[imgIndex].make) {
        correct.textContent = Number(correct.textContent) + 1;
        total.textContent = Number(total.textContent) + 1;
    } 
    else{
    total.textContent = Number(total.textContent) + 1;    
    }
})


 

