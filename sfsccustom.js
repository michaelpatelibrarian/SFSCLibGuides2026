// SFSC Services Dropdown - Final version for LibGuides
(function() {
    'use strict';

    function setActiveNavLink() {
        const path = window.location.pathname;
        const navLinks = document.querySelectorAll('.sfsc-nav-link:not(.dropdown-toggle)');

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');

            const linkPath = new URL(link.href, window.location.origin).pathname;

            // Match homepage exactly, all others by startsWith
            const isHome = linkPath === '/' && (path === '/' || path === '');
            const isMatch = linkPath !== '/' && path.startsWith(linkPath);

            if (isHome || isMatch) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavLink);
    } else {
        setActiveNavLink();
    }

    document.addEventListener('headerLoaded', setActiveNavLink);

    function initDropdown() {
        // Try to find the Services dropdown
        let toggle = document.getElementById('servicesDropdown');
        let menu = document.querySelector('.dropdown-menu');

        // If not found by ID, search for it
        if (!toggle) {
            const dropdowns = document.querySelectorAll('.dropdown');
            for (let dropdown of dropdowns) {
                const link = dropdown.querySelector('.dropdown-toggle');
                if (link && link.textContent.trim().toLowerCase().includes('services')) {
                    toggle = link;
                    menu = dropdown.querySelector('.dropdown-menu');
                    break;
                }
            }
        }

        if (!toggle || !menu) {
            return false;
        }

        // Remove existing listeners by cloning
        const newToggle = toggle.cloneNode(true);
        toggle.parentNode.replaceChild(newToggle, toggle);
        toggle = newToggle;

        // Add click handler
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isOpen = menu.classList.contains('show');

            if (isOpen) {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
                document.querySelectorAll('[aria-expanded="true"]').forEach(t => t.setAttribute('aria-expanded', 'false'));

                menu.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (!toggle.parentElement.contains(e.target) && menu.classList.contains('show')) {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        return true;
    }

    // Try to initialize immediately
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDropdown);
    } else {
        initDropdown();
        setTimeout(initDropdown, 1000);
        setTimeout(initDropdown, 3000);
    }

    // Listen for header loaded event
    document.addEventListener('headerLoaded', function() {
        setTimeout(initDropdown, 100);
    });

    // Also try on window load
    window.addEventListener('load', function() {
        setTimeout(initDropdown, 500);
    });

})();

<script>
// Check if the URL contains 'bs5=1' as a query parameter
if (window.location.search.includes('bs5=1')) {
// Add the 'bs5-preview' class to the body element
document.body.classList.add('bs5-preview');
}
</script>