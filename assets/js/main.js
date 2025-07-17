/**
* Template Name: Techie
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/**
* Template Name: Techie
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

    document.addEventListener('DOMContentLoaded', function() {
        const iconoScroll = document.querySelector('.icono-scroll');
        const dotsContainer = document.querySelector('.icono-dots');
        const iconos = document.querySelectorAll('.icono');
        let dots = [];

        const mediaQuery = window.matchMedia('(max-width: 768px)');

        function setupCarousel(mql) {
            if (mql.matches) { // Si estamos en pantalla móvil (<= 768px)
                // Crear los puntos si no existen o si han sido removidos
                if (dots.length === 0 || dotsContainer.children.length === 0) {
                    dotsContainer.innerHTML = ''; // Limpiar el contenedor de dots
                    dots = []; // Vaciar el array de dots

                    iconos.forEach((_, index) => {
                        const dot = document.createElement('span');
                        dot.classList.add('dot');
                        dot.dataset.index = index; // El índice del icono al que corresponde
                        dotsContainer.appendChild(dot);
                        dots.push(dot);
                    });
                }

                // Asegurar que el scroll esté al inicio al cargar en móvil SOLO SI NO HAY UN SCROLL PREVIO
                // Para evitar que siempre salte al inicio si el usuario ya había deslizado
                if (iconoScroll.scrollLeft === 0) {
                    updateDots(); // Actualiza los dots al inicio
                }
                
                // --- Función para actualizar el estado activo de los puntos ---
                // Esta función necesita ser definida dentro del ámbito de setupCarousel
                // o hacerse accesible para el removeEventListener.
                // Usamos una función nombrada para facilitar el removeEventListener.
                function updateDots() {
                    if (iconos.length === 0 || dots.length === 0) return;

                    // Obtener la posición de scroll actual
                    const scrollLeft = iconoScroll.scrollLeft;
                    const containerWidth = iconoScroll.offsetWidth;

                    let closestIconIndex = 0;
                    let minDistance = Infinity;

                    // Iterar sobre cada icono para encontrar cuál está más centrado
                    iconos.forEach((icono, index) => {
                        const iconoRect = icono.getBoundingClientRect(); // Obtener la posición del icono relativa al viewport
                        const iconoCenter = iconoRect.left + iconoRect.width / 2; // Centro del icono en el viewport

                        // Centro del contenedor de scroll en el viewport
                        const containerRect = iconoScroll.getBoundingClientRect();
                        const containerCenter = containerRect.left + containerRect.width / 2;

                        const distance = Math.abs(iconoCenter - containerCenter);

                        if (distance < minDistance) {
                            minDistance = distance;
                            closestIconIndex = index;
                        }
                    });

                    // Remover la clase 'active' de todos los dots
                    dots.forEach(dot => dot.classList.remove('active'));

                    // Añadir la clase 'active' al dot que corresponde al icono más cercano al centro
                    if (dots[closestIconIndex]) {
                        dots[closestIconIndex].classList.add('active');
                    }
                }

                // --- Función para manejar el clic en los puntos ---
                function handleDotClick(event) {
                    if (event.target.classList.contains('dot')) {
                        const indexToScrollTo = parseInt(event.target.dataset.index);
                        const targetIcono = iconos[indexToScrollTo];

                        if (targetIcono) {
                            // Calcular la posición de scroll para centrar el icono deseado
                            // Este cálculo tiene que ser preciso para el scroll-snap-align: center
                            // La idea es que el centro del targetIcono se alinee con el centro del iconoScroll
                            const targetIconoCenter = targetIcono.offsetLeft + (targetIcono.offsetWidth / 2);
                            const scrollCenter = iconoScroll.offsetWidth / 2;
                            const scrollLeftPosition = targetIconoCenter - scrollCenter;

                            iconoScroll.scrollTo({
                                left: scrollLeftPosition,
                                behavior: 'smooth'
                            });
                        }
                    }
                }

                // Añadir los event listeners
                iconoScroll.addEventListener('scroll', updateDots);
                dotsContainer.addEventListener('click', handleDotClick);

                // Llama a updateDots al cargar para asegurar que el dot inicial esté activo
                updateDots();

            } else { // Si estamos en pantalla de escritorio ( > 768px)
                // Remover event listeners
                iconoScroll.removeEventListener('scroll', updateDots);
                dotsContainer.removeEventListener('click', handleDotClick);

                // Remover los puntos del DOM para desktop
                dots.forEach(dot => dot.remove());
                dotsContainer.innerHTML = '';
                dots = [];
            }
        }

        // Inicializar y escuchar cambios en el media query
        setupCarousel(mediaQuery);
        mediaQuery.addEventListener('change', setupCarousel);
    });


  // --- FIN DEL CÓDIGO DEL CARRUSEL ---

})(); // Cierre de la IIFE de BootstrapMade