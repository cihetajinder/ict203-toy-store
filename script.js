let buttons = document.querySelectorAll(".filter-buttons button");
let products = document.querySelectorAll(".product-card");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let selected = button.getAttribute("data-filter");

        products.forEach(function(product) {

            let category = product.getAttribute("data-category");

            if (selected == "all") {
                product.style.display = "block";
            }
            else if (selected == category) {
                product.style.display = "block";
            }
            else {
                product.style.display = "none";
            }

        });

    });

});