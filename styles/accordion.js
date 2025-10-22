// Toggle FAQ section visibility
const faqToggleBtn = document.querySelector('.faq-toggle-btn');
const faqSection = document.querySelector('.faq-section');

faqToggleBtn.addEventListener('click', () => {
    // Toggle display of FAQ section
    if (faqSection.style.display === 'none' || faqSection.style.display === '') {
        faqSection.style.display = 'block';
    } else {
        faqSection.style.display = 'none';
    }
});

// Accordion functionality for FAQ questions
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the answer's visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
