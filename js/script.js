document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Form submission validation
    form.addEventListener("submit", function (event) {
        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const message = form.elements["message"].value.trim();

        // Simple form validation
        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            event.preventDefault(); // Stop form submission
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); // Stop form submission
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Navigation toggle functionality
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
});
