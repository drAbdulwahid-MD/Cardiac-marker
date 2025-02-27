// Ensure the document is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    // Toggle dark mode
    document.getElementById("toggleDarkMode").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Show a greeting message
    function showGreeting() {
        let hours = new Date().getHours();
        let greetingText = "Welcome!";
        if (hours < 12) {
            greetingText = "Good Morning!";
        } else if (hours < 18) {
            greetingText = "Good Afternoon!";
        } else {
            greetingText = "Good Evening!";
        }
        document.getElementById("greeting").innerText = greetingText;
    }

    showGreeting(); // Call function on page load

    // Make table scrollable on small screens
    function adjustTable() {
        let tables = document.querySelectorAll("table");
        tables.forEach((table) => {
            let wrapper = document.createElement("div");
            wrapper.style.overflowX = "auto";
            wrapper.appendChild(table.cloneNode(true));
            table.replaceWith(wrapper);
        });
    }

    adjustTable();
});
