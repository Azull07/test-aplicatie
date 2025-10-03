/* ===== LOGIN FUNCTION ===== */
function login() {
  const username = document.getElementById("username")?.value;
  const password = document.getElementById("password")?.value;

  if (!username || !password) return; // doar dacă input-urile există

  // date demo
  if(username === "admin" && password === "1234") {
    alert("Login reușit! Bine ai venit, " + username + "!");
    localStorage.setItem("loggedInUser", username); // salvăm utilizatorul logat
    window.location.href = "index.html";
  } else {
    alert("Utilizator sau parola incorecte!");
  }
}

/* ===== DASHBOARD WELCOME MESSAGE ===== */
window.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  if(user) {
    const heroContent = document.querySelector(".hero-content h1");
    if(heroContent) heroContent.textContent = `Bine ai venit, ${user}!`;
  }
});

/* ===== INTRETINERE / PLATA FACTURI ===== */
function plateste(button) {
  if(!button) return;
  let row = button.parentElement.parentElement;
  let statusCell = row.querySelector(".status");

  if(statusCell.innerText === "Neplătită") {
    alert("Plata a fost efectuată cu succes!");
    statusCell.innerText = "Plătită";
    statusCell.style.color = "green";
    button.parentElement.innerHTML = "✔";
  }
}

/* ===== INDEX CONTOARE ===== */
const formContoare = document.getElementById("form-contoare");
if(formContoare) {
  formContoare.addEventListener("submit", function(e) {
    e.preventDefault();
    const apaRece = document.getElementById("apa-rece").value;
    const apaCalda = document.getElementById("apa-calda").value;
    const gaz = document.getElementById("gaz").value;
    const curent = document.getElementById("curent").value;

    const tabel = document.getElementById("tabel-contoare");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${apaRece}</td><td>${apaCalda}</td><td>${gaz}</td><td>${curent}</td>`;
    tabel.appendChild(row);

    alert("Index salvat cu succes!");
    this.reset();
  });
}

/* ===== PLATA CARD ===== */
const formCard = document.getElementById("form-card");
if(formCard) {
  formCard.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Plata a fost procesată cu succes!");
    this.reset();
  });
}

/* ===== COMUNICARE - MESAJE ===== */
const formMesaj = document.getElementById("form-mesaj");
if(formMesaj) {
  formMesaj.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = document.getElementById("mesaj").value;
    const li = document.createElement("li");
    li.textContent = text;
    document.getElementById("lista-mesaje").appendChild(li);
    this.reset();
  });
}

/* ===== ANUNTURI - ADAUGARE ===== */
const formAnunt = document.getElementById("form-anunt");
if(formAnunt) {
  formAnunt.addEventListener("submit", function(e) {
    e.preventDefault();
    const text = document.getElementById("anunt-nou").value;
    const li = document.createElement("li");
    li.textContent = "📌 " + text;
    document.getElementById("lista-anunturi").appendChild(li);
    this.reset();
  });
}

/* ===== LOGOUT (optional) ===== */
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
