/* Novel Waters — contact form: reason segments, conditional fields, file label */
(function () {
  var form = document.querySelector('form[name="novel-waters-contact"]');
  if (!form) return;

  var seg = form.querySelector('[data-reason-seg]');
  var reasonInput = form.querySelector('[data-reason-input]');
  var messageLabel = form.querySelector('[data-message-label]');
  var messageArea = form.querySelector('#cf-message');
  var submitLabel = form.querySelector('[data-submit-label]');

  var COPY = {
    General: {
      label: 'Message',
      placeholder: 'Say as much or as little as you like…',
      submit: 'Send message'
    },
    Submission: {
      label: 'A note about your piece',
      placeholder: "Tell me a little about the work and why you're sending it here…",
      submit: 'Send my submission'
    },
    Collaboration: {
      label: 'Your idea',
      placeholder: 'What would you like to make together?',
      submit: 'Pitch the collaboration'
    }
  };

  function setReason(reason) {
    reasonInput.value = reason;

    seg.querySelectorAll('button[data-reason]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-reason') === reason ? 'true' : 'false');
    });

    form.querySelectorAll('[data-show-for]').forEach(function (block) {
      block.hidden = block.getAttribute('data-show-for').split(' ').indexOf(reason) === -1;
    });

    var copy = COPY[reason];
    messageLabel.textContent = copy.label;
    messageArea.placeholder = copy.placeholder;
    submitLabel.innerHTML = copy.submit + ' <span class="arr">&rarr;</span>';
  }

  seg.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-reason]');
    if (btn) setReason(btn.getAttribute('data-reason'));
  });

  var fileInput = form.querySelector('[data-filebox-input]');
  var fileTitle = form.querySelector('[data-filebox-title]');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      fileTitle.textContent =
        (fileInput.files[0] && fileInput.files[0].name) || 'Drop a file or click to upload';
    });
  }
})();
