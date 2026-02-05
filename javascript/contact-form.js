(function() {
    emailjs.init({
        publicKey: "KXEZmr1pEl6upofTJ",
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (!form) {
        console.warn("Contact form not found on this page");
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const status = document.getElementById('status');
        if (status) status.textContent = 'Sending...';

        emailjs.sendForm(
            'service_mgp817k',
            'template_a3boiqe',
            this
        )
        .then(() => {
            if (status) {
                status.style.color = 'green';
                status.textContent = 'Message sent successfully! 🎉';
            }
            this.reset();
        })
        .catch((error) => {
            if (status) {
                status.style.color = 'red';
                status.textContent = 'Sorry, something went wrong...';
            }
            console.error('EmailJS error:', error);
        });
    });
});