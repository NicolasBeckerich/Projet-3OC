fetch("http://localhost:5678/api/categories")
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {

      const input = document.createElement("input");
      input.setAttribute("type", "button");
      input.setAttribute("data-categories", project.id);
      input.setAttribute("value", project.name);
      input.setAttribute("class", "Tous");
      const divfiltres = document.querySelector("#filtres");
      divfiltres.appendChild(input);


    });

    // Création constante correspondant récupération html via class = Tous
    const boutonFiltres = document.querySelectorAll(".Tous");
    // Création boucle sur Bouton Filtre pour récuperer tout les clique
    boutonFiltres.forEach(function (boutonFiltre) {
      //Création Evènement pour récupération des cliques e=evenement
      boutonFiltre.addEventListener("click", function (e) {
        // Remove les classes cliqué de chaque élément de mes boutons
        boutonFiltres.forEach(boutonFiltre => {
          boutonFiltre.classList.remove("test");

        });
        // Ajout classes css pour avoir le vert au clique avec le target
        e.target.classList.add("test");
        // création variable target afin d'aller chercher dans le Dataset de l'html la valeur correspondante
        let target = e.target.dataset.categories;
        //appelle de la fonction test avec paramètres target déclaré précedemment
        Test(target);
      });
    });
  })

  .catch(err => console.log(err))


// Appelle de la fonction sans filtres par la valeur donné au data-set Tous
Test("0");
// function Test(target = "0") option alternative par défaut paramètre fonction = "0"
/**
 * Création fonction permettant d'utiliser le fetch important les travaux dans la galerie et de filtrer en fonction de la category.Id
 * @param {string} target 
 */
function Test(target) {
  fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(projects => {
      //vider les éléments de la gallery et les recharger selon les filtres
      document.querySelector(".gallery").innerHTML = "";
      // condition permettant de filter selon mes catégories et le target
      if (target != "0") {
        const filtreCategories = projects.filter(function (project) {
          return project.categoryId == target;
        });
        // Redéclaration de valeur de porjects pour qu'il corresponde au tableau filtré
        projects = filtreCategories;
      }

       projects = Array.from(new Set(projects.map(a => a.id)))
        .map(id => {
          return projects.find(a => a.id === id)
        })

      projects.forEach(project => {

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.setAttribute("src", project.imageUrl);
        img.setAttribute("alt", project.title);
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = project.title;


        const divGallery = document.querySelector(".gallery");
        divGallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

      });
    })
    .catch(err => console.log(err))


}


