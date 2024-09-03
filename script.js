 
    // nav elemek
document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'           
        });
        const menuCheckbox = document.querySelector('#menu__toggle');
        if(menuCheckbox.checked) {
            menuCheckbox.checked = false;
        }
    });
});

    // dark mode
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#dark-mode-toggle');
    const img = document.createElement('img');

    function updateIcon() {
        if (document.body.classList.contains('dark-mode')) {
            img.src = './images/icons/sun-solid.svg';
            img.alt = 'Light mode icon';
            document.querySelector('.up-arrow').style.filter = 'invert(0)';
            document.querySelector('.github').style.filter = 'invert(1)';
        } else {
            img.src = './images/icons/moon-solid.svg';
            img.alt = 'Dark mode icon';
            document.querySelector('.up-arrow').style.filter = 'invert(1)';
            document.querySelector('.github').style.filter = 'invert(0)';
        }

        btn.innerHTML = ''; 
        btn.appendChild(img);
    }

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    updateIcon(); 

    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
        updateIcon(); 
    });
});

    // fel nyíl
const scrollToTop = document.querySelector('.up-arrow');
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});
