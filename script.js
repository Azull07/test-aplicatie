// Funcție pentru butonul Login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Te rog să completezi toate câmpurile!");
    } else {
        alert("Autentificare reușită la Asociații Felix!\nUtilizator: " + username);
    }
}

// Funcție pentru butonul "Începe acum"
const startBtn = document.querySelector(".hero .btn");
if(startBtn) {
    startBtn.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Bine ai venit la Asociații Felix! Urmează să începi administrarea.");
    });
}

// Funcționalitate pentru dashboard cards
const dashboardCards = document.querySelectorAll(".dashboard-card");

dashboardCards.forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        switch(title) {
            case "Întreținere":
                alert("Accesezi secțiunea Întreținere!");
                break;
            case "Index contoare":
                alert("Accesezi secțiunea Index contoare!");
                break;
            case "Plată card":
                alert("Accesezi secțiunea Plată card!");
                break;
            case "Comunicare":
                alert("Accesezi secțiunea Comunicare!");
                break;
            case "Anunțuri":
                alert("Accesezi secțiunea Anunțuri!");
                break;
            case "Documente":
                alert("Accesezi secțiunea Documente!");
                break;
            default:
                alert("Accesezi secțiunea " + title);
        }
    });
});
