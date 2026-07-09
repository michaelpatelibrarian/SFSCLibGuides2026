// SFSC LibCal — sfsccalcustom.js  v1.0  2026-07-09
// Loaded via <script> in the LibCal Custom JS/CSS Code field (libcalheadincludes.html).
// SFSC LibCal header behavior — framework-independent (no jQuery, no Bootstrap JS).
// Ported from sfsccustom.js (LibGuides): same capture-phase dropdown handling,
// Space/Escape support, and synthetic-click suppression. Plus: hamburger toggle
// and a skip-link target (LibCal has no native skip link; <main> has no id).
(function() {
    'use strict';

    var lastDropdownTouchTime = 0;

    function runWhenReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function closeDropdowns(exceptDropdown) {
        document.querySelectorAll('.sfsc-nav .dropdown-menu.show').forEach(function(menu) {
            var dropdown = menu.closest('.dropdown');
            if (dropdown === exceptDropdown) return;
            menu.classList.remove('show');
        });
        document.querySelectorAll('.sfsc-nav .dropdown-toggle[aria-expanded="true"]').forEach(function(toggle) {
            var dropdown = toggle.closest('.dropdown');
            if (dropdown === exceptDropdown) return;
            toggle.setAttribute('aria-expanded', 'false');
        });
    }

    function toggleDropdown(toggle, eventType) {
        var dropdown = toggle.closest('.dropdown');
        var menu = dropdown ? dropdown.querySelector('.dropdown-menu') : null;
        if (!dropdown || !menu) return;

        var isOpen = menu.classList.contains('show');
        closeDropdowns(dropdown);
        menu.classList.toggle('show', !isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');

        if (eventType === 'touchstart' || eventType === 'pointerdown') {
            lastDropdownTouchTime = Date.now();
        }
    }

    function stopOtherHandlers(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') {
            e.stopImmediatePropagation();
        }
    }

    function handleDropdownToggle(e) {
        var toggle = e.target.closest('.sfsc-nav .dropdown-toggle');

        if (toggle) {
            stopOtherHandlers(e);
            // Mobile browsers dispatch a synthetic click after touch/pointer.
            if (e.type === 'click' && Date.now() - lastDropdownTouchTime < 700) {
                return;
            }
            toggleDropdown(toggle, e.type);
            return;
        }

        if (!e.target.closest('.sfsc-nav .dropdown')) {
            closeDropdowns();
        }
    }

    function setupHamburger() {
        var toggler = document.querySelector('.sfsc-nav-toggler');
        var nav = document.getElementById('sfscNav');
        if (!toggler || !nav) return;

        toggler.addEventListener('click', function() {
            var isOpen = nav.classList.toggle('show');
            toggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // LibCal renders <main aria-label="Main Content"> with no id and no native
    // skip link, so give it one and point our skip link at it.
    function setupSkipLink() {
        var skipLink = document.querySelector('.sfsc-skip-link');
        var main = document.querySelector('main');
        if (!skipLink) return;
        if (!main) {
            skipLink.hidden = true;
            return;
        }
        if (!main.id) {
            main.id = 'sfsc-main';
        }
        if (!main.hasAttribute('tabindex')) {
            main.setAttribute('tabindex', '-1');
        }
        skipLink.setAttribute('href', '#' + main.id);
    }

    runWhenReady(setupHamburger);
    runWhenReady(setupSkipLink);

    (window.PointerEvent ? ['pointerdown', 'click'] : ['touchstart', 'click']).forEach(function(eventName) {
        document.addEventListener(eventName, handleDropdownToggle, true);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDropdowns();
            return;
        }
        // Toggles are <a role="button">: Space must activate (Enter fires click natively).
        if (e.key === ' ' || e.key === 'Spacebar') {
            var toggle = e.target.closest('.sfsc-nav .dropdown-toggle');
            if (toggle) {
                stopOtherHandlers(e);
                toggleDropdown(toggle, e.type);
            }
        }
    });
})();
