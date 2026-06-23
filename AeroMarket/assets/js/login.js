/* ==========================================
   AeroMarket Login Page
   login.js
========================================== */

/* ==========================
   CONFIGURATION
========================== */

const CONFIG = {
    APP_NAME: "AeroMarket",
    APP_SUBTITLE: "Aircraft Buying & Selling Platform",
    SUPPORT_EMAIL: "support@aeromarket.com",
    ENABLE_GOOGLE_LOGIN: false,
    ENABLE_MICROSOFT_LOGIN: false
};

/* ==========================
   ELEMENTS
========================== */

const body = document.body;

const themeToggle =
    document.getElementById("themeToggle");

const themeLabel =
    document.getElementById("themeLabel");

const passwordField =
    document.getElementById("password");

const togglePasswordBtn =
    document.getElementById("togglePassword");

const loginForm =
    document.getElementById("loginForm");

const roleCards =
    document.querySelectorAll(".role-card");

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

/* ==========================
   PASSWORD TOGGLE
========================== */

togglePasswordBtn.addEventListener(
    "click",
    () => {

        const icon =
            togglePasswordBtn.querySelector("i");

        if (
            passwordField.type === "password"
        ) {

            passwordField.type = "text";

            icon.classList.remove(
                "fa-eye"
            );

            icon.classList.add(
                "fa-eye-slash"
            );

        } else {

            passwordField.type =
                "password";

            icon.classList.remove(
                "fa-eye-slash"
            );

            icon.classList.add(
                "fa-eye"
            );
        }
    }
);

/* ==========================
   ROLE SELECTION
========================== */

let selectedRole = "Buyer";

roleCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            roleCards.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );

            card.classList.add(
                "active"
            );

            selectedRole =
                card.querySelector(
                    "span"
                ).textContent;

            console.log(
                "Selected Role:",
                selectedRole
            );
        }
    );
});

/* ==========================
   EMAIL VALIDATION
========================== */

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}

/* ==========================
   PASSWORD VALIDATION
========================== */

function validatePassword(
    password
) {

    return password.length >= 8;
}

/* ==========================
   LOADING BUTTON
========================== */

function startLoading(button) {

    button.disabled = true;

    button.dataset.originalText =
        button.innerHTML;

    button.innerHTML =
        `<i class="fa-solid fa-spinner fa-spin"></i> Signing In...`;
}

function stopLoading(button) {

    button.disabled = false;

    button.innerHTML =
        button.dataset.originalText;
}

/* ==========================
   LOGIN FORM
========================== */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const password =
            document
                .getElementById("password")
                .value
                .trim();

        const loginBtn =
            document.querySelector(
                ".login-btn"
            );

        /* EMAIL CHECK */

        if (
            !validateEmail(email)
        ) {

            alert(
                "Please enter a valid email address."
            );

            return;
        }

        /* PASSWORD CHECK */

        if (
            !validatePassword(
                password
            )
        ) {

            alert(
                "Password must be at least 8 characters."
            );

            return;
        }

        startLoading(loginBtn);

        /* SIMULATION */

        setTimeout(() => {

            stopLoading(loginBtn);

            alert(
                `Welcome to ${CONFIG.APP_NAME}\n\nRole: ${selectedRole}\nEmail: ${email}`
            );

        }, 2000);
    }
);

/* ==========================
   FUTURE PLACEHOLDERS
========================== */

function loginWithGoogle() {

    console.log(
        "Google Login Coming Soon..."
    );
}

function loginWithMicrosoft() {

    console.log(
        "Microsoft Login Coming Soon..."
    );
}

/* ==========================
   PAGE INIT
========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadTheme();

        console.log(
            `${CONFIG.APP_NAME} Loaded Successfully`
        );

        console.log(
            CONFIG
        );
    }
);