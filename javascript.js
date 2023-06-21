/* // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente. */

window.onload=function(){ 
    document.querySelector(`.col-md-4 div:last-child li:nth-of-type(2)`).remove()
}
//Creo una funzione che al caricamento della pagina (onload), elimina il secondo elemento della lista all'interno dell'ultimo div del container con id col-md-4, in questo caso Twitter. Se avessi messo li:nth-of-type(1), sarebbe sparito GitHub. Con li:nth-of-type(3), sarebbe sparito Facebook.

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

for (let link of document.querySelectorAll(".stretched-link")) 
link.onclick = function (e) {
    e.target.closest(".col-md-6").remove();
}
//In questo modo ogni volta che clicco sul link ''continua a leggere''(target), la funzione mi va a prendere l'elemento più vicino che corrisponde a id(.col-md-6) e applica il remove, eliminando il parent dell'ancora stessa.

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

for (let author of document.querySelectorAll(".blog-post-meta a"))
author.addEventListener("mouseover", function (appears) {
    alert(appears.target.innerText);
});
//In questo modo creo un evento che funziona con ''mouseover'', cioè ogni volta che passo il mouse sull'elemento da me selezionato, in questo caso author, la funzione (appears)  fa comparire un alert col nome dell'autore su cui ho passato il cursore. 
// Es: passo il cursore su Marco, apparirà un alert con scritto ''Marco''.
 