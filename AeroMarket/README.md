this is my login.html code 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AeroMarket - Login</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="AeroMarket/assets/css/login.css">

    <!-- Font Awesome -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>

<body>

    <!-- Theme Toggle -->
    <div class="theme-switch">
        <span id="themeLabel">🌙 Dark Mode</span>
        <label class="switch">
            <input type="checkbox" id="themeToggle">
            <span class="slider"></span>
        </label>
    </div>

    <div class="container">

        <!-- LEFT SIDE -->
        <div class="hero-section">

            <div class="overlay"></div>

            <img src="AeroMarket/assets/images/gulfstream-G500.jpg"
                alt="Gulfstream G500"
                class="hero-image">

            <div class="hero-content">

                <div class="logo">
                    <i class="fa-solid fa-plane"></i>
                    <div>
                        <h1>AeroMarket</h1>
                        <p>Aircraft Buying & Selling Platform</p>
                    </div>
                </div>

                <div class="hero-text">
                    <h2>Buy. Sell. Discover Aircraft.</h2>

                    <p>
                        Connecting buyers and sellers through
                        a trusted global aviation marketplace.
                    </p>
                </div>

                <div class="stats">

                    <div class="stat-card">
                        <h3>12,000+</h3>
                        <span>Aircraft Listed</span>
                    </div>

                    <div class="stat-card">
                        <h3>75+</h3>
                        <span>Countries</span>
                    </div>

                    <div class="stat-card">
                        <h3>2,500+</h3>
                        <span>Verified Sellers</span>
                    </div>

                </div>

                <div class="features">

                    <div class="feature">
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>Secure Transactions</span>
                    </div>

                    <div class="feature">
                        <i class="fa-solid fa-earth-americas"></i>
                        <span>Global Reach</span>
                    </div>

                    <div class="feature">
                        <i class="fa-solid fa-certificate"></i>
                        <span>Verified Listings</span>
                    </div>

                    <div class="feature">
                        <i class="fa-solid fa-headset"></i>
                        <span>24/7 Support</span>
                    </div>

                </div>

            </div>

        </div>

        <!-- RIGHT SIDE -->
        <div class="login-section">

            <div class="login-card">

                <div class="card-header">

                    <h2>Welcome Back</h2>

                    <p>
                        Sign in to your AeroMarket account
                    </p>

                </div>

                <form id="loginForm">

                    <!-- Email -->
                    <div class="input-group">

                        <label>Email Address</label>

                        <div class="input-wrapper">
                            <i class="fa-regular fa-envelope"></i>

                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required>

                        </div>

                    </div>

                    <!-- Password -->
                    <div class="input-group">

                        <label>Password</label>

                        <div class="input-wrapper">

                            <i class="fa-solid fa-lock"></i>

                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required>

                            <button
                                type="button"
                                id="togglePassword"
                                class="eye-btn">

                                <i class="fa-regular fa-eye"></i>

                            </button>

                        </div>

                    </div>

                    <!-- Remember -->
                    <div class="options-row">

                        <label class="remember">

                            <input type="checkbox">

                            Remember Me

                        </label>

                        <a href="#">
                            Forgot Password?
                        </a>

                    </div>

                    <!-- Roles -->
                    <div class="role-section">

                        <h4>Login As</h4>

                        <div class="roles">

                            <div class="role-card active">
                                <i class="fa-regular fa-user"></i>
                                <span>Buyer</span>
                            </div>

                            <div class="role-card">
                                <i class="fa-solid fa-user-tie"></i>
                                <span>Seller</span>
                            </div>

                            <div class="role-card">
                                <i class="fa-solid fa-user-shield"></i>
                                <span>Admin</span>
                            </div>

                        </div>

                    </div>

                    <!-- Login Button -->
                    <button
                        type="submit"
                        class="login-btn">

                        Sign In

                    </button>

                    <!-- Divider -->
                    <div class="divider">

                        <span>or continue with</span>

                    </div>

                    <!-- Social Login -->
                    <div class="social-buttons">

                        <button
                            type="button"
                            class="social-btn">

                            <i class="fa-brands fa-google"></i>

                            Google

                        </button>

                        <button
                            type="button"
                            class="social-btn">

                            <i class="fa-brands fa-microsoft"></i>

                            Microsoft

                        </button>

                    </div>

                    <!-- Signup -->
                    <div class="signup-link">

                        Don't have an account?

                        <a href="#">
                            Sign Up
                        </a>

                    </div>

                </form>

            </div>

        </div>

    </div>

    <script src="AeroMarket/assets/js/login.js"></script>

</body>
</html>




and this is my css code 

/* ==========================
   AeroMarket Login Page
   ========================== */

:root {

    --primary: #2563eb;
    --primary-dark: #1d4ed8;

    --bg: #f8fafc;
    --card-bg: rgba(255,255,255,0.85);

    --text: #0f172a;
    --text-light: #64748b;

    --border: #cbd5e1;

    --shadow:
        0 20px 40px rgba(0,0,0,0.12);

    --success: #10b981;

    --glass:
        rgba(255,255,255,0.15);

}

/* DARK THEME */

body.dark {

    --bg: #0f172a;

    --card-bg: rgba(15,23,42,0.75);

    --text: #f8fafc;

    --text-light: #cbd5e1;

    --border: rgba(255,255,255,0.12);

    --shadow:
        0 20px 40px rgba(0,0,0,0.45);

}

/* RESET */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{

    font-family:'Poppins',sans-serif;

    background:var(--bg);

    color:var(--text);

    min-height:100vh;

    transition:.3s ease;

}

/* =====================
   THEME SWITCH
   ===================== */

.theme-switch{

    position:fixed;

    top:20px;
    right:25px;

    z-index:1000;

    display:flex;
    align-items:center;
    gap:10px;

    background:var(--card-bg);

    backdrop-filter:blur(12px);

    padding:12px 18px;

    border-radius:50px;

    border:1px solid var(--border);

}

.switch{

    position:relative;

    width:50px;
    height:24px;

}

.switch input{
    display:none;
}

.slider{

    position:absolute;

    inset:0;

    cursor:pointer;

    background:#ccc;

    border-radius:30px;

    transition:.3s;

}

.slider::before{

    content:"";

    position:absolute;

    width:18px;
    height:18px;

    left:3px;
    top:3px;

    background:white;

    border-radius:50%;

    transition:.3s;

}

input:checked + .slider{

    background:var(--primary);

}

input:checked + .slider::before{

    transform:translateX(26px);

}

/* =====================
   MAIN LAYOUT
   ===================== */

.container{

    display:grid;

    grid-template-columns:1.2fr 1fr;

    min-height:100vh;

}

/* =====================
   HERO SECTION
   ===================== */

.hero-section{

    position:relative;

    overflow:hidden;

}

.hero-image{

    width:100%;
    height:100%;

    object-fit:cover;

    position:absolute;

    inset:0;

}

.overlay{

    position:absolute;

    inset:0;

    background:
    linear-gradient(
    135deg,
    rgba(15,23,42,.82),
    rgba(37,99,235,.55));

    z-index:1;

}

.hero-content{

    position:relative;

    z-index:2;

    height:100%;

    padding:60px;

    display:flex;

    flex-direction:column;

    justify-content:center;

}

.logo{

    display:flex;
    align-items:center;
    gap:15px;

    color:white;

    margin-bottom:40px;

}

.logo i{

    font-size:38px;

}

.logo h1{

    font-size:2rem;

}

.logo p{

    opacity:.85;

}

/* =====================
   HERO TEXT
   ===================== */

.hero-text h2{

    color:white;

    font-size:3rem;

    line-height:1.2;

    margin-bottom:20px;

}

.hero-text p{

    color:white;

    opacity:.9;

    max-width:600px;

    line-height:1.8;

    margin-bottom:40px;

}

/* =====================
   STATS
   ===================== */

.stats{

    display:flex;

    gap:20px;

    flex-wrap:wrap;

    margin-bottom:35px;

}

.stat-card{

    background:rgba(255,255,255,.12);

    backdrop-filter:blur(10px);

    padding:18px 25px;

    border-radius:16px;

    color:white;

}

.stat-card h3{

    font-size:1.5rem;

}

/* =====================
   FEATURES
   ===================== */

.features{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:15px;

}

.feature{

    display:flex;

    align-items:center;

    gap:10px;

    color:white;

}

.feature i{

    color:#10b981;

}

/* =====================
   LOGIN SECTION
   ===================== */

.login-section{

    display:flex;

    justify-content:center;

    align-items:center;

    padding:40px;

}

.login-card{

    width:100%;

    max-width:500px;

    background:var(--card-bg);

    backdrop-filter:blur(20px);

    border:1px solid var(--border);

    border-radius:28px;

    box-shadow:var(--shadow);

    padding:40px;

}

.card-header{

    text-align:center;

    margin-bottom:30px;

}

.card-header h2{

    font-size:2rem;

    margin-bottom:8px;

}

.card-header p{

    color:var(--text-light);

}

/* =====================
   INPUTS
   ===================== */

.input-group{

    margin-bottom:20px;

}

.input-group label{

    display:block;

    margin-bottom:8px;

    font-weight:500;

}

.input-wrapper{

    position:relative;

}

.input-wrapper i:first-child{

    position:absolute;

    left:15px;
    top:50%;

    transform:translateY(-50%);

    color:var(--text-light);

}

.input-wrapper input{

    width:100%;

    padding:15px 50px 15px 45px;

    border:1px solid var(--border);

    border-radius:14px;

    background:transparent;

    color:var(--text);

    font-size:15px;

}

.input-wrapper input:focus{

    outline:none;

    border-color:var(--primary);

}

.eye-btn{

    position:absolute;

    right:15px;
    top:50%;

    transform:translateY(-50%);

    border:none;

    background:none;

    cursor:pointer;

    color:var(--text-light);

}

/* =====================
   OPTIONS
   ===================== */

.options-row{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:25px;

}

.options-row a{

    color:var(--primary);

    text-decoration:none;

}

.remember{

    display:flex;
    gap:8px;

    align-items:center;

}

/* =====================
   ROLE CARDS
   ===================== */

.role-section{

    margin-bottom:25px;

}

.role-section h4{

    margin-bottom:12px;

}

.roles{

    display:flex;

    gap:12px;

}

.role-card{

    flex:1;

    text-align:center;

    padding:18px 10px;

    border:1px solid var(--border);

    border-radius:14px;

    cursor:pointer;

    transition:.3s;

}

.role-card:hover{

    transform:translateY(-4px);

}

.role-card.active{

    background:var(--primary);

    color:white;

    border-color:var(--primary);

}

.role-card i{

    display:block;

    font-size:22px;

    margin-bottom:8px;

}

/* =====================
   BUTTONS
   ===================== */

.login-btn{

    width:100%;

    padding:15px;

    border:none;

    border-radius:14px;

    background:var(--primary);

    color:white;

    font-size:16px;

    font-weight:600;

    cursor:pointer;

    transition:.3s;

}

.login-btn:hover{

    background:var(--primary-dark);

}

.divider{

    text-align:center;

    margin:25px 0;

    color:var(--text-light);

}

.social-buttons{

    display:flex;

    gap:12px;

}

.social-btn{

    flex:1;

    padding:14px;

    border:1px solid var(--border);

    border-radius:12px;

    background:transparent;

    cursor:pointer;

    color:var(--text);

}

.signup-link{

    text-align:center;

    margin-top:25px;

}

.signup-link a{

    color:var(--primary);

    font-weight:600;

    text-decoration:none;

}

/* =====================
   MOBILE
   ===================== */

@media(max-width:992px){

    .container{

        grid-template-columns:1fr;

    }

    .hero-section{

        min-height:450px;

    }

    .hero-text h2{

        font-size:2.2rem;

    }

}

@media(max-width:576px){

    .hero-content{

        padding:30px;

    }

    .login-card{

        padding:25px;

    }

    .roles{

        flex-direction:column;

    }

    .social-buttons{

        flex-direction:column;

    }

    .theme-switch{

        top:10px;
        right:10px;

        padding:10px 14px;
    }

}

and this is my js code 

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

and this is my image 
as i will send to you 