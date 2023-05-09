//Soumission formulaire pour lorsque j'appuie sur envoyé
document.getElementById('connexion-form').addEventListener('submit', async (e) => {
  //empêche le rechargement de la page
  e.preventDefault();

  // Définition des variables en les cherchant dans le HTML
  const email = document.getElementById('email').value;
  const password = document.getElementById('motdepasse').value;
  const messageErreur = document.getElementById('message-erreur');

  try {

    // Envoie requête Http via méthode fectch à l'API j'utilise Post
    const response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',

    // Définition du corps de la réponse
      headers: {
        'Content-Type': 'application/json',
      },

      // Envoie des données en JSON via JSON.stringify pour analyse de email et password
      body: JSON.stringify({ email, password }),
    });

    // récupération réponse requête HTTP en JSON
    const json = await response.json();


    // Condition si la réponse est 200 donc connexion réussi, récupération du token via localSorage.setItem et redirection vers page d'accueil
    if (response.status === 200) {
      const authToken = json.token;
      localStorage.setItem('authToken', authToken);
      window.location.href = '/';

    // si reponse 404 réponse mauvaises information utilisateurs j'affiche un message d'erreur d'authentification
    } else if (response.status === 404) {
      messageErreur.innerText = "Les informations utilisateur / mot de passe ne sont pas correctes.";

    // Si différent des deux précédent, une erreur se produit à la tentative de connexion
    } else {
      messageErreur.innerText = "Une erreur s'est produite lors de la connexion.";
    }
    // est la pour attrapé une erreur particulière plus haut dans ce cas cela affiche un message d'erreur
  } catch (err) {
    messageErreur.innerText = "Une erreur s'est produite lors de la connexion.";
  }
});





