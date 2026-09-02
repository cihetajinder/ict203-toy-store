let buttons = document.querySelectorAll(".filter-buttons button");
let products = document.querySelectorAll(".product-card");

// product filter
buttons.forEach(function(button) {

    button.onclick = function() {

        let filter = button.getAttribute("data-filter");

        products.forEach(function(product) {

            let category = product.getAttribute("data-category");

            if (filter == "all" || filter == category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    };

});


// contact form
let form = document.getElementById("contactForm");

if (form) {

    form.onsubmit = function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let result = document.getElementById("formMessage");

        if (name == "" || email == "" || message == "") {
            result.textContent = "Please fill in all fields.";
        }
        else if (!email.includes("@")) {
            result.textContent = "Please enter a valid email.";
        }
        else {
            result.textContent = "Message sent successfully.";
            form.reset();
        }

    };

}


// mobile menu
let menuButton = document.getElementById("menuButton");
let nav = document.getElementById("navMenu");

if (menuButton) {

    menuButton.onclick = function() {
        nav.classList.toggle("show-menu");
    };

}
let darkModeButton = document.getElementById("darkModeButton");

if (darkModeButton) {

    darkModeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    });

}