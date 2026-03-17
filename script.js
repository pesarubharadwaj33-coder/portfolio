// Navbar scroll effect
window.addEventListener("scroll", function () {
    document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Active link
const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

// Scroll animation
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});