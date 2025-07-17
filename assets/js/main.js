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

  // --- INICIO DEL CÓDIGO DEL CARRUSEL (Pega aquí el código que te di anteriormente) ---
  // Pégalo justo antes del cierre de la IIFE `})();`
  // Puedes poner un comentario para saber dónde empieza y termina.

  // Es buena práctica envolver el código del carrusel en su propio DOMContentLoaded
  // o dentro de un 'load' listener si tu página es muy compleja y hay scripts que cargan tarde.
  // Dado que este template ya usa 'window.addEventListener("load", ...)' para varias cosas,
  // y para asegurar que todos los elementos HTML estén disponibles, usar 'load' aquí también es seguro.

  window.addEventListener('load', () => {
    // 1. Seleccionar los elementos clave del carrusel
    const iconoScroll = document.querySelector('.icono-scroll');
    const iconos = Array.from(document.querySelectorAll('.icono-scroll .icono'));
    const iconoDotsContainer = document.querySelector('.icono-dots');
    const dots = Array.from(document.querySelectorAll('.icono-dots .dot'));

    // Si no encontramos los elementos, salimos (para evitar errores)
    if (!iconoScroll || iconos.length === 0 || !iconoDotsContainer || dots.length === 0) {
        console.warn("Algunos elementos del carrusel no se encontraron. El script del carrusel no se ejecutará.");
        return; // Salir si no se encuentran los elementos necesarios para el carrusel
    }

    // 2. Función para actualizar el punto activo
    const updateActiveDot = () => {
        const scrollLeft = iconoScroll.scrollLeft;
        const scrollWidth = iconoScroll.clientWidth;

        let currentActiveIndex = 0;
        let minDistance = Infinity;

        iconos.forEach((icono, index) => {
            const iconoCenter = icono.offsetLeft + icono.offsetWidth / 2;
            const viewportCenter = scrollLeft + scrollWidth / 2;
            const distance = Math.abs(iconoCenter - viewportCenter);

            if (distance < minDistance) {
                minDistance = distance;
                currentActiveIndex = index;
            }
        });

        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[currentActiveIndex]) {
            dots[currentActiveIndex].classList.add('active');
        }
    };

    // 3. Función para manejar el clic en los puntos de navegación
    const handleDotClick = (event) => {
        const clickedDot = event.target;
        if (clickedDot.classList.contains('dot')) {
            const dotIndex = dots.indexOf(clickedDot);
            if (dotIndex > -1 && iconos[dotIndex]) {
                const targetIcono = iconos[dotIndex];
                iconoScroll.scrollTo({
                    left: targetIcono.offsetLeft - (iconoScroll.clientWidth / 2) + (targetIcono.offsetWidth / 2),
                    behavior: 'smooth'
                });
            }
        }
    };

    // 4. Lógica para activar/desactivar el carrusel y los puntos basado en el tamaño de la pantalla
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Nuestro breakpoint para móvil

    const handleMediaQueryChange = (e) => {
        if (e.matches) {
            // Si la pantalla es móvil (<= 768px):
            // Añadimos los event listeners
            iconoScroll.addEventListener('scroll', updateActiveDot);
            iconoDotsContainer.addEventListener('click', handleDotClick);
            updateActiveDot(); // Llamamos una vez para asegurar que el punto inicial esté activo
        } else {
            // Si no es móvil (> 768px):
            // Removemos los event listeners para que no haya comportamiento de carrusel en desktop
            iconoScroll.removeEventListener('scroll', updateActiveDot);
            iconoDotsContainer.removeEventListener('click', handleDotClick);
            iconoScroll.scrollTo({ left: 0, behavior: 'instant' }); // Aseguramos que no haya scroll forzado
            dots.forEach(dot => dot.classList.remove('active')); // Desactivar puntos
        }
    };

    // 5. Ejecutar la lógica una vez al cargar la página (para el estado inicial)
    handleMediaQueryChange(mediaQuery);

    // 6. Añadir un listener para cuando el tamaño de la pantalla cambie
    mediaQuery.addEventListener('change', handleMediaQueryChange);

  }); // Cierre del window.addEventListener('load', ...) para el carrusel

  // --- FIN DEL CÓDIGO DEL CARRUSEL ---

})(); // Cierre de la IIFE de BootstrapMade