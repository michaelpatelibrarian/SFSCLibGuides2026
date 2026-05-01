// SFSC LibGuides Bootstrap 5 custom behavior
(function() {
    'use strict';

    var lastDropdownTouchTime = 0;

    function setActiveNavLink() {
        var path = window.location.pathname;
        var navLinks = document.querySelectorAll('.sfsc-nav-link:not(.dropdown-toggle)');

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            link.removeAttribute('aria-current');

            var linkPath = new URL(link.href, window.location.origin).pathname;

            // Match homepage exactly, all others by startsWith.
            var isHome = linkPath === '/' && (path === '/' || path === '');
            var isMatch = linkPath !== '/' && path.startsWith(linkPath);

            if (isHome || isMatch) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    function runWhenReady(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    function closeDropdowns(exceptDropdown) {
        document.querySelectorAll('.sfsc-nav .dropdown').forEach(function(dropdown) {
            if (dropdown === exceptDropdown) return;
            dropdown.classList.remove('show');
        });

        document.querySelectorAll('.sfsc-nav .dropdown-menu.show').forEach(function(menu) {
            var dropdown = menu.closest('.dropdown');
            if (dropdown === exceptDropdown) return;
            menu.classList.remove('show');
        });

        document.querySelectorAll('.sfsc-nav .dropdown-toggle[aria-expanded="true"]').forEach(function(toggle) {
            var dropdown = toggle.closest('.dropdown');
            if (dropdown === exceptDropdown) return;
            toggle.classList.remove('show');
            toggle.setAttribute('aria-expanded', 'false');
        });
    }

    function normalizeSearchResultSummary() {
        var searchContent = document.querySelector('#s-lg-srch-content');
        if (!searchContent) return;

        var walker = document.createTreeWalker(searchContent, NodeFilter.SHOW_TEXT);
        var node;

        while ((node = walker.nextNode())) {
            node.nodeValue = node.nodeValue.replace(/\bPages\s+,/g, 'Pages,');
        }
    }

    function observeSearchResults() {
        var searchContent = document.querySelector('#s-lg-srch-content');
        if (!searchContent || typeof MutationObserver === 'undefined') return;

        normalizeSearchResultSummary();

        new MutationObserver(normalizeSearchResultSummary).observe(searchContent, {
            childList: true,
            subtree: true
        });
    }

    function toggleDropdown(toggle, eventType) {
        var dropdown = toggle.closest('.dropdown');
        var menu = dropdown ? dropdown.querySelector('.dropdown-menu') : null;
        if (!dropdown || !menu) return;

        var isOpen = menu.classList.contains('show');

        closeDropdowns(dropdown);

        dropdown.classList.toggle('show', !isOpen);
        menu.classList.toggle('show', !isOpen);
        toggle.classList.toggle('show', !isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');

        if (eventType === 'touchstart' || eventType === 'pointerdown') {
            lastDropdownTouchTime = Date.now();
        }
    }

    function stopLibGuidesHandlers(e) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === 'function') {
            e.stopImmediatePropagation();
        }
    }

    function handleDropdownToggle(e) {
        var toggle = e.target.closest('.sfsc-nav .dropdown-toggle');

        if (toggle) {
            stopLibGuidesHandlers(e);

            // Mobile browsers often dispatch a synthetic click after touch/pointer.
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

    runWhenReady(setActiveNavLink);
    runWhenReady(observeSearchResults);
    document.addEventListener('headerLoaded', setActiveNavLink);

    // Capture before LibGuides' legacy Bootstrap/jQuery handlers can close the menu.
    // Use touchstart only as a fallback because modern mobile browsers also fire pointerdown.
    (window.PointerEvent ? ['pointerdown', 'click'] : ['touchstart', 'click']).forEach(function(eventName) {
        document.addEventListener(eventName, handleDropdownToggle, true);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDropdowns();
        }
    });

    runWhenReady(function() {
        if (window.location.search.indexOf('bs5=1') !== -1) {
            document.body.classList.add('bs5-preview');
        }
    });
})();
