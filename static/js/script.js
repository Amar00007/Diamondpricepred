document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

document.getElementById('predictButton').addEventListener('click', function() {
    window.location.href = 'form_new.html';
});


window.addEventListener('scroll', function() {
    var body = document.body;
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});