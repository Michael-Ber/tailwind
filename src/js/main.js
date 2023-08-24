function burger() {
    const btn = document.querySelector('#burger-btn');
    const menu = document.querySelector('#menu');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        menu.classList.toggle('hidden');
    })
}

burger();