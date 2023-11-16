/* 1. Cibler l'élément d'id nav */
const idNav = document.getElementById('nav');

/* 2. Récupérer tous les li */
const liName = document.getElementsByTagName('li');
console.log(liName);

/* 3. Cibler le 4e li */
const li4Name = document.getElementsByTagName('li')[3];
console.log(li4Name);

/* 4. Compter le nombre de li dans la page */
const liLengthName = document.getElementsByTagName('li').length;
console.log(liLengthName);

/* 5. Cibler le premier li pair */
const firstLiPair = document.getElementsByClassName('pair')[0];

/* 6. Récupérer tous les li de classe impair */
const liImpair = document.getElementsByClassName('impair');

/* a) afficher ce qu'on obtient */
console.log(liImpair);

/* b) afficher le 2e li de classe impair */
console.log(liImpair[1]);

/* c) afficher chacun des li impair */
for(let i = 0; i < liName.length; i++){
    if(i % 2 === 0){
        console.log(liName[i]);
    }
}

/* d) compter le nombre de li de classe impair dans la page */
const liNmbrsImpair = document.getElementsByClassName('impair').length;

/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
const sibling1 = liName[3].previousSibling;


/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
const sibling2 = liName[3].nextSibling;

/* 9. Cibler le parent du 4e li */
const parent1 = liName[3].parentNode;

/* 10. Récupérer tous les enfants de l'ul */
const enfantsUl = document.getElementById('nav').childNodes;

/* a) afficher ce qu'on obtient */
console.log(enfantsUl);

/* b) cibler le 1er enfant de l'ul */
const firstEnfantsUl = document.getElementById('nav').firstChild;

/* c) cibler le dernier enfant de l'ul */
const lastEnfantsUl = document.getElementById('nav').lastChild;


/* c) cibler le 4e enfant de l'ul */
const enfants4emeUl = document.getElementById('nav').childNodes[4];

/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
//-- <a href="photos.html">Photos</a>

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
//-- erreur rien n'est retourner car li[2] n'a qu'un seul enfant donc celui auquel on veut accéder n'existe pas.

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
//-- retourne le noeud enfant de type text 'About me' de l'élément a.


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild.nodeName);
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild.nodeType);
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild.nodeValue);

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeName);
console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeType);
console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild.nodeValue);


/* 13. Changer le texte "Photos" en "Visuals" */
//document.getElementById('nav').getElementsByTagName('a')[2].firstChild.nodeValue = 'Visuals';


/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
const a = document.getElementById('nav').getElementsByTagName('a')[2];
a.setAttribute('href', 'photo.php');

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
a.setAttribute('title', 'voir mes photos');

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
//const liSupp = document.querySelector("ul").querySelectorAll("li")[document.querySelector("ul").querySelectorAll("li").length-1];
//document.querySelector("ul").removeChild(liSupp);

/* 16. Ajouter un li à la fin de la liste */
//const newLi = document.createElement('li');
//document.querySelector("ul").appendChild(newLi);


/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */
const newLink = document.createElement('a');
newLink.appendChild(document.createTextNode('Bibliographie'));
newLink.setAttribute('href', 'biblio.html');
newLink.setAttribute('title', 'consulter ma bibliographie');
const newItem = document.createElement('li');

const liPhoto = document.querySelector('ul').getElementsByTagName('li')[3];
const ul = liPhoto.parentNode;

ul.insertBefore(newItem, liPhoto);
newItem.appendChild(newLink);

/* 18. Modifier le lien "Photos"
	  - changer son libellé en "Visuals"
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie"
	  - changer la cible du lien en "visuals.html " */
const anchorPhoto = document.getElementById('nav').getElementsByTagName('a')[2];
anchorPhoto.firstChild.nodeValue = 'Visuals';
anchorPhoto.setAttribute('title', 'voir la galerie');
anchorPhoto.setAttribute('href', 'visuals.html');

/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals"
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie"
	   - qui pointe vers la page "visuals.html " */
const clonePhoto = liPhoto.cloneNode(true);
clonePhoto.firstChild.nodeValue = 'Visuals';
clonePhoto.setAttribute('title', 'voir la galerie');
clonePhoto.setAttribute('href', 'visuals.html');

/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
const newLastLi = document.createElement('li');
newLastLi.appendChild(document.createTextNode('Contact : monmail@gmail.com'));
ul.replaceChild(newLastLi, ul.lastElementChild);