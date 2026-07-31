// ELEMENTS
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const navLogo = document.getElementById('navLogo');

// RANDOM LOGOS FOR MOBILE
const logos = [
    "https://picsum.photos/seed/logo1/80",
    "https://picsum.photos/seed/logo2/80",
    "https://picsum.photos/seed/logo3/80",
    "https://picsum.photos/seed/logo4/80"
];

// HANDLE NAVBAR MODE (DESKTOP vs MOBILE)
function updateNavbarMode() {
    if (window.innerWidth < 900) {
        // MOBILE MODE
        navMenu.classList.add("mobile");
        hamburger.style.display = "flex";

        // Random mobile logo
        navLogo.src = logos[Math.floor(Math.random() * logos.length)];

        // Hide desktop menu
        navMenu.style.display = "none";
    } else {
        // DESKTOP MODE
        navMenu.classList.remove("mobile");
        navMenu.classList.remove("open");
        hamburger.classList.remove("active");

        // Show desktop menu
        navMenu.style.display = "flex";
        hamburger.style.display = "none";

        // Desktop logo
        navLogo.src = "./assets/logo.png";
    }
}

// HAMBURGER CLICK TOGGLE
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");

    if (navMenu.classList.contains("mobile")) {
        navMenu.classList.toggle("open");

        // Show drawer
        if (navMenu.classList.contains("open")) {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    }
});
// UPDATE NAVBAR ON LOAD + RESIZE
window.addEventListener("load", updateNavbarMode);
window.addEventListener("resize", updateNavbarMode);

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
        backToTop.classList.remove("hide");
    } else {
        backToTop.classList.add("hide");
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
