// A. MODIFIER LE STYLE D'UN ÉLÉMENT

// 1. La propriété style
/*
- Les éléments du DOM possèdent une propriété style.
- Cette propriété style est elle-même un objet de type Style
	- qui représente l'attribut  style de l'élément ;
	- les propriétés de cet objet correspondent aux propriétés CSS de l'élément
	  (elles doivent s'écrire en JS en camelCase, voir la référence sur le MDN :
	  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
*/
/* EXERCICE 1 :
- Clibez le premier paragraphe de la page
- Modifiez ses propriétés de style par JavaScript :
	* mettez la couleur du texte en #813050 ;
	* ajoutez-lui des marges de 1em en haut et en bas ;
	* mettez-lui une couleur de fond #D8EFE3 ;
	* ajoutez un padding de 0.5em ;
	* écrivez-le en Baskerville de préférence, sinon Garamond
	 (font-stack : Baskerville, Baskerville Old Face, Garamond, Hoefler Text, Times New Roman, serif);
	* doublez la taille de la police ;
	* centrez-le autour d'une largeur de 5em;
	* centrez-y le texte ;
*/
const firstHeading = document.querySelector('p');
firstHeading.style.color = '#813050';
firstHeading.style.margin = '1em 0';
firstHeading.style.backgroundColor = '#D8EFE3';
firstHeading.style.padding = '0.5em';
firstHeading.style.fontFamily = 'Baskerville, Baskerville Old Face, Garamond, Hoefler Text, Times New Roman, serif';
firstHeading.style.fontSize = '2em';
firstHeading.style.width = '5em';
firstHeading.style.textAlign = 'center';


// B. ACCÉDER AU STYLE D'UN ÉLÉMENT

// 1. Les limites de la propriété style
/*
On peut utiliser la propriété style pour récupérer les propriétés CSS d'un élément,
mais attention… elle ne représente QUE l'attribut style de l'élément,
elle ne permet donc pas d'accéder aux styles qui se trouvent dans une feuille de style externe
*/
/* EXERCICE 2 :
Affichez la couleur du texte de chacun des trois paragraphes de la page
*/

// 1. Les limites de la propriété style
console.log(document.getElementsByTagName('p')[0].style.color);//rgb(129, 48, 80)
console.log(document.getElementsByTagName('p')[1].style.color);//green
console.log(document.getElementsByTagName('p')[2].style.color);//empty string


// 2. La fonction getComputedStyle()
/*
La fonction window.getComputedStyle() (https://developer.mozilla.org/fr/docs/Web/API/Window/getComputedStyle)
- prend en paramètre un élément
- renvoie un objet de type Style représentant son style
- les différents styles de l'élément sont des propriétés de cet objet Style
*/
/* EXEFCICE 3 :
Affichez la police de caractère et la couleur du 3e paragraphe (qui a l'id "para")
*/
const paraElt = document.getElementById('para');
const paraEltStyle = window.getComputedStyle(paraElt);
console.log(`Police de caractère : ${paraEltStyle.fontFamily} et Couleur : ${paraEltStyle.color}`);