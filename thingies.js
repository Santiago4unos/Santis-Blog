document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");
    Array.from(navbar.children).forEach(function(link) {
        console.log(link)
        console.log(window.location.pathname)
        if (window.location.pathname == link.getAttribute("href")) {
            link.className = "active";
        }
    });
});