document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icn');
    let navlist = document.querySelector('.navlist');
    const sr = ScrollReveal ({
        distance: '45px',
        duration: 2700,
        reset: true
    })

    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('active');
    };
  
    window.onscroll = () => {
      menu.classList.remove('bx-x');
      navlist.classList.remove('active');
    };

    sr.reveal('.home-text', {delay:350, origin:'left'});
    sr.reveal('.home-img', {delay:350, origin:'right'});

    sr.reveal('.sub-service, .about, .languages, .service, .contact', {delay:200, origin:'bottom'});
  });
