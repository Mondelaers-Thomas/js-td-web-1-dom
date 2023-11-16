//-- Exercice 1
let headDocument = document.head;
console.log(headDocument);

let bodyDocument = document.body;
console.log(bodyDocument);

let titre = document.title;
console.log(titre);

//-- Exercice 2
if(document.body.nodeType === document.ELEMENT_NODE){
    console.log('Body est un élément de type nœud élément')
} else {
    console.log('Body est un élément de type nœud textuel')
}
console.log(document.body.nodeType);

//-- Exercice 3
//Accéder au 1er enfant du body :
console.log(document.body.childNodes[0]);
//Accéder au 2e enfant du body :
console.log(document.body.childNodes[1]);
//Accéder à tout les enfants du body avec une boucle :
for(let i = 0; i < document.body.childNodes.length; i++){
    console.log(document.body.childNodes[i]);
}

//-- Exercice 4
// Affiche le parent du noeud h1 :
let h1 = document.body.childNodes[1];
console.log(h1.parentNode);
//Affiche le parent de document :
console.log(document.parentNode); //Affiche null car document n'a pas de noeud parent.