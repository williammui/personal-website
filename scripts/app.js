const header = document.querySelector('.header');

window.onscroll = function() {
    const top = window.scrollY;
    console.log(top);
    if (top > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
