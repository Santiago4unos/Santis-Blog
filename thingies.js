document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");
    Array.from(navbar.children).forEach(function(link) {
        const full_link = `/Santis-Blog${link}`;
        console.log(full_link)
        if (window.location.pathname == link.getAttribute("href")) {
            link.className = "active";
        }
    });
});