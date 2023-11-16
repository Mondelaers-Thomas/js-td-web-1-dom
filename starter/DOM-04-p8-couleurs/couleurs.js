// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 8 : « Couleurs » :
1. Demandez à l'utilisateur de choisir la couleur de texte et la couleur de fond qu'il souhaite appliquer aux titres
   (indiquez-lui qu'il doit vous fournir la couleur souhaitée sous son nom anglais ou bien en utilisant le format hexadécimal ou RGB).
   Le message pourrait être celui-ci : 'Entrez la couleur de texte que vous souhaitez appliquer aux titres
   (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :' ;
2. Utilisez ces couleurs pour satisfaire les préférences de votre utilisateur
*/
const color = prompt('Entrez la couleur de texte que vous souhaitez appliquer aux titres' +
                    '(utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :');
const backcolor = prompt("Entrez la couleur d'arrière plan que vous souhaitez appliquer aux titres" +
    '(utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :')

const pElt = document.getElementsByTagName('p');

for(let i = 0; i < pElt.length; i++){
    pElt[i].style.color = color;
    pElt[i].style.backgroundColor = backcolor;
}
