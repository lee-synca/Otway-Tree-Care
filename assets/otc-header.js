/* Otway Tree Care — header behaviour (mobile menu + submenu accordion) */
(function () {
  var burger = document.getElementById('otc-burger');
  var mobile = document.getElementById('otc-mobile');

  function closeMobile() {
    if (!burger || !mobile) return;
    burger.classList.remove('open');
    mobile.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && mobile) {
    burger.addEventListener('click', function () {
      var open = burger.classList.toggle('open');
      mobile.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Mobile "Services" accordion
  document.querySelectorAll('.otc-mobile__subtoggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sub = btn.nextElementSibling;
      var open = btn.classList.toggle('open');
      if (sub) sub.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Desktop: the top-level "Services" link reveals its dropdown on hover,
  // so its click should not navigate anywhere.
  document.querySelectorAll('.otc-nav__item.has-sub > .otc-nav__link').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // Tapping any real link inside the mobile panel closes the menu
  document.querySelectorAll('#otc-mobile a').forEach(function (a) {
    a.addEventListener('click', closeMobile);
  });

  // Close the mobile menu on resize up to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) closeMobile();
  });
})();
