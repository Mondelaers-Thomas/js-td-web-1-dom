// 1. Le contenu HTML
/*
La propriété innerHTML
- peut être utilisée pour modifier le contenu HTML d'un élément du DOM ;
- est souvent utilisée pour "vider" un élément de tout son contenu
!! N.B. Limiter son usage (déconseillé pour plusieurs raisons), on verra des méthodes plus adaptées.
*/
/*
EXERCICE 1 :
1. Enregistrer l'ul d'id "langages" dans la variable ulElt et l'afficher
2. Ajouter un nouveau langage (C) à cette liste et la réafficher
	(Aide : on lui ajoute (opérateur+=) une entrée sous la forme d'une balise <li>)
3. Vider la liste de tout son contenu et la réafficher
*/
// 1.
const ulElt = document.getElementById('langages');
console.log(ulElt.innerHTML);
// 2.
ulElt.innerHTML += '<li id=c> C </li>';
// 3.
//ulElt.innerHTML = '';
console.log(ulElt.innerHTML);

// 2. Le contenu textuel
/*
La propriété textContent permet de modifier le contenu textuel d'un élément du DOM.
*/
/*
EXERCICE 2 :
Compléter le titre du document pour qu'il devienne
"Quelques langages de programmation" et le réafficher
*/
document.querySelector('h1').textContent = 'Quelques langages de programmation';
console.log(document.querySelector('h1').textContent);

// 3. Les attributs
/*
- La méthode setAttribute() permet de définir la valeur de l'un des attributs d'un élément.
  Elle prend en paramètres le nom et la valeur de cet attribut.
- On peut aussi modifier les attributs via la propriété qui les représente
*/
/*
EXERCICE 3 :
1. Stocker le premier titre du document dans une variable titreElt et l'afficher
2. Lui donner l'id "titre" et le réafficher
	- avec la méthode setAttribute()
	- via la propriété id de l'élément h1
*/
// 1.
const titreElt = document.querySelector('h1');
console.log(titreElt);
// 2.
titreElt.setAttribute('id', 'titre');
console.log(titreElt);


// 4. Les classes
/*
- On peut utiliser la propriété classList pour ajouter ou supprimer des classes à un élément du DOM.
- On emploie les méthodes add() (ajout) et remove() (suppression)
- Une autre méthode très intéressante est la méthode toggle(), qui change la présence d'une classe dans la liste :
	* si la classe existe, toggle() la supprime et retourne false,
	* si la classe n'existe pas, toggle() l'ajoute et retourne true.
*/
/*
EXERCICE 4 :
- Accéder au premier titre h1 et le stocker dans la variable titreElt
- Lui retirer la classe "debut"
- Lui ajouter la classe "titre"
- L'afficher
*/
titreElt.classList.remove('debut');
titreElt.classList.add('titre');
console.log(titreElt);

/*
EXERCICE 5 :
- Accéder au premier li et le stocker dans la variable liElt
- S'il possède la classe "hide", la retirer, sinon, l'ajouter
- L'afficher
- Ajouter la classe "hide" manuellement dans le fichier HTML
- Retester le script
*/
const liElt = document.querySelector('li');
liElt.classList.toggle('hide');
console.log(liElt);


/***********************************************
 **********/

// B. AJOUTER UN NOUVEL ÉLÉMENT

// 1. La méthode de base en 3 étapes
/*
L'ajout d'un nouvel élément à une page web se décompose en trois opérations :
1°) Création du nouvel élément :
	- on le crée avec la méthode createElement(), qui
		* est une méthode de l'objet document
		* prend en paramètre le nom de balise du nouvel élément
	- on le stocke dans une variable
2°) Définition des informations de l'élément :
	- on lui ajoute un contenu avec la propriété textContent
	- on lui ajoute des attributs (id, classe, etc.) comme vu ci-avant
3°) Insertion du nouvel élément dans le DOM
	- on l'ajoute à son parent avec la méthode appendChild, qui
		* est une méthode de l'élément parent du nouveau noeud
		* ajoute le nouveau noeud à la fin de la liste des noeuds enfants de ce parent.
	- N.B. d'autres méthodes existent pour insérer le nouvel élément dans le DOM,
		voir les méthodes alternatives ci-après
*/
/*
EXERCICE 6 :
Ajouter le langage "ruby" à la liste des langages :
- 1. Créer un élément li et le stocker dans une variable rubyElt
- 2. Lui ajouter un id "python" et y inscrire le texte "Python"
- 3. L'ajouter dans l'ul d'id "langages"
- 4. Afficher le contenu HTML de l'ul
*/
//1.
const rubyElt = document.createElement('li');
//2.
rubyElt.id = 'Ruby';
rubyElt.textContent = 'Ruby';
//3.
document.querySelector('#langages').appendChild(rubyElt);
//4.
console.log(document.querySelector('#langages').innerHTML);

// 2. Variantes pour ajouter un élément

// 2.1. Création d'un noeud textuel avec la méthode createTextNode()
const pythonElt = document.createElement('li');
pythonElt.id = 'Python';
pythonElt.appendChild(document.createTextNode('Python'));
document.querySelector('#langages').appendChild(pythonElt);

// 2.2. Ajout d'un noeud avant un autre noeud avec la méthode insertBefore()
const sqlElt = document.createElement('li');
sqlElt.id = 'mysql';
sqlElt.appendChild(document.createTextNode('MySQL'));
document.querySelector('#langages').insertBefore(sqlElt, rubyElt);


// 2.3. Choix de la position exacte du nouveau noeud
/*
On peut définir encore plus précisément la position des éléments insérés avec la méthode insertAdjacentHTML(), qui
- est une méthode d'un élément existant
- prend comme 1er paramètre une position :
	* beforebegin : avant l'élément existant lui-même ;
	* afterbegin : à l'intérieur de l'élément existant, avant son premier enfant ;
	* beforeend: à l'intérieur de l'élément existant, après son dernier enfant ;
	* afterend: après l'élément existant lui-même ;
- prend comme 2e paramètre une chaîne de caractères HTML qui représente le nouveau contenu à ajouter
*/
/*
EXERCICE 7 :
Ajouter le langage "JavaScript" au tout début de la liste des langages
dans une li d'id "javascript" avec la méthode insertAdjacentHTML()
puis afficher le contenu HTML de l'ul
*/
//Ajout noeud li au début de l'ul
document.querySelector('#langages').insertAdjacentHTML("afterbegin", '<li id=javascript>JavaScript</li>');

console.log(document.querySelector('#langages').innerHTML);

/***********************************************
 **********/

// C. REMPLACER OU SUPPRIMER UN NOEUD

// 1. Remplacer un noeud existant
/*
La méthode replaceChild()
- remplace un nœud enfant de l'élément courant par un autre
- prend en paramètres (dans cet ordre) le nouveau noeud et celui qui est remplacé.
*/
/*
EXERCICE 8 :
- Remplacer le langage C# par un nouvel élément correspondant au langage CSS
- Afficher le contenu HTML de la liste ainsi modifiée
*/
const csharpElt = document.getElementById('csharp')
const cssElt = document.createElement('li');
cssElt.id = 'cascadestylesheet';
cssElt.textContent = 'CSS';
document.querySelector('#langages').replaceChild(cssElt, csharpElt);
console.log(document.querySelector('#langages').innerHTML);

// 2. Supprimer un noeud existant
/* La méthode removeChild() permet de supprimer un nœud, elle
- s'applique sur le parent
- prend en paramètre le noeud à supprimer du DOM
*/
/*
EXERCICE 9 :
- Supprimer l'élément correspondant au langage CSS que vous venez d'insérer
- Réaffichez la liste des langages
*/
document.querySelector('#langages').removeChild(cssElt);
console.log(document.querySelector('#langages').innerHTML);
