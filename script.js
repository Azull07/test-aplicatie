// Funcție pentru butonul Login
function login() {
    // Preluăm valorile din formular
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validare simplă (nu reală, doar demo)
    if(username === "" || password === "") {
        alert("Te rog să completezi toate câmpurile!");
    } else {
        alert("Autentificare reușită!\nUtilizator: " + username);
        // poți adăuga aici redirecționare către altă pagină
        // ex: window.location.href = "dashboard.html";
    }
}

// Funcție pentru butonul "Începe acum"
const startBtn = document.querySelector(".hero .btn");
if(startBtn) {
    startBtn.addEventListener("click", function(event) {
        event.preventDefault(); // împiedică linkul să facă refresh
        alert("Bine ai venit! Urmează să începi administrarea.");
    });
}
