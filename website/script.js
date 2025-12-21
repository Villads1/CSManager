/**
 * CSRP Helper - Website JavaScript
 * Handles animations, scroll effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initRevealAnimations();
    initStatCounters();
    initSmoothScroll();
});

/**
 * Navbar scroll behavior
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    
    // Add scrolled class on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile nav toggle (basic implementation)
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            // Could expand to show mobile menu
        });
    }
}

/**
 * Scroll-triggered reveal animations using Intersection Observer
 */
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.dataset.delay || 0;
                
                setTimeout(() => {
                    element.classList.add('revealed');
                }, parseInt(delay));
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/**
 * Animated stat counters
 */
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.dataset.target);
                animateCounter(element, target);
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(element => {
        counterObserver.observe(element);
    });
}

/**
 * Animate a counter from 0 to target value
 */
function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        element.textContent = currentValue + (target > 10 ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target > 10 ? '+' : '');
        }
    }
    
    requestAnimationFrame(updateCounter);
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effect for floating cards (optional enhancement)
 */
function initParallax() {
    const cards = document.querySelectorAll('.floating-card');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        cards.forEach((card, index) => {
            const depth = (index + 1) * 10;
            const moveX = mouseX * depth;
            const moveY = mouseY * depth;
            
            card.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Uncomment to enable parallax effect:
// initParallax();

console.log('🚀 CSRP Helper website loaded successfully!');
