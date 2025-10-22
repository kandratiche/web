// Read More button functionality
const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const additionalText = btn.nextElementSibling;  // Get the associated additional text
        const btnText = btn.textContent;

        // Toggle the visibility of the additional text
        if (additionalText.style.display === 'none' || additionalText.style.display === '') {
            additionalText.style.display = 'block';  // Show the additional text
            btn.textContent = 'Read Less';           // Change button text to 'Read Less'
        } else {
            additionalText.style.display = 'none';  // Hide the additional text
            btn.textContent = 'Read More';          // Change button text back to 'Read More'
        }
    });
});
