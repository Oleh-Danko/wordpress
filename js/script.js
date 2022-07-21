window.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.btn-click'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.modal__close'),
    anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  btns.forEach(item => {
    item.addEventListener('click', (e) => {
      overlay.style.display = 'block';
      document.body.style.overflow = "hidden";
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target == overlay) {
      overlay.style.display = 'none';
      document.body.style.overflow = "";
    }
  });

  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.body.style.overflow = "";
  });

  const pageUp = document.querySelector('.scroll-up');

  window.onscroll = () => {
    if (window.scrollY > 700) {
      pageUp.classList.add('scroll-up-active');
    } else {
      pageUp.classList.remove('scroll-up-active');
    }
  };

});