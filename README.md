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






