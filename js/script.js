document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Form submission validation
    form.addEventListener("submit", function (event) {
        const name = form.elements["name"].value.trim();
        const email = form.elements["email"].value.trim();
        const mobile = form.elements["mobile"].value.trim();

        // Simple form validation
        if (!name || !email || !mobile) {
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

    // Modal functionality
    const modal = document.getElementById("editProfileModal");
    const btn = document.getElementById("editProfileBtn");
    const span = document.getElementsByClassName("close")[0];

    // Open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
