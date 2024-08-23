document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");
    Array.from(navbar.children).forEach(function(link) {
        console.log(link)
        console.log(window.location.href)
        if (window.location.href == link.getAttribute("href")) {
            link.className = "active";
        }
    });
});