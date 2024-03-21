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

// let check = false;

// let cntNum = document.querySelector("#cntNum")

// window.addEventListener("scroll", () => {
    
//     if(window.scrollY > 800 && check == false){
        
//         check = true
        
        
        
//     } else {
        
//     }
    
// })

let isIntersected = false;

//INTERSECTION OBSERVER NUMERI DINAMICI
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isIntersected == false){
            
            createInterval(numBook, 80, 60)
            createInterval(numFam, 50, 105)
            createInterval(numCouple, 30, 180)

            isIntersected = true;
            setTimeout(() => {
                isIntersected = false;
            }, 10000);
        }
    } )
})

intersectionObserver.observe(numBook)
intersectionObserver.observe(numFam)
intersectionObserver.observe(numCouple)


let offerte = document.querySelector("#Offerte");

let proposte = [

    {name: "Katana di Hattori Hanzo", categoria: "Accessori", prezzo: 500, img: "https://picsum.photos/200"},
    {name: "Vaso Ming", categoria: "Arredamento", prezzo: 700, img: "https://picsum.photos/201"},



]