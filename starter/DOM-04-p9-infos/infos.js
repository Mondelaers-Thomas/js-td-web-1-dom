// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/
const idContenu = document.getElementById('contenu');
const idContenuStyle = window.getComputedStyle(idContenu);

const ulInfo = document.createElement('ul');

const liHeight = document.createElement('li');
const liWidth = document.createElement('li');

liHeight.textContent = 'Hauteur : ' + idContenuStyle.height;
liWidth.textContent = 'Largeur : ' +  idContenuStyle.width;

ulInfo.appendChild(liHeight);
ulInfo.appendChild(liWidth);

document.getElementById('infos').appendChild(ulInfo);