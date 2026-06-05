/* Novel Waters — archive category filters (Fiction & Poetry page) */
(function () {
  var seg = document.querySelector('[data-archive-filters]');
  var list = document.querySelector('[data-archive-list]');
  if (!seg || !list) return;

  seg.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-filter]');
    if (!btn) return;

    seg.querySelectorAll('button[data-filter]').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });

    var filter = btn.getAttribute('data-filter');
    list.querySelectorAll('.archive-row').forEach(function (row) {
      row.style.display =
        filter === 'All' || row.getAttribute('data-cat') === filter ? '' : 'none';
    });
  });
})();
