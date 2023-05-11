// Création fonction pour la modale ouverture et fermeture
document.addEventListener('DOMContentLoaded', function () {

  // Définition des variables en les cherchant dans le HTML
  var modal = document.getElementById("modal");
  var editBtn = document.getElementById("editBtn");
  var closeModalBtn = document.getElementsByClassName("close")[0];



  // j'ajoute un évènement qui lorsque je clique sur le bouton editBtn s'affiche en display de none à block 
  // j'appelle aussi ma fonction displayWorks pour appeler mes travaux à ce moment là
  editBtn.addEventListener('click', function () {
    modal.style.display = "block";
    modalWorks();
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

// Ma fonction sert à importer mes travaux un par un depuis l'api, creer les éléments dynamiquement via js et supprimer les travaux en cliquant sur la corbeille
function modalWorks() {
  works().then(displayWorks => {
    const container = document.getElementById("works-container");

    // Supprimer tous les travaux précédents
    while (container.firstChild) {
      container.firstChild.remove();
    }

    displayWorks.forEach(displayWork => {
      // Création de figure
      const figure = document.createElement("figure");

      // Création de img
      const img = document.createElement("img");
      img.setAttribute("src", displayWork.imageUrl);
      img.setAttribute("alt", displayWork.title);

      // Création de figcaption
      const figcaption = document.createElement("figcaption");
      figcaption.innerText = "Éditer";

      // Création de l'icône font awesome avec ajout class icon style 
      const icon = document.createElement("i");
      icon.classList.add("fa", "fa-solid", "fa-trash-can", "icon-style");

      // Ajout des éléments enfants à la figure
      figure.appendChild(img);
      figure.appendChild(figcaption);
      figure.appendChild(icon);

      // Ajout de l'attribut data-work-id à l'élément figure pour stocker l'ID du work
      figure.setAttribute("data-work-id", displayWork.id);

      // Ajout de la figure au conteneur
      container.appendChild(figure);

      // J'ajoute l'événement de clic pour la suppression de travail sur l'icone
      icon.addEventListener("click", () => {
        // Récupérer l'ID du works à partir de l'attribut data-work-id de l'élément figure
        const workId = figure.getAttribute("data-work-id");

        // Supression d'un de mes travaux de L'api et modale avec la méthode DELETE je le fais via l'ID présent sur les travaux
        fetch(`http://localhost:5678/api/works/${workId}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json"
          },
        })
          .then(response => {
            if (response.ok) {
              console.log("c'est supprimé")
              // Supprimer le travail de la modale seulement si la suppression dans l'API réussit
              figure.remove();

            } else {
              // Si la supression ne se fait pas voir l'erreur 
            }
          })
          .catch(error => {
            
          });
      });
    });
  });
}
