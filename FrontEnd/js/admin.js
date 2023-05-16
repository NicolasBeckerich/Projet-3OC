// Je récupère mon Token
var authToken = localStorage.getItem('authToken');

document.addEventListener("DOMContentLoaded", function () {

    // Je récupère mes class pour supprimer ou ajouter
    var classToHide = Array.from(document.getElementsByClassName('classToHide'));
    var classToShow = Array.from(document.getElementsByClassName('classToShow'));

    // Je récupère mon bouton login logout qui se modifiera en fonction de la connexion
    var loginLogoutButton = document.getElementById('loginLogoutButton');

    // Si connexion réussi car récupération de mon token
    if (authToken) {
        // Si l'utilisateur est connecté je supprime les éléments classToHide
        for (var i = 0; i < classToHide.length; i++) {
            classToHide[i].remove();
        }

    // Je change le texte de login en logout
        loginLogoutButton.innerText = 'logout';
    } else {
    // Si l'utilisateur n'est pas connecté je supprime les éléments classToShow
        for (var i = 0; i < classToShow.length; i++) {
            classToShow[i].remove();
        }
    }
    // J'ajoute un event sur le login via loginLogoutButton
    loginLogoutButton.addEventListener('click', function () {
        // Si je clique en étant connecté ça déconnecte
        if (authToken) {
            localStorage.removeItem('authToken');
            window.location.reload();
        } else {
            // Si je clique sur login j'amène sur la page login
            window.location.href = '/login.html';
        }
    });
});