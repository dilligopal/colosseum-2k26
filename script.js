// Navigation functionality
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

// Scroll effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Initialize Swiper if available
if (typeof Swiper !== 'undefined') {
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}

// Mobile menu toggle
if (mobileMenuToggle) {
    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    };
    
    mobileMenuToggle.addEventListener('click', toggleMenu);
    mobileMenuToggle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        toggleMenu();
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section');

function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle anchor links (starting with #) for smooth scrolling
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // External links and page links will work normally without preventDefault
    });
});

// Registration is now handled via Google Form - no local form handling needed

// Contact Form handling (Web3Forms)
const contactForm = document.getElementById('contactForm');
const contactFormSuccess = document.getElementById('contactFormSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Show success message
                contactForm.style.display = 'none';
                contactFormSuccess.style.display = 'block';
                contactFormSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Reset form
                contactForm.reset();
            } else {
                alert('There was an error sending your message. Please try again.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.about-card, .event-card, .contact-card, .route-card');
animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active section
    highlightActiveSection();
    
    // Add loading animation completion
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

const rulesToggle = document.getElementById('rulesMenuToggle');
const rulesMenu = document.getElementById('rulesNavMenu');

if (rulesToggle && rulesMenu) {
  rulesToggle.addEventListener('click', () => {
    rulesMenu.classList.toggle('active');
  });
}
