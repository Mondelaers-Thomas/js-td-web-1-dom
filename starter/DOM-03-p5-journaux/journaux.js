// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
DOM - PREPA 5 : « Journaux » : construire une liste de journaux
1. Stocker les urls de ces trois journaux français dans un tableau :
	- "http://lemonde.fr",
	- "http://lefigaro.fr",
	- "http://liberation.fr"
2. Ajouter la liste des journaux sur la page, dans la div d'id "contenu"
*/
/* ATTENTION : Le balisage HTML proposé dans la solution est incorrect.
Il a sans doute été simplifié à outrance dans un souci 
de rendre la génération la plus simple possible en JS.
TODO : améliorer le balisage HTML généré !!! */

const journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

const ulJournaux = document.createElement('ul');
ulJournaux.id = 'journauxfr';

document.getElementById('contenu').appendChild(ulJournaux);

journaux.forEach((journal => {
    //Création baliser li
    const liJournal = document.createElement('li');
    liJournal.setAttribute('class',  journal.substring(7, journal.length-3))
    liJournal.style.listStyleType = 'circle';
    //Création balise a
    const aJournal = document.createElement('a');
    aJournal.setAttribute('href', journal);
    aJournal.setAttribute('title', `Cliquez pour lire le journal ${journal.substring(7, journal.length-3)}`)
    aJournal.textContent = 'Journal ' + journal.substring(7, journal.length-3);

    liJournal.appendChild(aJournal);

    ulJournaux.appendChild(liJournal);

}))