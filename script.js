window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("fixed", window.scrollY > 0);
})

let btnmenu = document.querySelector("#btn-menu");
btnmenu.addEventListener('click', function () {
    let nav = document.querySelector("#nav-list");
    nav.classList.toggle("show-nav");
    btnmenu.classList.toggle("open");

})



let footer = document.querySelector('#text-footer');
footer.addEventListener('click', function () {
    footer.classList.toggle('active');
})