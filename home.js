let img = document.querySelector('#img-profile');
img.addEventListener('click', function () {
    let about = document.querySelector('#bio');
    img.classList.add('active');
    about.classList.add('active');
    about.addEventListener('click', function () {
        img.classList.remove('active');
        about.classList.remove('active');
    })

})