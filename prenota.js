// VARIABILI


let navbar = document.querySelector(".navbar")
let navbarBrand = document.querySelector("#navbarBrand")


// EVENTI 

window.addEventListener("scroll", () => {
    
    if(window.scrollY > 0){
        
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

fetch("./prenota.JSON").then( (response) => response.json() ).then((data) =>{
    
    // CAMERE
    let roomsWrapper =  document.querySelector("#roomsWrapper")
    
    function createCard(array) {
        
        roomsWrapper.innerHTML = ""

        array.forEach((stanza, i) => {
            
            let col = document.createElement("div");
            
            col.classList.add("col-12", "col-lg-4", "my-3", );
            
            col.innerHTML = ` 
            <div class="card w-75">
            <div class="card-body">
            <img src="https://picsum.photos/20${i}" class="img-card card-img-top" alt="...">
            <h5 class="text-center h2benessere2 mt-3 fs-3">${stanza.nome}</h5>
            
            <hr>
            <ul class="fa-ul text-secondary fs-5">
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Ospiti: ${stanza.ospiti}
            <li><span class="fa-li"><i class="fas fa-check"></i></span>Prezzo: ${stanza.prezzo} € </li>
            <li><span class="fa-li"><i class="fas fa-check"></i></span>${stanza.pensione}</li>
        
            
            
            </ul>
            <div class="d-grid py-4">
            <a href="#" class="btn btn_nav text-uppercase">Seleziona</a>
            </div>
            </div>
            </div>
            `
            roomsWrapper.appendChild(col)
            
        });
       
        
    }
    createCard(data)


    
    // BTN RADIO X CAMERE 
    let radioWrapper = document.querySelector("#radioWrapper")

    function setRooms() {

        let rooms = data.map((elemento) => elemento.nome)  
        
        // Il map()metodo delle Arrayistanze crea un nuovo array popolato con i risultati della chiamata a una funzione fornita su ogni elemento nell'array chiamante.

        let uniqueCategories = [] ;   //  array di appoggio

        rooms.forEach((room)=> { 
            
            // Il includes()metodo delle Arrayistanze determina se un array include un certo valore tra le sue voci, ritornando true o false come appropriato.

            if(uniqueCategories.includes(room) == false){

                uniqueCategories.push(room)
            }

        })

        uniqueCategories.forEach((nome)=> {

            let div = document.createElement("div")
            div.classList.add("form-check")
            div.innerHTML = `
                                <input class="form-check-input fs-5" type="radio" name="flexRadioDefault" id="${nome}">
                                <label class="form-check-label h2benessere2 fs-5" for="flexRadioDefault1">
                                ${nome}
                                </label>`

                            radioWrapper.appendChild(div)
        })

    }

    setRooms()

    // FILTRI X CAMERE

    let checkInput =  document.querySelectorAll(".form-check-input")

    // find() si ferma quando incontra il primo elemento che soddisfa la condizione

    function filterByRoom() {

        let radioBtn = Array.from(checkInput); // trasforma in un array una nodelist
        
        let checked = radioBtn.find((elemento)=> elemento.checked == true)
        console.log(checked)
        
        if(checked.id == "All") {

            createCard(data)

        } else{

            let filtered = data.filter((elemento)=> elemento.nome == checked.id)
            createCard(filtered)
        }
        
    }
   


   checkInput.forEach((input)=>{

        input.addEventListener("click", () => {
            filterByRoom()
        })

   })


 // RANGE MAX & MIN PRICES

function findMaxMinPrice(){

    let prices = data.map((price) => price.prezzo)
    let max = Math.max(...prices);
    let min = Math.min(...prices);
    
}

findMaxMinPrice()
    
    // FINE FETCH
})  