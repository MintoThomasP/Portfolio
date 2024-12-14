
document.addEventListener('DOMContentLoaded', () => {
    const words = ["a software developer", "visionary entrepreneur", "leader"];
    const typingWord = document.querySelector('.typing-word');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeAnimation() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingWord.textContent = currentWord.slice(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
        }

        setTimeout(typeAnimation, isDeleting ? 100 : 150); // Typing speed
    }

    // Start the typing animation
    typeAnimation();
});
var dropdownid = '';
function toggleDropdown(id) {
    dropdownid = id;
    const dropdown = document.getElementById(dropdownid);

    // Close other open dropdowns
    document.querySelectorAll('.dropdown.open').forEach((openDropdown) => {
        if (openDropdown !== dropdown) {
            openDropdown.classList.remove('open');
        }
    });

    // Toggle the current dropdown
    dropdown.classList.toggle('open');
}
