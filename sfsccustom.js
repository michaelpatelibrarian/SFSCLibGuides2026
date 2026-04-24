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

    function initDropdowns() {
        document.querySelectorAll('.sfsc-nav .dropdown').forEach(function(dropdown) {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            const menu = dropdown.querySelector('.dropdown-menu');
            if (!toggle || !menu) return;

            // Clone to remove any previously attached listeners
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);

            newToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const isOpen = menu.classList.contains('show');

                // Close all dropdowns in the nav first
                document.querySelectorAll('.sfsc-nav .dropdown-menu.show').forEach(function(m) {
                    m.classList.remove('show');
                });
                document.querySelectorAll('.sfsc-nav [aria-expanded="true"]').forEach(function(t) {
                    t.setAttribute('aria-expanded', 'false');
                });

                // If it was closed, open it
                if (!isOpen) {
                    menu.classList.add('show');
                    newToggle.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Single outside-click handler to close all dropdowns
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.sfsc-nav .dropdown')) {
                document.querySelectorAll('.sfsc-nav .dropdown-menu.show').forEach(function(m) {
                    m.classList.remove('show');
                });
                document.querySelectorAll('.sfsc-nav [aria-expanded="true"]').forEach(function(t) {
                    t.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDropdowns);
    } else {
        initDropdowns();
    }

    window.addEventListener('load', initDropdowns);
    document.addEventListener('headerLoaded', function() {
        setTimeout(initDropdowns, 100);
    });

})();

<script>
// Check if the URL contains 'bs5=1' as a query parameter
if (window.location.search.includes('bs5=1')) {
// Add the 'bs5-preview' class to the body element
document.body.classList.add('bs5-preview');
}
</script>