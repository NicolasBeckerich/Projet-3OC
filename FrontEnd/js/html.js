/////////////////////////////////////////////////////Barre édition ///////////////////////////////////////


// je creer le div principal pour la barre d'édition
var modeEditionDiv = document.createElement("div");
modeEditionDiv.id = "mode-edition";
modeEditionDiv.className = "modifier classToShow";

// Créer le div à l'intérieur
var innerDiv = document.createElement("div");

// Créer l'icône
var icon = document.createElement("i");
icon.className = "fa-regular fa-pen-to-square";

// Créer le texte
var textNode = document.createTextNode(" Mode édition");

// Créer le bouton
var button = document.createElement("button");
button.textContent = "publier les changements";

// j'ajoute les éléments à l'intérieur
innerDiv.appendChild(icon);
innerDiv.appendChild(textNode);
innerDiv.appendChild(button);

// J'ajoute le div interne au div principal
modeEditionDiv.appendChild(innerDiv);

// Placer le mode édition juste après le body
document.body.insertBefore(modeEditionDiv, document.body.firstChild);


/////////////////////////////////////////////// Premier bouton modifié /////////////////////////////////////////

// Je creer le premier div
var modifyDiv = document.createElement("div");
modifyDiv.className = "classToShow";

// icône
var icon = document.createElement("i");
icon.className = "fa-regular fa-pen-to-square";
icon.id = "padding-i";

// le bouton
var modifyButton = document.createElement("button");
modifyButton.className = "style-modif";
modifyButton.textContent = "modifier";

// J'ajoute l'icône et le bouton au div
modifyDiv.appendChild(icon);
modifyDiv.appendChild(modifyButton);

// Je cherche la section "introduction" et la figure à l'intérieur
var introductionSection = document.querySelector('#introduction');
var figureElement = introductionSection.querySelector('figure');

// J'ajoute le div modifié à la fin de la figure dans la section "introduction"
figureElement.appendChild(modifyDiv);



///////////////////////////////////////////////////////// Deuxième bouton modifIé ///////////////////////////////

// Je creer le div principal
var showDiv = document.createElement("div");
showDiv.className = "classToShow";

// l'icône
var icon = document.createElement("i");
icon.className = "fa-regular fa-pen-to-square";
icon.id = "padding-i";

// le bouton
var button = document.createElement("button");
button.id = "editBtn";
button.textContent = "modifier";

// J'ajoute l'icône et le bouton au div principal
showDiv.appendChild(icon);
showDiv.appendChild(button);

// Je cherche la section "portfolio" et le div "flex-projects" à l'intérieur
var portfolioSection = document.querySelector('#portfolio');
var flexProjectsDiv = portfolioSection.querySelector('.flex-projects');

// Je trouve le titre h2 dans flexProjectsDiv
var h2Element = flexProjectsDiv.querySelector('h2');

// J'ajoute le div modifié après le titre h2 dans la div "flex-projects"
flexProjectsDiv.insertBefore(showDiv, h2Element.nextSibling);


//////////////////////////////////////////////// Créer la première modale /////////////////////////////////////////////////////

// je creer le div

var modal = document.createElement("div");
modal.id = "modal";
modal.className = "modal";

//  le contenu de la modale
var modalContent = document.createElement("div");
modalContent.className = "modal-content";

//  le bouton de fermeture
var closeModalBtn = document.createElement("span");
closeModalBtn.id = "closeModalBtn";
closeModalBtn.className = "close";
closeModalBtn.textContent = "×";

//  le titre
var galleryTypo = document.createElement("h2");
galleryTypo.id = "gallery-typo";
galleryTypo.textContent = "Galerie photo";

//  Le conteneur des travaux
var worksContainer = document.createElement("div");
worksContainer.id = "works-container";

// la barre grise
var grayBar = document.createElement("div");
grayBar.id = "gray-bar";

// le conteneur de la galerie modale
var modaleGallery = document.createElement("div");
modaleGallery.className = "modale-gallery";

//  le bouton pour ajouter une photo
var addPhoto = document.createElement("button");
addPhoto.id = "add-photo";
addPhoto.textContent = "Ajouter une photo";

//  le bouton pour supprimer la galerie
var removeGallery = document.createElement("button");
removeGallery.id = "remove-gallery";
removeGallery.textContent = "Supprimer la galerie";

// J'ajoute les éléments à la galerie modale
modaleGallery.appendChild(addPhoto);
modaleGallery.appendChild(removeGallery);

// J'ajoute les éléments au contenu de la modale
modalContent.appendChild(closeModalBtn);
modalContent.appendChild(galleryTypo);
modalContent.appendChild(worksContainer);
modalContent.appendChild(grayBar);
modalContent.appendChild(modaleGallery);

// j'ajoute le contenu à la modale
modal.appendChild(modalContent);

// je trouve l'élément parent de la section portfolio
var portfolioSection = document.getElementById("portfolio");

// Insérer la première modale après la section portfolio
portfolioSection.insertAdjacentElement("afterend", modal);



////////////////////////////////////////////// Créer la deuxième modale//////////////////////////////////////////////////////

// je creer le div
var secondModal = document.createElement("div");
secondModal.id = "second-modale";
secondModal.className = "modal";

//  le contenu de la modale
var secondModalContent = document.createElement("div");
secondModalContent.className = "modal-content";

//  le bouton de fermeture
var closeSecondModalBtn = document.createElement("span");
closeSecondModalBtn.id = "closeSecondModalBtn";
closeSecondModalBtn.className = "close";
closeSecondModalBtn.textContent = "×";

//  la flèche de retour
var backArrow = document.createElement("i");
backArrow.className = "fas fa-arrow-left fa-xl";
backArrow.id = "back-arrow";

//  le titre
var galleryTypo2 = document.createElement("h2");
galleryTypo2.id = "gallery-typo2";
galleryTypo2.textContent = "Ajout photo";

// le conteneur d'ajout de photo
var addPicture = document.createElement("div");
addPicture.id = "add-picture";

//  le label d'image
var sendImageLabel = document.createElement("label");
sendImageLabel.className = "send-image";
sendImageLabel.htmlFor = "bouton-search";

//  l'icône d'image
var imageIcon = document.createElement("i");
imageIcon.className = "fa-solid fa-image";

// j'ajoute l'icône au label
sendImageLabel.appendChild(imageIcon);

//  le label pour ajouter une photo
var addPhotoLabel = document.createElement("label");
addPhotoLabel.className = "send-image";
addPhotoLabel.htmlFor = "bouton-search";
addPhotoLabel.id = "bouton-add";
addPhotoLabel.textContent = "+ Ajouter photo";

//  l'input pour ajouter une photo
var photoInput = document.createElement("input");
photoInput.type = "file";
photoInput.id = "bouton-search";
photoInput.accept = "image/jpeg,image/png,image/jpg";

// j'ajoute l'input au label
addPhotoLabel.appendChild(photoInput);

// je creer le label pour le sous-titre de l'image
var subtitleImageLabel = document.createElement("label");
subtitleImageLabel.className = "send-image";
subtitleImageLabel.id = "subtitle-image";
subtitleImageLabel.textContent = "jpg.png : 4mo max";

// la prévisualisation d'image
var imagePreview = document.createElement("div");
imagePreview.id = "image-preview";

//  les éléments au conteneur d'ajout de photo
addPicture.appendChild(sendImageLabel);
addPicture.appendChild(addPhotoLabel);
addPicture.appendChild(subtitleImageLabel);
addPicture.appendChild(imagePreview);

//  le formulaire d'image
var formImage = document.createElement("form");
formImage.id = "form-image";

//  le label de titre
var titleLabel = document.createElement("label");
titleLabel.textContent = "Titre";

// l'input de titre
var titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.id = "title-image";

//  le label de catégorie
var categoryLabel = document.createElement("label");
categoryLabel.textContent = "Catégorie";

//  le select de catégorie
var categorySelect = document.createElement("select");
categorySelect.id = "objet";

//  les options du form
var defaultOption = document.createElement("option");
defaultOption.disabled = "disabled";
defaultOption.selected = "selected";

defaultOption.textContent = "Choisissez une catégorie";

var option1 = document.createElement("option");
option1.value = "1";
option1.textContent = "Objets";

var option2 = document.createElement("option");
option2.value = "2";
option2.textContent = "Appartements";

var option3 = document.createElement("option");
option3.value = "3";
option3.textContent = "Hôtels & restaurants";

// j'ajoute les options au select
categorySelect.appendChild(defaultOption);
categorySelect.appendChild(option1);
categorySelect.appendChild(option2);
categorySelect.appendChild(option3);

// j'ajoute les éléments au formulaire
formImage.appendChild(titleLabel);
formImage.appendChild(titleInput);
formImage.appendChild(categoryLabel);
formImage.appendChild(categorySelect);

//  le bouton de validation
var validationButton = document.createElement("button");
validationButton.id = "bouton-valider";
validationButton.type = "submit";
validationButton.textContent = "Valider";

//  le conteneur d'erreur d'image
var addImageError = document.createElement("div");
addImageError.id = "add-image-error";

// j'ajoute les éléments au contenu de la modale
secondModalContent.appendChild(closeSecondModalBtn);
secondModalContent.appendChild(backArrow);
secondModalContent.appendChild(galleryTypo2);
secondModalContent.appendChild(addPicture);
secondModalContent.appendChild(formImage);
secondModalContent.appendChild(validationButton);
secondModalContent.appendChild(addImageError);

// j'ajoute le contenu à la modale
secondModal.appendChild(secondModalContent);

// je met la deuxième modale après la première
modal.insertAdjacentElement("afterend", secondModal);


/////////////////////////////////////////////// creer Filtres /////////////////////////////

// je creer le div pour les filtres
var filtresDiv = document.createElement("div");
filtresDiv.id = "filtres";
filtresDiv.className = "classToHide";

// je vais vers l'élément parent de la section portfolio
var portfolioSection = document.getElementById("portfolio");

// je trouve la div gallery
var galleryDiv = portfolioSection.getElementsByClassName("gallery")[0];

// je met la div des filtres avant la div "gallery"
portfolioSection.insertBefore(filtresDiv, galleryDiv);