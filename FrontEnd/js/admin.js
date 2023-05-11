 // Je récupère mon Token
 var authToken = localStorage.getItem('authToken');

document.addEventListener("DOMContentLoaded", function() {

    // Je récup mes class pour montrer ou cacher
    var classToHide = document.getElementsByClassName('classToHide');
    var classToShow = document.getElementsByClassName('classToShow');

    // Je récup mon bouton login logout qui se modifiera en fonction de la connexion
    var loginLogoutButton = document.getElementById('loginLogoutButton');

  // Si connexion réussi car récupération de mon token
if(authToken) {
    // Si l'utilisateur est connecté je cache les classToHide
    for(var i = 0; i < classToHide.length; i++) {
        classToHide[i].style.visibility = 'hidden';
    }
    // Je montre les ClassToShow
    for(var i = 0; i < classToShow.length; i++) {
        classToShow[i].style.visibility = 'visible';
    }

    // je change le texte de login en logout
    loginLogoutButton.innerText = 'logout';
} else {
    // Je montre les classtohide
    for(var i = 0; i < classToHide.length; i++) {
        classToHide[i].style.visibility = 'visible';
    }
    // je cache les classtoshow
    for(var i = 0; i < classToShow.length; i++) {
        classToShow[i].style.visibility = 'hidden';
    }

    // Changement du texte du bouton en "Login"
    loginLogoutButton.innerText = 'login';
}

    // j'ajoute un event sur le login via loginLogoutButton
    loginLogoutButton.addEventListener('click', function() {
        // Si je clique en étant connecté ça déconnecte
        if(authToken) {
            localStorage.removeItem('authToken');
            window.location.reload();
        } else {
            // si je clique sur login j'amène sur la page login
            window.location.href = '/login.html';
        }
    });
});