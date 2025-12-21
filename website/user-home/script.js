/* ===========================================
   CS Manager - User Homepage
   Interactive Features
   =========================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLiveTicker();
    initNewsFilters();
    initTransfersCarousel();
    initRankingsExpand();
});

/* ===========================================
   NAVIGATION
   =========================================== */

function initNavigation() {
    const topBar = document.querySelector('.top-bar');

    // Scroll effect for navigation
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class for background opacity
        if (currentScroll > 20) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active nav highlighting based on scroll position
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Remove active from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active to clicked item
            this.classList.add('active');
        });
    });
}

/* ===========================================
   LIVE TICKER
   =========================================== */

function initLiveTicker() {
    const tickerTrack = document.querySelector('.ticker-track');
    const tickerItems = document.querySelector('.ticker-items');

    if (!tickerTrack || !tickerItems) return;

    // Auto-scroll ticker (optional - can be disabled)
    let scrollDirection = 1;
    let isPaused = false;

    // Pause on hover
    tickerTrack.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    tickerTrack.addEventListener('mouseleave', () => {
        isPaused = false;
    });

    // Simulate live score updates
    const liveScores = document.querySelectorAll('.ticker-score.live');

    if (liveScores.length > 0) {
        setInterval(() => {
            liveScores.forEach(score => {
                // Randomly update scores occasionally for demo effect
                if (Math.random() > 0.7) {
                    const currentText = score.textContent;
                    const scores = currentText.split(' - ').map(s => parseInt(s));

                    if (scores.length === 2) {
                        // Randomly increment one score
                        const teamIndex = Math.random() > 0.5 ? 0 : 1;
                        if (scores[teamIndex] < 16) {
                            scores[teamIndex]++;
                            score.textContent = `${scores[0]} - ${scores[1]}`;

                            // Add flash effect
                            score.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                score.style.transform = 'scale(1)';
                            }, 200);
                        }
                    }
                }
            });
        }, 8000); // Every 8 seconds
    }
}

/* ===========================================
   RANKINGS EXPAND
   =========================================== */

function initRankingsExpand() {
    const expandToggle = document.getElementById('rankingsExpandToggle');

    if (!expandToggle) return;

    expandToggle.addEventListener('click', function () {
        // Navigate to full rankings page (placeholder - would be a real link in production)
        // For demo purposes, we'll show an alert
        // In production: window.location.href = '/rankings';

        // Optional: Add a visual feedback animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            // Show feedback that this would navigate to full rankings
            alert('This would navigate to the full World Rankings page.');
        }, 150);
    });
}

/* ===========================================
   NEWS FILTERS
   =========================================== */

function initNewsFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.textContent.toLowerCase();

            // Filter news items
            newsItems.forEach(item => {
                const category = item.querySelector('.news-category');
                if (!category) return;

                const itemCategory = category.textContent.toLowerCase();

                if (filter === 'all' || itemCategory === filter) {
                    item.style.display = 'flex';
                    item.style.animation = 'fadeIn 0.3s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* ===========================================
   TRANSFERS CAROUSEL
   =========================================== */

function initTransfersCarousel() {
    const carousel = document.querySelector('.transfers-carousel');

    if (!carousel) return;

    // Enable smooth scroll behavior
    carousel.style.scrollBehavior = 'smooth';

    // Add drag to scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Set initial cursor
    carousel.style.cursor = 'grab';
}

/* ===========================================
   UTILITY ANIMATIONS
   =========================================== */

// Add fade in animation via CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .top-bar.scrolled {
        background: rgba(17, 22, 32, 0.95);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);

/* ===========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   =========================================== */

// Animate elements when they come into view
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe widget cards
    document.querySelectorAll('.widget-card, .event-card, .story-card').forEach(el => {
        observer.observe(el);
    });
};

// Run after a small delay to ensure DOM is ready
setTimeout(observeElements, 100);

/* ===========================================
   TIME UPDATE
   =========================================== */

// Update "time ago" displays periodically (simulation)
function updateTimeDisplays() {
    const timeElements = document.querySelectorAll('.time-ago, .news-time');

    // In a real app, this would calculate from actual timestamps
    // For now, we just keep them static as this is a demo
}

// Update every minute
setInterval(updateTimeDisplays, 60000);
