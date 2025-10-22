const popupBtns = document.querySelectorAll('.popup-btn');
const popupForm = document.querySelector('.popup-form');
const closeBtn = document.querySelector('.close-btn');

const but = document.getElementById("newbut");

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


    
document.getElementById('faq-btn').addEventListener('click', function() {
     const faqSection = document.getElementById('faq-section');
        if (faqSection.style.display === 'none') {
                faqSection.style.display = 'block';
        } else {
                faqSection.style.display = 'none';
        }
    });

        
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                
        if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
        } else {
                answer.style.display = 'none';
        }
    });
});





const contactForm = document.querySelector('.popup-content form');
const successMessage = document.querySelector('.success-message');
const closeSuccessBtn = document.querySelector('.close-success-btn');



function handleFormSubmit(event) {
    event.preventDefault();
    
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    const formData = {
        email: email,
        message: message
    };
    
    simulateFetch(formData, function(response) {
        if (response.success) {
            popupForm.style.display = 'none';
            contactForm.reset();
            successMessage.style.display = 'flex';
        }
    });
}

function simulateFetch(data, callback) {
    setTimeout(function() {
        const response = {
            success: true,
            message: "Data received successfully"
        };
        callback(response);
    }, 1000);
}

contactForm.addEventListener('submit', handleFormSubmit);

closeSuccessBtn.addEventListener('click', function() {
    successMessage.style.display = 'none';
});

successMessage.addEventListener('click', function(event) {
    if (event.target === successMessage) {
        successMessage.style.display = 'none';
    }
});




const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', function() {
    const inputs = document.querySelectorAll('.popup-content input, .popup-content textarea');
    inputs.forEach(input => input.value = '');
});



