

/* ==========================
   THEME MANAGEMENT
========================== */

function enableDarkMode() {

    body.classList.add("dark");

    localStorage.setItem(
        "aeromarket-theme",
        "dark"
    );

    themeToggle.checked = true;

    themeLabel.textContent =
        "☀️ Light Mode";
}

function enableLightMode() {

    body.classList.remove("dark");

    localStorage.setItem(
        "aeromarket-theme",
        "light"
    );

    themeToggle.checked = false;

    themeLabel.textContent =
        "🌙 Dark Mode";
}

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "aeromarket-theme"
        );

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

themeToggle.addEventListener(
    "change",
    () => {

        if (themeToggle.checked) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    }
);



// ==============================
// PASSWORD MATCH VALIDATION
// ==============================

const form = document.querySelector("form");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (event) {

    if (password.value !== confirmPassword.value) {

        event.preventDefault();

        alert("Passwords do not match!");

        confirmPassword.focus();

    }

});


// ==============================
// PASSWORD STRENGTH CHECK
// ==============================

password.addEventListener("input", function () {

    const value = password.value;

    if (value.length < 6) {

        password.style.borderColor = "red";

    }

    else if (value.length < 10) {

        password.style.borderColor = "orange";

    }

    else {

        password.style.borderColor = "green";

    }

});


// ==============================
// PHONE NUMBER VALIDATION
// ==============================

const phone = document.querySelector("input[name='phone']");

phone.addEventListener("input", function () {

    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length > 10) {

        this.value = this.value.slice(0, 10);

    }

});


// ==============================
// FULL NAME VALIDATION
// ==============================

const fullname = document.querySelector("input[name='fullname']");

fullname.addEventListener("input", function () {

    this.value = this.value.replace(/[^a-zA-Z ]/g, "");

});


// ==============================
// EMAIL VALIDATION
// ==============================

const email = document.querySelector("input[name='email']");

// email.addEventListener("blur", function () {

//     const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//     if (!email.value.match(pattern)) {

//         alert("Please enter a valid email address.");

//         email.focus();

//     }

// });


email.addEventListener("blur", function () {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value === "") {

        return;

    }

    if (!pattern.test(email.value)) {

        email.style.border = "2px solid red";

    }

    else{

        email.style.border = "2px solid green";

    }

});


// ==============================
// ROLE CARD SELECTION
// ==============================

const cards = document.querySelectorAll(".role-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c => {

            c.style.border = "2px solid #ddd";

        });

        card.style.border = "2px solid #0d6efd";

    });

});


// ==============================
// SUCCESS MESSAGE
// ==============================

form.addEventListener("submit", function () {

    if (password.value === confirmPassword.value) {

        alert("Registration Successful!");

    }

});



