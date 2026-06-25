/* ==========================================
   AeroMarket Home Page
   home.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();

    initializeCounterAnimation();

    initializeScrollReveal();

    initializeSearch();

    initializeSmoothScroll();

    console.log("AeroMarket Aircraft Loaded Successfully ✈️");
});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

function initializeNavbar() {

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7,17,31,0.98)";

            navbar.style.boxShadow =
                "0 8px 20px rgba(0,0,0,.2)";

        } else {

            navbar.style.background =
                "rgba(7,17,31,.92)";

            navbar.style.boxShadow =
                "none";
        }
    });
}

/* ==========================================
   SEARCH
========================================== */

function initializeSearch() {

    const searchBtn =
        document.querySelector(
            ".search-box button"
        );

    if (!searchBtn) return;

    searchBtn.addEventListener(
        "click",
        () => {

            const inputs =
                document.querySelectorAll(
                    ".search-box input"
                );

            let values = [];

            inputs.forEach(input => {

                values.push(
                    input.value.trim()
                );
            });

            const hasInput =
                values.some(
                    value => value !== ""
                );

            if (!hasInput) {

                alert(
                    "Please enter at least one search value."
                );

                return;
            }

            alert(
                "Aircraft search feature will be connected to the database later."
            );
        }
    );
}

/* ==========================================
   COUNTER ANIMATION
========================================== */

function initializeCounterAnimation() {

    const counters =
        document.querySelectorAll(
            ".stat-box h2"
        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });
            },

            {
                threshold: 0.5
            }
        );

    counters.forEach(counter => {

        observer.observe(counter);
    });
}

function animateCounter(element) {

    const text =
        element.textContent;

    const target =
        parseInt(
            text.replace(/[^0-9]/g, "")
        );

    const suffix =
        text.replace(/[0-9]/g, "");

    let current = 0;

    const increment =
        target / 80;

    const timer =
        setInterval(() => {

            current += increment;

            if (current >= target) {

                element.textContent =
                    target + suffix;

                clearInterval(timer);

            } else {

                element.textContent =
                    Math.floor(current) +
                    suffix;
            }

        }, 20);
}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initializeScrollReveal() {

    const revealItems =
        document.querySelectorAll(
            ".aircraft-card, .category-card, .stat-box"
        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );
                    }
                });
            },

            {
                threshold: 0.15
            }
        );

    revealItems.forEach(item => {

        item.classList.add(
            "hidden-reveal"
        );

        observer.observe(item);
    });
}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initializeSmoothScroll() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    const target =
                        document.querySelector(
                            this.getAttribute(
                                "href"
                            )
                        );

                    if (!target) return;

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth"
                    });
                }
            );
        });
}

/* ==========================================
   FEATURED AIRCRAFT HOVER
========================================== */

const aircraftCards =
    document.querySelectorAll(
        ".aircraft-card"
    );

aircraftCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-12px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );
});

/* ==========================================
   FUTURE FEATURES
========================================== */

/*

NEXT VERSION

✔ Real API Search

✔ Database Integration

✔ Aircraft Filtering

✔ Aircraft Comparison

✔ Wishlist

✔ Buyer Dashboard

✔ Seller Dashboard

✔ Admin Panel

✔ Live Aircraft Listings

✔ Real Authentication

*/