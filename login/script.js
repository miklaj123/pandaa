// Funkcja otwierająca okno logowania
function openLogin() {
    document.getElementById("overlay").style.display = "flex";
}

// Funkcja logowania użytkownika
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Sprawdzanie poprawności danych logowania
    if (username === "PandaSearch" && password === "Panda-Leak") {
        window.location.href = "../wyszukiwarka/index.html"; // Przekierowanie do strony wyszukiwarki po udanym logowaniu
        return false; // Zatrzymaj przesyłanie formularza
    } else {
        alert("Niepoprawna nazwa użytkownika lub hasło");
        return false; // Zatrzymaj przesyłanie formularza
    }
}

function registerUser() {
	window.location.href = "../register/index.html";
}