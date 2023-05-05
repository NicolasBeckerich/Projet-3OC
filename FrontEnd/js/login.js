document.getElementById('connexion-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const motdepasse = document.getElementById('motdepasse').value;
  const messageErreur = document.getElementById('message-erreur');

  // console.log(email, motdepasse, messageErreur, JSON.stringify({ email, motdepasse }));

  try {
    const response = fetch('http://localhost:5678/api/users/login', {
      // mode : 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ email, motdepasse }),
    }).then(res => res.json())
      .then(json => {
        if (response.status === 200) {

          const authToken = json.token;
          localStorage.setItem('authToken', authToken);
          window.location.href = '/';
          
        } else if (response.status === 404) {
          messageErreur.innerText = "Les informations utilisateur / mot de passe ne sont pas correctes.";
        } else {
          messageErreur.innerText = "Une erreur s'est produite lors de la connexion.";
        }
      });
  } catch (err) {
    messageErreur.innerText = "Une erreur s'est produite lors de la connexion.";
  }
});



        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
        // "Access-Control-Allow-Headers": "Content-Type",
        // "Access-Control-Allow-Credentials": true,



