let navbar = document.querySelector(".navbar")
let navbarBrand = document.querySelector("#navbarBrand")




window.addEventListener("scroll", () => {
    
    if(window.scrollY > 240){
        
        navbar.classList.add("nav-scrolled")
        navbarBrand.classList.add("transition")
        navbarBrand.innerHTML= "";
        navbarBrand.innerHTML= `<h3 class="resort-text display-3"> I Corsari - Resort</h3>`
        
        
        
        
    } else {
        navbar.classList.remove("nav-scrolled")
        navbarBrand.classList.add("transition")
        navbarBrand.innerHTML= `
        <h3 class="resort-text display-3"> I Corsari - Resort</h3>`
        
        
    }
    
})


// let logoNav = documents.query.querySelector("#logoNav")

// window.addEventListener("scroll", () => {

//     if(window.scrollY > 240){

//         logoNav.classList.add("d-none")

//     } else {
//         logoNav.classList.remove("d-none")
//     }

// })


let numBook = document.querySelector("#numBook")
let numFam = document.querySelector("#numFam")
let numCouple = document.querySelector("#numCouple")


function createInterval(elementId, finalNumber, frequency){
    let counter = 0
    
    let intervallo = setInterval(() => {
        if(counter < finalNumber){
            counter++
            elementId.innerHTML = counter;
        } else {
            clearInterval(intervallo)
        }
    }, frequency);
}

// createInterval(numBook, 80, 60)
// createInterval(numFam, 50, 105)
// createInterval(numCouple, 30, 180)

let check = false;

let cntNum = document.querySelector("#cntNum")

window.addEventListener("scroll", () => {
    
    if(window.scrollY > 800 && check == false){
        
        check = true
        createInterval(numBook, 80, 60)
        createInterval(numFam, 50, 105)
        createInterval(numCouple, 30, 180)
        
        
    } else {
        
    }
    
})

