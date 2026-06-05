/* Novel Waters — nav behaviour
   .is-scrolled past 48px; .is-open toggles the mobile overlay. */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 48);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = header.querySelector('.nav-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Close the overlay when a mobile link is followed (hash/same-page cases)
  header.querySelectorAll('.nav-mobile a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('is-open');
      if (burger) burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
