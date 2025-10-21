const popupBtns = document.querySelectorAll('.popup-btn');
const popupForm = document.querySelector('.popup-form');
const closeBtn = document.querySelector('.close-btn');

const but = document.getElementById("newbut");

but.addEventListener('click', () => {
    but.innerHTML = "no"
});

popupBtns.forEach(button => {
    button.addEventListener('click', () => {
        popupForm.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

popupForm.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});


