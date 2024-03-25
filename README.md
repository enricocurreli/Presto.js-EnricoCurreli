# IMPOSTAZIONE PROGETTO FRONT-END

*EVENTO SCROLL*


let navbar =  document.querySelector(".navbar")
window.addEventListener("scroll", ()=>{

    if(window.scrollY>200){
        navbar.style.backgroundColor =  blue

    } else {

    }
})

<!-- LIBRERIA AOS -->



CSS:

<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

JS:

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
  AOS.init();
</script>


<!-- CHIAMATE ASINCRONE -->

setInterval -> ci permette di eseguire un blocco di codice ogni tot numero di millisecondi

setInterval( ()=>{


}, 3000);

clearIntervall -> ferma il setInterval





INTERSECTION OBSERVER -> CLASSE -> PERSON


<!-- struttura-->

grid system:
  a sinistra metto i filtri;
  a destra gli articoli;

nel JSON mettero tutte le camere con le caratteristiche;

3 tipi di filtri:
  - prezzo;
  - n. ospiti;
  - posizione stanza;




<!-- CHIAMATE DALL'ESTERNO -->
<!-- FORMATO JSON -->


*JSON (JavaScript Objet Notation) è un formato dei dati leggero che si utilizza nella maggior parte dei casi per far viaggiare dati online*

<!-- API (Application Programming Interface) -> protocollo per mettere in comunicazione sistemi diversi per lo scambio di informazioni -->

let array = [
  `{name: "Fabrizio"},
  {name: "Giuseppe"},
  {name: "Antonio"},`
]

tramutare dati pesanti in dati più leggeri, come un array in una stringa


FETCH() -> chiamata asincrona che mi permette di catturare della API esterne e portare quelle informazioni all'interno del mio foglio JS. Essendo una funzione abbiamo un return, in questo caso è un oggetto che viene chiamato PROMISE che può essere di 3 tipi:

  - Fullfilled (completata);
  - Rejected(rifiutata);
  - Pending(in attesa);


.then() -> un'altra chiamata asincrona ci permette di gestire la nostra promise;

fetch("indirizzo API").then((response) => response.json()).then((data)=> console.log(data)) 


<!-- per i filtri uso .map -->


<!-- CREAZIONE CATEGORIA -->

let radioWrapper = document.querySelector("#radioWrapper")
function setCategories(){

  let categories = data.map( (el)=> el.categoria)
  let uniqueCategories = []; //array di appoggio 

  categories.forEach( (category) => {
    if(uniqueCategories.includes(category) == false) {

      uniqueCategories.push(category)

    }
  })

  uniqueCategories.sort().forEach( () => {
    let div = document.createElement("div")
    div.classList.add("form-check")
    div.innerHTML = `...contenuto...`
    radioWrapper.appendChild(div)
  })
}

setCategories()


<!-- FILTRO PER CATEGORIA -->

<!-- FILTRO PER PREZZO -->

<!-- FILTRO PER PAROLA -->