// Animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const status = document.getElementById("formStatus");

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            status.textContent = "✅ Message sent successfully!";
            status.style.color = "green";
            form.reset();
        } else {
            status.textContent = "❌ Oops! Something went wrong.";
            status.style.color = "red";
        }
    }).catch(() => {
        status.textContent = "❌ Network error. Please try again.";
        status.style.color = "red";
    });
});
