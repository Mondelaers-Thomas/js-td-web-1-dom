// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/
function getInfosLiens() {
    const nbLien = document.querySelectorAll('a').length;
    console.log(`Nombres de liens sur cette page : ${nbLien}`);
    if(nbLien > 0){
    const hrefFirst = document.querySelector('a').getAttribute('href');
    console.log(`Premier lien de la page : ${hrefFirst}`);
    const hrefLast = document.getElementsByTagName('a')[nbLien - 1].getAttribute('href');
    console.log(`Dernier lien de la page : ${hrefLast}`);
    }
}
function possede(id, classe) {
    const instrumentId = document.getElementById(id);
    if(instrumentId === null){
        console.log("Aucun élément ne possède l'id " + id);
    } else if(instrumentId.classList.contains(classe)){
        console.log('true');
    } else {
        console.log('false');
    }
}
getInfosLiens(); //5, https://fr.wikipedia.org/wiki/Clarinette, https://fr.wikipedia.org/wiki/Clavecin

// Création nouveau élément pour la page :
//nouveau li
const liClavecin = document.createElement('li');
liClavecin.id = 'clavecin';
liClavecin.setAttribute('class', 'cordes pinces');
liClavecin.textContent = 'Le ';
//nouveau anchor
const aClavecin = document.createElement('a');
aClavecin.setAttribute('href', 'https://fr.wikipedia.org/wiki/Clavecin');
aClavecin.textContent = 'clavecin';
//ajout élément a dans le li
liClavecin.appendChild(aClavecin);
//li dans le ul
document.querySelector('ul').appendChild(liClavecin);

getInfosLiens(); //6, https://fr.wikipedia.org/wiki/Clarinette, https://fr.wikipedia.org/wiki/Clavecin

//Test fonction possede
possede('saxophone', 'bois');
possede('saxophone', 'cuivre');
possede('trompette', 'cuivre');
possede('contrebasse', 'cordes');

