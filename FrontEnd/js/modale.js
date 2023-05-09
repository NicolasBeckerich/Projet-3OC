// Création fonction pour la modale
document.addEventListener('DOMContentLoaded', function () {

  // Définition des variables en les cherchant dans le HTML
    var modal = document.getElementById("modal");
    var editBtn = document.getElementById("editBtn");
    var closeModalBtn = document.getElementsByClassName("close")[0];


  
    // j'ajoute un évènement qui lorsque je clique sur le bouton editBtn s'affiche en display de none à block 
    editBtn.addEventListener('click', function () {
      modal.style.display = "block";
    });
  

    // j'ajoute un évènement qui lorsque je clique sur le bouton closeModalBtn s'affiche en display de block à none
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = "none";
    });
  

    // Si je clique en dehors de la fenêtre de modale elle sera masquée
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });