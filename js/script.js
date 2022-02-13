window.addEventListener('DOMContentLoaded', () => {
    const header_list = document.querySelector('.header_list'),
    header_lists = document.querySelectorAll('.header_lists'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger:active');
        header_list.classList.toggle('header_list:active');
    });

    header_lists.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger:active');
            header_list.classList.toggle('header_list:active');
        })
    })
})