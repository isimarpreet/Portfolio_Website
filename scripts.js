// Smooth scrolling for navigation (optional)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation for contact page
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate sending the form
        alert('Your message has been sent successfully!');
        contactForm.reset();
    });
}

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Scroll Reveal Effect
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        for (const reveal of reveals) {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
                reveal.classList.add('visible');
            } else {
                reveal.classList.remove('visible');
            }
        }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
document.addEventListener('DOMContentLoaded', () => {
    const greet = document.querySelector('.greeting');
    const now = new Date().getHours();
    let message = 'Welcome!';

    if (now < 12) {
        message = 'Good Morning!';
    } else if (now < 18) {
        message = 'Good Afternoon!';
    } else {
        message = 'Good Evening!';
    }

    if (greet) {
        greet.textContent = message;
    }
});
document.addEventListener('scroll', () => {
    const scrollTopButton = document.getElementById('scroll-top-button');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    // Toggle Navigation for Mobile
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});
// Scroll to Top Button
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scroll-top-button');
    if (window.scrollY > 200) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

document.getElementById('scroll-top-button').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.letter-by-letter');
    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        text.split('').forEach((char, index) => {
            setTimeout(() => {
                element.innerHTML += char;
                element.scrollIntoView({ behavior: 'smooth'}); // Ensure visibility
            }, 50 * index);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Log to confirm the script is loaded
    console.log('Script Loaded');

    // Toggle project details (optional feature)
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const details = card.querySelector('p');
        if (details) {
            card.addEventListener('click', function() {
                if (details.style.display === 'none' || details.style.display === '') {
                    details.style.display = 'block';
                } else {
                    details.style.display = 'none';
                }
            });
        }
    });
    
        // Filter projects based on the clicked button
        const filterButtons = document.querySelectorAll(".filter-buttons button");
        const allProjectCards = document.querySelectorAll(".project-card");
    
        filterButtons.forEach(button => {
            button.addEventListener("click", function () {
                const filter = button.getAttribute("data-filter");
    
                // Log to confirm button click is detected
                console.log(`${filter} button clicked`);
    
                allProjectCards.forEach(card => {
                    // Show all if 'all' filter is selected, otherwise apply the filter
                    if (filter === "all" || card.classList.contains(filter)) {
                        card.style.display = "block"; // Show matching project cards
                    } else {
                        card.style.display = "none"; // Hide non-matching project cards
                    }
                });
            });
        });
    });
    










