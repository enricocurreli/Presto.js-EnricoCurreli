

// VARIABILI


let navbar = document.querySelector(".navbar")
let navbarBrand = document.querySelector("#navbarBrand")

let numBook = document.querySelector("#numBook")
let numFam = document.querySelector("#numFam")
let numCouple = document.querySelector("#numCouple")

let isIntersected = false;

let offerte = document.querySelector("#cardsWrapper");

// modal

// let nameForm = document.querySelector("#nameForm")
// let btnForm = document.querySelector(".btnform")
// let modalBody = document.querySelector("#modalBody")
// let emailAddress = document.querySelector("#emailAddress")
// let message = document.querySelector("#message")




// OGGETTI

let offerteWeek = [
    

    {
        name: "Omaggio per bambini e ragazzi",
        pacchetto: "Bambini e ragazzi fino a 17 anni",
        pensione: "Pensione Completa", 
        prenota: "1 mar 2024 - 31 mar 2024", 
        soggiorna: "1 mar 2024 - 19 dic 2024",
        img: "media/foto1offerte.jpeg"
    },



    {
        name: "Pasqua e Pasquetta",
        pacchetto: "Bambini da 0 a 8 anni non pagano",
        pensione: "Pensione Completa", 
        prenota: "1 mar 2024 - 28 mar 2024", 
        soggiorna: "28 mar 2024 - 2 apr 2024",
        img: "media/fotopasqua.jpeg"
    },

    {
        name: "25 Aprile",
        pacchetto: "SPA + un trattamento benessere a scelta",
        pensione: "Pensione Completa", 
        prenota: "1 apr 2024 - 23 apr 2024", 
        soggiorna: "24 apr 2024 - 28 apr 2024",
        img: "media/25aprile.jpg"
    },

    {
        name: "Sa die de sa Sardigna",
        pacchetto: "Degustazione vini delle Cantine locali",
        pensione: "Pensione Completa", 
        prenota: "1 apr 2024 - 23 apr 2024", 
        soggiorna: "27 apr 2024 - 28 apr 2024",
        img: "media/bandieraSarda.jpg"
    },

]





// FUNZIONI

//  function createForm(nome, email, message){

//   contatti.push(  {"name": nome, "email": email, "message": message }  )
//     console.log(contatti)
//  }




// function setModal() {

//     contatti.forEach((persona)=>{

//         let h3 = document.createElement("h3");

//         h3.innerHTML = `<h3>Grazie ${persona.name} per averci contattato! Risponderemo appena possibile </h3>`
        
//         modalBody.appendChild(h3);
//     })
// }

// contatti.setModal()




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


// EVENTI 

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
            }, 5000);
        }
    } )
})  

intersectionObserver.observe(numBook)
intersectionObserver.observe(numFam)
intersectionObserver.observe(numCouple)



// CARDS OFFERTE 

offerteWeek.forEach((annuncio) => {

    let col = document.createElement("div");

    col.classList.add("col-12", "col-md-4", "my-5", "d-flex", "justify-content-center");

    col.innerHTML = ` 
    <div class="card w-75">
        <div class="card-body">
        <img src=${annuncio.img} class="img_benessere1 shadow mt-5" alt="">
        <h5 class="h2benessere2 mt-3">${annuncio.name}</h5>
            
            <hr>
            <ul class="fa-ul text-secondary">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>${annuncio.pacchetto}
                <li><span class="fa-li"><i class="fas fa-check"></i></span>${annuncio.pensione}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>${annuncio.prenota}</li>
                <li><span class="fa-li"><i class="fas fa-check"></i></span>${annuncio.soggiorna}</li>
                
                
            </ul>
            <div class="d-grid py-4">
                <a href="#" class="btn btn_nav text-uppercase">Scopri</a>
            </div>
            </div>
      </div>
      `
      cardsWrapper.appendChild(col)
})

