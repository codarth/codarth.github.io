document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.mainmenu li a');

  function onScroll() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    menuLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        const sectionTop = section.offsetTop - 70; // adjust offset for fixed header
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // initialize on load
});
