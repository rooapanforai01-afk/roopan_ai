// ============================================
// VESPERTINE | JavaScript Functionality
// ============================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeScrollAnimations();
    initializeNavigation();
    initializeButtonInteractions();
    initializeScrollProgress();
});

// ============================================
// TAB SWITCHING FUNCTIONALITY
// ============================================

function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');

            // Trigger scroll animations for new content
            triggerScrollAnimations();
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || '0s';
                element.style.transitionDelay = delay;
                element.classList.add('aos-visible');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(element => observer.observe(element));
}

function triggerScrollAnimations() {
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(element => {
        if (!element.classList.contains('aos-visible')) {
            const delay = element.getAttribute('data-delay') || '0s';
            element.style.transitionDelay = delay;
            element.classList.add('aos-visible');
        }
    });
}

// ============================================
// SMOOTH NAVIGATION & SCROLL
// ============================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// BUTTON INTERACTIONS
// ============================================

function initializeButtonInteractions() {
    const buttons = document.querySelectorAll('.cta-btn, .tab-btn, .social-icon');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// SCROLL TO SECTION
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// CTA HANDLERS
// ============================================

function handleCTA(action) {
    if (action === 'shop') {
        alert('🛍️ Redirecting to shop...');
        // In production: window.location.href = '/shop';
    } else if (action === 'subscribe') {
        alert('📧 Thank you for your interest! Check your email for updates.');
        // In production: send to newsletter API
    }
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function initializeScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #d4af37, #f4d03f);
        width: 0%;
        z-index: 10000;
        transition: width 200ms ease;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// ============================================
// INIT MESSAGE
// ============================================

console.log('✨ VESPERTINE | Premium Fashion Website Loaded Successfully');
