

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
    <div class="card">
        <div class="card-body">
        <img src=${annuncio.img} class="img_benessere1 shadow mt-2" alt="">
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


// SWIPER


let swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });




  let recensioni = [

    {
        titolo: "Una terra tutta da scoprire",
        testo: "Le escursioni via terra organizzate dal Residence sono state veri e propri viaggi nell'anima della natura. Attraverso sentieri immersi nel verde, abbiamo avuto l'opportunità di avventurarci tra boschi secolari, ammirando la ricca flora e fauna che caratterizzano questa regione. Le guide esperte hanno condiviso con noi la loro conoscenza della zona, mostrandoci punti di interesse nascosti lungo il percorso.",
        voto: 4.5 ,
        nome: "Enrico"
    },
    {
        titolo: "Cucina eccezionale",
        testo: "Non posso non menzionare la cucina del Residence, che ci ha deliziato con autentiche prelibatezze locali e piatti internazionali. Ogni pasto è stato preparato con cura e presentato in modo impeccabile, soddisfacendo ogni nostro desiderio culinario.",
        voto: 5 ,
        nome: "Elena"
    },
    {
        titolo: "Trekking nei Segreti della Natura",
        testo: "Le escursioni via terra hanno offerto l'opportunità di praticare attività all'aria aperta come il trekkinge il ciclismo, permettendoci di vivere appieno la bellezza e l'energia della natura circostante. Ogni passo ci ha portato a nuove scoperte e avventure, arricchendo il nostro soggiorno con esperienze indimenticabili e momenti di pura gioia e divertimento.",
        voto: 4.9 ,
        nome: "Fabrizio"
    },
    {
        titolo: "Sentirsi a casa",
        testo: "Il Residence I Corsari è un gioiello nascosto che consiglio vivamente a chiunque cerchi un soggiorno indimenticabile. Con il suo personale premuroso, la posizione incantevole, la splendida piscina e la cucina deliziosa, è il luogo perfetto per rigenerarsi e creare ricordi preziosi. Sicuramente torneremo in futuro per vivere nuovamente questa straordinaria esperienza.",
        voto: 4.4 ,
        nome: "Matteo"
    },
    {
        titolo: "Avventure marine da sogno",
        testo: "Oltre alle numerose attrazioni offerte dal Residence [Nome], una delle esperienze più straordinarie che abbiamo vissuto durante il nostro soggiorno sono state le escursioni via mare. Grazie alla collaborazione con operatori locali esperti, abbiamo avuto l'opportunità di esplorare le acque cristalline e le meraviglie naturali della zona circostante.",
        voto: 4.7 ,
        nome: "Carla"
    },
    {
        titolo: "Escursioni via mare indescrivili",
        testo: "Le escursioni via mare organizzate dal Residence sono state davvero indimenticabili. Abbiamo avuto la possibilità di navigare lungo coste mozzafiato, scoprendo calette segrete e spiagge appartate che sembravano provenire direttamente da una cartolina. Gli skipper esperti hanno reso l'esperienza ancora più speciale, condividendo con noi la loro conoscenza della zona.",
        voto: 4.5 ,
        nome: "Ignazio"
    },
    {
        titolo: "Meritato Relax",
        testo: "Soggiornare presso il Residence I Corsari è stata un'esperienza indimenticabile sotto molti aspetti. Innanzitutto, vorrei sottolineare la straordinaria gentilezza e disponibilità del personale. Dal momento in cui siamo arrivati fino alla nostra partenza, siamo stati accolti con un sorriso caloroso e un servizio impeccabile, rendendo il nostro soggiorno estremamente piacevole e confortevole.",
        voto: 5 ,
        nome: "Cristina"
    },
   
  ]

  let swiper_wrapper = document.querySelector("#swiper_wrapper")

  recensioni.forEach((elemento, i)=> {

    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
    <div class="container-fluid">
    <div class="row">
      <div class="col-4 pe-0 mt-2 d-flex justify-content-center">
        <img src="https://picsum.photos/20${i}" alt="">
        
      </div>
      <div class="col-6 ps-0 d-flex justify-content-start align-items-center">
        <h5 class="h2benessere2 fs-4 text-center">${elemento.nome}</h5>
        
      </div>
    </div>
  </div>
      
        <hr>
        <div class="row justify-content-center">
          <div class="col-10  d-flex justify-content-center flex-column">
          <h5 class="h2benessere2 fs-4 text-center">${elemento.titolo}</h5>
            <p class=" text-secondary pRew">${elemento.testo}</p>
            
            
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-2 d-flex justify-content-center">
            <h6 class="pRew fs-6">Voto: <span class="text-secondary">${elemento.voto}</span><i class="bi bi-star-fill star fs-5"></i>
            </h6>
          </div>
        </div>
    
    `
    swiper_wrapper.appendChild(slide);
  })