window.addEventListener('DOMContentLoaded', function () {

    let burger = document.querySelector('.js-burger');
    let mobileMenu = document.querySelector('.js-mobile-menu');

    burger.addEventListener('click', function (e) {
        e.preventDefault();

        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenu.style.maxHeight = '0px';
        } else {
            burger.classList.add('active');
            mobileMenu.classList.add('active');
            mobileMenu.style.maxHeight = mobileMenu.querySelector('.header__bottom-inner').scrollHeight + 'px';
        }
    })

    let search = document.querySelector('.js__search');
    let mobileSearch = document.querySelector('.search__mobile');

    search.addEventListener('click', function (e) {
        e.preventDefault();


        if (search.classList.contains('active')) {
            search.classList.remove('active');
            mobileSearch.classList.remove('active');
        } else {
            search.classList.add('active');
            mobileSearch.classList.add('active');
        }
    })


    let filterButton = document.querySelector('.filter__icon');
    let popup = document.querySelector('.overlay');
    let close = document.querySelector('.filter__close-button');
 
    filterButton.addEventListener('click', function (e) {
        e.preventDefault();

        if (filterButton.classList.contains('active')) {
            filterButton.classList.remove('active');
            popup.classList.remove('active');
        } else {
            filterButton.classList.add('active');
            popup.classList.add('active');
        }
    })
     
    close.addEventListener('click', function() {
        popup.classList.remove('active');
        filterButton.classList.remove('active');
    })

})