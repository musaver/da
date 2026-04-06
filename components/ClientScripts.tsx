'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    AOS: any;
    bootstrap: any;
    $: any;
    jQuery: any;
  }
}

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for all scripts to load
    const initScripts = () => {
      // Initialize AOS - refresh on every navigation
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.refresh();
        window.AOS.init({
          once: true,
          duration: 1000,
        });
      }

      // Initialize Bootstrap tooltips
      if (typeof window !== 'undefined' && window.bootstrap) {
        const tooltipTriggerList = Array.from(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
          new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }

      // Initialize jQuery-based animations
      if (typeof window !== 'undefined' && window.$) {
        const $ = window.$;

        // Remove any existing scroll handlers to prevent duplicates
        $(window).off('scroll.headerFixed');
        $(window).off('scroll.scrollToTop');
        $(window).off('scroll.navHighlighter');

        // Header Scroll
        $(window).on('scroll.headerFixed', function () {
          if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
          } else {
            $("header").removeClass("fixed-header");
          }
        });

        // Count animation - reset and re-animate
        $('.count').each(function () {
          const target = $(this).data('target') || $(this).text();
          $(this).data('target', target); // Store original value
          $(this).prop('Counter', 0).animate({
            Counter: target
          }, {
            duration: 1000,
            easing: 'swing',
            step: function (now: number) {
              $(this).text(Math.ceil(now));
            }
          });
        });

        // Scroll to top functionality
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };

        const btn = document.getElementById("scrollToTopBtn");
        if (btn) {
          // Remove existing listener if any
          btn.removeEventListener("click", scrollToTop);
          btn.addEventListener("click", scrollToTop);
        }

        // Scroll to top button visibility
        $(window).on('scroll.scrollToTop', function () {
          const btn = document.getElementById("scrollToTopBtn");
          if (btn) {
            if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
              btn.style.display = "flex";
            } else {
              btn.style.display = "none";
            }
          }
        });

        // Navigation highlighter
        const sections = document.querySelectorAll("section[id]");

        function navHighlighter() {
          let scrollY = window.pageYOffset;

          sections.forEach(current => {
            const sectionHeight = current.clientHeight;
            const sectionTop = (current as HTMLElement).offsetTop - 100;
            const sectionId = current.getAttribute("id");

            if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              const navLink = document.querySelector(".navbar-collapse a[href*=" + sectionId + "]");
              if (navLink) {
                navLink.classList.add("active");
              }
            } else if (sectionId) {
              const navLink = document.querySelector(".navbar-collapse a[href*=" + sectionId + "]");
              if (navLink) {
                navLink.classList.remove("active");
              }
            }
          });
        }

        $(window).on('scroll.navHighlighter', navHighlighter);
      }
    };

    // Delay initialization to ensure all scripts are loaded
    const timer = setTimeout(initScripts, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup jQuery event listeners
      if (typeof window !== 'undefined' && window.$) {
        const $ = window.$;
        $(window).off('scroll.headerFixed');
        $(window).off('scroll.scrollToTop');
        $(window).off('scroll.navHighlighter');
      }
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}

