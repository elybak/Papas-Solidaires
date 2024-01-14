/* au clic sur le burger, on affiche les liens en flex */
/* etape 1 : on cache les liens */
/* etape 2 : on affiche les liens en flex */
/* etape 3 : on fait disparaitre le burger */
/* etape 4 : on fait apparaitre la croix */
/* etape 5 : on fait disparaitre la croix */
/* etape 6 : on fait apparaitre le burger */

/* explication : on ajoute une classe active au clic sur le burger */
/* code js : on selectionne le burger et on lui ajoute la classe active */
const burger = document.querySelector('.menu__burger');
const links = document.querySelector('.header__nav-links');

burger.addEventListener('click', () => {
    links.classList.toggle('active');
    /*burger.classList.toggle('active');*/
});
