document.addEventListener('DOMContentLoaded', () => {
    // Preloader Logic
    const preloader = document.getElementById('preloader');
    const contentToHide = document.querySelectorAll('.preloader-hidden');

    if (preloader && !sessionStorage.getItem('selyn-preloader-shown')) {
        setTimeout(() => {
            preloader.classList.add('preloader-fade-out');

            // Wait for the fade-out animation to complete
            setTimeout(() => {
                preloader.classList.add('preloader-hidden');
                contentToHide.forEach(el => {
                    el.classList.remove('preloader-hidden');
                });
                sessionStorage.setItem('selyn-preloader-shown', 'true');
            }, 500); // Corresponds to the transition duration in CSS
        }, 3000); // 3-second preloader display
    } else if (preloader) {
        // If preloader has been shown, hide it immediately and show content
        preloader.style.display = 'none';
        contentToHide.forEach(el => {
            el.classList.remove('preloader-hidden');
        });
    }

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

    // Poles Slider Logic
    const polesSlider = document.getElementById('poles-slider');
    if (polesSlider) {
        const sliderContainer = polesSlider.querySelector('.slider-container');
        const slides = polesSlider.querySelectorAll('.pole-slide-link');
        const prevButton = polesSlider.querySelector('.slider-btn.prev');
        const nextButton = polesSlider.querySelector('.slider-btn.next');

        let currentIndex = 0;
        const totalSlides = slides.length;

        const getVisibleSlides = () => {
            return window.innerWidth <= 768 ? 1 : 3;
        };

        const updateSliderPosition = () => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            const newTransform = -currentIndex * slideWidth;

            if (window.innerWidth <= 768) {
                 sliderContainer.style.transform = `translateX(${newTransform}px)`;
            } else {
                sliderContainer.style.transform = `translateX(0px)`;
            }

            const visibleSlides = getVisibleSlides();
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= totalSlides - visibleSlides;

            if (window.innerWidth > 768) {
                prevButton.style.display = 'none';
                nextButton.style.display = 'none';
            } else {
                prevButton.style.display = 'flex';
                nextButton.style.display = 'flex';
            }
        };

        nextButton.addEventListener('click', () => {
            const visibleSlides = getVisibleSlides();
            if (currentIndex < totalSlides - visibleSlides) {
                currentIndex++;
                updateSliderPosition();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });

        window.addEventListener('resize', () => {
            currentIndex = 0;
            updateSliderPosition();
        });

        updateSliderPosition();
    }
});
