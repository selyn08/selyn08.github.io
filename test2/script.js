document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const icon = mobileNavToggle.querySelector('i');

    if (mobileNavToggle && sidebarNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isVisible = sidebarNav.classList.toggle('is-visible');
            mobileNavToggle.setAttribute('aria-expanded', isVisible);

            if (isVisible) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when a link is clicked
    const navLinks = sidebarNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebarNav.classList.contains('is-visible')) {
                sidebarNav.classList.remove('is-visible');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Scroll-triggered fade-in animation
    const animatedElements = document.querySelectorAll('.fade-in-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');

            if (isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // Checkout page dynamic content
    if (document.querySelector('.checkout-section')) {
        const urlParams = new URLSearchParams(window.location.search);
        const offer = urlParams.get('offer') || 'Non sélectionnée';
        const price = urlParams.get('price') || 'N/A';

        document.getElementById('offer-name').textContent = offer;
        document.getElementById('offer-price').textContent = `${price} DH/mois`;
        document.getElementById('total-price').textContent = `${price} DH`;

        const paymentForm = document.getElementById('payment-form');
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'confirmation.html';
        });
    }

    // Layout Toggle with localStorage
    const layoutToggleButton = document.getElementById('layout-toggle');
    const body = document.body;

    const applyLayoutPreference = () => {
        const preferredLayout = localStorage.getItem('layout-preference');
        if (preferredLayout === 'horizontal') {
            body.classList.add('horizontal-layout');
            if (layoutToggleButton) layoutToggleButton.setAttribute('aria-pressed', 'true');
        } else {
            body.classList.remove('horizontal-layout');
            if (layoutToggleButton) layoutToggleButton.setAttribute('aria-pressed', 'false');
        }
    };

    if (layoutToggleButton) {
        layoutToggleButton.addEventListener('click', () => {
            const isHorizontal = body.classList.toggle('horizontal-layout');
            layoutToggleButton.setAttribute('aria-pressed', isHorizontal);
            if (isHorizontal) {
                localStorage.setItem('layout-preference', 'horizontal');
            } else {
                localStorage.setItem('layout-preference', 'vertical');
            }
        });
    }

    // Apply preference on initial load
    applyLayoutPreference();

    // Horizontal Nav Mobile Toggle
    const horizontalNavToggle = document.querySelector('.horizontal-nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (horizontalNavToggle && navMenu) {
        horizontalNavToggle.addEventListener('click', () => {
            const isVisible = navMenu.classList.toggle('is-visible');
            horizontalNavToggle.setAttribute('aria-expanded', isVisible);
        });
    }
});
