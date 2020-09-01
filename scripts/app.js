// SELECTORS
const header = document.querySelector('.header');
const navbarItems = document.querySelectorAll('.navbar-link');

// EVENT LISTENERS
window.addEventListener('load', function () {
    document.getElementById('loader').style.opacity = 0;
    document.getElementById('loader').style.visibility = 'hidden';
});

window.addEventListener('scroll', function() {
    const top = window.scrollY;
    if (top > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

navbarItems.forEach(function (link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const headerHeight = header.getBoundingClientRect().height;
        const element = document.getElementById(id);
        let position = element.offsetTop - headerHeight;
        window.scrollTo({
            left: 0,
            top: position
        });
    });
});
