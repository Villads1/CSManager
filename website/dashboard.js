/**
 * CS Manager Dashboard - JavaScript
 * Handles search expansion, dropdowns, and interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initDropdowns();
});

/**
 * Search button expand functionality
 */
function initSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (!searchContainer || !searchBtn || !searchInput) return;

    // Toggle search expansion
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchContainer.classList.toggle('expanded');

        if (searchContainer.classList.contains('expanded')) {
            searchInput.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('expanded');
        }
    });

    // Handle escape key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchContainer.classList.remove('expanded');
            searchBtn.focus();
        }
    });

    // Handle search submission
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Searching for:', query);
                // In real app: navigate to search results
                // window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }
        }
    });
}

/**
 * Dropdown menu functionality (for mobile/touch devices)
 * Note: CSS handles hover states for desktop
 */
function initDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');

        // Touch device support
        link.addEventListener('click', (e) => {
            // Only prevent default on touch devices
            if ('ontouchstart' in window) {
                e.preventDefault();

                // Close other dropdowns
                dropdownItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('open');
                    }
                });

                // Toggle current dropdown
                item.classList.toggle('open');
            }
        });
    });

    // Close dropdowns when clicking outside (touch devices)
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            dropdownItems.forEach(item => {
                item.classList.remove('open');
            });
        }
    });
}

/**
 * Utility: Format time ago
 */
function formatTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
}

/**
 * Utility: Animate counter (for future use)
 */
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        element.textContent = Math.floor(start + (target - start) * eased);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

console.log('🎮 CS Manager Dashboard loaded');
