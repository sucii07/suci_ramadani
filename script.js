document.addEventListener("DOMContentLoaded", function () {

    // VALIDASI FORMULIR LOGIN
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;
            const message = document.getElementById("loginMessage");

            if (username === "" || password === "") {
                message.className = "mt-3 message-error";
                message.textContent =
                    "Username dan kata sandi wajib diisi.";
            } else if (password.length < 6) {
                message.className = "mt-3 message-error";
                message.textContent =
                    "Kata sandi harus minimal 6 karakter.";
            } else {
                message.className = "mt-3 message-success";
                message.textContent =
                    "Validasi berhasil! Ini hanya demonstrasi login.";
            }
        });
    }

    // VALIDASI FORMULIR KONTAK
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = document.getElementById("contactMessage");

            message.className = "mt-3 message-success";
            message.textContent =
                "Formulir berhasil divalidasi. Pesan belum dikirim ke email.";

            contactForm.reset();
        });
    }

});