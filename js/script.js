const burgerMenu = document.getElementById('burger'),
    cart = document.querySelector('.burger'),
    closeBtn = document.querySelector('.burger-close');

    burgerMenu.addEventListener('click', () => {
        cart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    });