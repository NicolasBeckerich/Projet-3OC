fetch("http://localhost:5678/api/works") 
  .then(response =>  response.json() )
  .then(projects => {

    //Ecrire le html pour la figure

    projects.forEach(project => {
      console.log(project)
      
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.setAttribute("src",project.imageUrl);
    img.setAttribute("alt",project.title);
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = project.title;
    

    const divGallery = document.querySelector(".gallery");
      divGallery.appendChild(figure);
      figure.appendChild(img);
      figure.appendChild(figcaption);

      });
  })
  .catch(err => console.log(err))