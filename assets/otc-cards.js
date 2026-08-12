/* Otway Tree Care — homepage service cards enhancement.
   For each service card (a column containing an <h3> title + a
   "Learn More" button): hide the button, turn the title into a link,
   and make the whole card clickable through to the service page. */
(function () {
  var buttons = document.querySelectorAll('.c-button a, .c-button button');
  buttons.forEach(function (btn) {
    var label = (btn.textContent || '').trim();
    if (!/^learn more$/i.test(label)) return;

    var href = btn.getAttribute('href');
    if (!href) return;

    var card = btn.closest('.c-nested-column') || btn.closest('.c-column');
    if (!card) return;

    var title = card.querySelector('h3');
    if (!title) return;

    // Mark the card and make it fully clickable
    card.classList.add('otc-service-card');
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; // let real links behave normally
      window.location.href = href;
    });

    // Turn the title text into a real link
    if (!title.querySelector('a')) {
      var a = document.createElement('a');
      a.href = href;
      a.className = 'otc-card-title-link';
      a.innerHTML = title.innerHTML;
      title.innerHTML = '';
      title.appendChild(a);
    }

    // Hide the old button wrapper
    var wrapper = btn.closest('.c-button') || btn;
    wrapper.classList.add('otc-hidden');
  });
})();
