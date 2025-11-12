document.addEventListener('DOMContentLoaded', function() {
    
    const themeButton = document.getElementById('theme-toggle');
    themeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');

    openModalBtn.addEventListener('click', function() {
        modalBackdrop.classList.add('modal-open'); 
    });

    closeModalBtn.addEventListener('click', function() {
        modalBackdrop.classList.remove('modal-open');
    });

    modalBackdrop.addEventListener('click', function(event) {
        if (event.target === modalBackdrop) {
            modalBackdrop.classList.remove('modal-open');
        }
    });

    const burgerToggle = document.getElementById('burger-toggle');
    const mainNav = document.querySelector('.main-nav');

    burgerToggle.addEventListener('click', function() {
        burgerToggle.classList.toggle('is-open');
        mainNav.classList.toggle('is-open');
    });
});

function tabSwitch(new_tab, new_content) {

    document.getElementById('content_1').style.display = 'none';
    document.getElementById('content_2').style.display = 'none';
    document.getElementById('content_3').style.display = 'none';
    
    document.getElementById(new_content).style.display = 'block';

    document.getElementById('tab_1').className = '';
    document.getElementById('tab_2').className = '';
    document.getElementById('tab_3').className = '';
    
    document.getElementById(new_tab).className = 'active';
}