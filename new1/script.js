// Animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formStatus = document.getElementById("formStatus");

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            formStatus.textContent = "✅ Message sent successfully!";
            formStatus.style.color = "green";
            form.reset();
        } else {
            formStatus.textContent = "❌ Oops! Something went wrong.";
            formStatus.style.color = "red";
        }
    }).catch(() => {
        formStatus.textContent = "❌ Network error. Please try again.";
        formStatus.style.color = "red";
    });
});
