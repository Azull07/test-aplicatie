// Funcție Login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username === "" || password === "") {
    alert("Te rog să completezi toate câmpurile!");
  } else {
    alert("Autentificare reușită la Asociații Felix!\nUtilizator: " + username);
  }
}

// Buton "Începe acum"
const startBtn = document.querySelector(".hero .btn");
if(startBtn) {
  startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Bine ai venit la Asociații Felix! Urmează să începi administrarea.");
  });
}

// Dashboard cards interactive
const dashboardCards = document.querySelectorAll(".dashboard-card");
dashboardCards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    alert("Accesezi secțiunea: " + title);
  });
});
