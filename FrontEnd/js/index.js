fetch("http://localhost:5678/api/categories")
  .then(response => response.json())
  .then(categories => {

    //Céer l'élèment id 0 name Tous
    categories.unshift({
      id : 0,
      name : "Tous"
    });
    
    console.log(categories);
    categories.forEach(category => {

      const span = document.createElement("span");
      span.setAttribute("data-categories", category.id);
      span.innerText = category.name;
      span.classList.add("Tous");

      const divfiltres = document.querySelector("#filtres");
      divfiltres.appendChild(span);


      //Création Evènement pour récupération des cliques e=evenement
      span.addEventListener("click", function (e) { //-------------------------------------------------Remplacer e par event
        
        // Création constante correspondant récupération html via class = Tous
        const boutonFiltres = document.querySelectorAll(".Tous");

        // Remove les classes cliqué de chaque élément de mes boutons
        boutonFiltres.forEach(boutonFiltre => {
          boutonFiltre.classList.remove("filtres-color");

        });
        // Ajout classes css pour avoir le vert au clique avec le target
        e.target.classList.add("filtres-color");
        // création variable target afin d'aller chercher dans le Dataset de l'html la valeur correspondante
        let target = e.target.dataset.categories;
        //appelle de la fonction test avec paramètres target déclaré précedemment
        Tri(target);
      });
    });
  })

  .catch(err => console.log(err))


// Appelle de la fonction sans filtres par la valeur donné au data-set Tous
Tri(0);
// function Test(target = 0) option alternative par défaut paramètre fonction = 0
/**
 * Création fonction permettant d'utiliser le fetch important les travaux dans la galerie et de filtrer en fonction de la category.Id
 * @param {string} target 
 */
function Tri(target) {
  fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(projects => {

      //vider les éléments de la gallery et les recharger selon les filtres
      document.querySelector(".gallery").innerHTML = "";

      // condition permettant de filter selon mes catégories et le target
      if (target > 0) {
        projects = projects.filter(function (project) {
          return project.categoryId == target;
        });
      }
      
      projects.forEach(project => {

        const figure = document.createElement("figure");

        //création élémént img
        const img = document.createElement("img");
        img.setAttribute("src", project.imageUrl);
        img.setAttribute("alt", project.title);

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = project.title;

        //remplacement depuis api vers html
        const divGallery = document.querySelector(".gallery");
        divGallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

      });
    })
    .catch(err => console.log(err))


}


