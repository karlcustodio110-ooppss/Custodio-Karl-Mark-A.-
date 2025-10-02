document.addEventListener('DOMContentLoaded', () => {
    // Kuhanin ang lahat ng navigation buttons at sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('main section');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    // --- Tab Navigation Logic ---
    function switchSection(targetId) {
        // 1. Tanggalin ang 'active' class sa lahat ng buttons at sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        // 2. Idagdag ang 'active' class sa tamang button at section
        // Ang [data-target="..."] ay tumutukoy sa button, at ang #... ay tumutukoy sa section.
        document.querySelector(`[data-target="${targetId}"]`).classList.add('active');
        document.getElementById(targetId).classList.add('active');
    }

    // Event listeners para sa navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Kuhanin ang data-target attribute (e.g., "about", "projects")
            const target = event.currentTarget.getAttribute('data-target');
            switchSection(target);
        });
    });

    // --- Project Card Click Handler ---
    // Ginagamit ito ng HTML: onclick="openProject('link')"
    window.openProject = function(url) {
        if (url && url !== '#') {
            window.open(url, '_blank');
        } else {
            console.log("No valid project link provided.");
        }
    }

    // --- Contact Form Submission Handler (Mock) ---
    // Ito ay placeholder lang dahil walang actual server na magsesend ng email
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Pigilan ang default form submission

            // Mock success message
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
            formStatus.style.color = '#3b82f6'; // Gumamit ng primary color para sa success

            // I-reset ang form fields
            contactForm.reset();

            // I-alis ang status message pagkatapos ng 5 segundo
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }

    // Siguraduhin na ang 'about' section ay active sa pag-load
    if (document.getElementById('about')) {
        document.getElementById('about').classList.add('active');
    }
});
