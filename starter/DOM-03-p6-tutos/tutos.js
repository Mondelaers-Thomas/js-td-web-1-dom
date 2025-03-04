// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
DOM - PREPA 6 : « Tutos » : construire une liste de tutos JavaScript
Vous disposez d’un fichier HTML qui contient une nav.
1. Créer un objet tutos qui contient les tutoriels JavaScript suivants :
	- Openclassrooms : Apprenez à coder avec JavaScript : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
	- Openclassrooms : Créez des pages web interactives avec JavaScript : https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/
	- Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY : https://www.udemy.com/course/the-complete-javascript-course/
2. Parcourir cet objet pour récupérer ces infos afin d’afficher un menu créé dynamiquement dans la page Web :
	- Le titre du menu (créé dynamiquement avec JS) est « Mes tutos JavaScript »
	- Le libellé du lien est à chaque fois le texte qui précède le lien dans l’objet tutos
	- Pour chaque item, le lien mène vers l’adresse mentionnée dans l'objet tutos
	- Pour chaque lien, prévoyez un title (« Vers le site de … »,
		avec le texte qui précède le lien dans l’énoncé ci-dessus)
AIDE : Utilisez une boucle for/in pour parcourir l'objet tutos
*/
const tutos = {
    liens : ['https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript',
            'https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/',
            'https://www.udemy.com/course/the-complete-javascript-course/'],
    libelle : ['Openclassrooms : Apprenez à coder avec JavaScript',
            'Openclassrooms : Créez des pages web interactives avec JavaScript',
            'Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY']
}

//-- Création titre du menu
const heading2 = document.createElement('h2');
heading2.textContent = 'Mes tutos Javascript';
document.querySelector('nav').appendChild(heading2);
//-- Création ul
const ulTuto = document.createElement('ul');
ulTuto.id = 'tutosJavascript';
document.querySelector('nav').appendChild(ulTuto);

for(const prop in tutos){
    const liTuto = document.createElement('li');
    const aTuto = document.createElement('a');

}
