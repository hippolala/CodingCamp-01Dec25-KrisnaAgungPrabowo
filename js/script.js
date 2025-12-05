function hideLoadingScreen() {
    const loading = document.getElementById("loadingScreen");
    if (loading) loading.style.display = "none";
}

window.addEventListener("load", function () {

    setTimeout(() => hideLoadingScreen(), 700);

    const popup = document.getElementById("namePopup");
    const popupInput = document.getElementById("popupNameInput");
    const popupSubmit = document.getElementById("popupSubmit");
    const welcomeText = document.getElementById("welcomeText");

    if (!popup || !popupInput || !popupSubmit || !welcomeText) return;

    let savedName = sessionStorage.getItem("username");

    if (savedName) {
        welcomeText.innerText = `Hi ${savedName}, welcome to RevoU mini site`;
        popup.style.display = "none";
    } else {
        popup.style.display = "flex";
    }

    popupSubmit.addEventListener("click", function () {
        let name = popupInput.value.trim();

        if (name === "") {
            alert("Nama tidak boleh kosong!");
            return;
        }

        sessionStorage.setItem("username", name);
        welcomeText.innerText = `Hi ${name}, welcome to RevoU mini site`;
        popup.style.display = "none";
    });
});

const form = document.getElementById("messageForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("nameInput").value;
        let birth = document.getElementById("birthInput").value;
        let msg = document.getElementById("messageInput").value;
        let gender = document.querySelector('input[name="gender"]:checked');

        if (!gender) {
            alert("Silakan pilih jenis kelamin!");
            return;
        }

        document.getElementById("resultName").innerText = name;
        document.getElementById("resultBirth").innerText = birth;
        document.getElementById("resultGender").innerText = gender.value;
        document.getElementById("resultMsg").innerText = msg;
        document.getElementById("currentTime").innerText = new Date().toLocaleString();

        showNotification("Pesan berhasil dikirim!");
    });
}

function showNotification(text) {
    const notif = document.getElementById("notifBox");
    if (!notif) return;

    notif.innerText = text;
    notif.style.display = "block";

    setTimeout(() => {
        notif.style.display = "none";
    }, 2500);
}

const fadeElements = document.querySelectorAll('.fade-up');

if (fadeElements.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
}
