document.addEventListener('DOMContentLoaded', function () {

    var modalEl = document.getElementById('contactModal');
    var bsModal  = bootstrap.Modal.getOrCreateInstance(modalEl);

    // Reset form cleanly every time the modal closes
    modalEl.addEventListener('hidden.bs.modal', function () {
        var form    = document.getElementById('contactForm');
        var success = document.getElementById('formSuccess');
        var footer  = document.getElementById('modalFooter');

        form.reset();
        form.classList.remove('was-validated', 'd-none');
        success.classList.add('d-none');
        footer.classList.remove('d-none');
    });

    // Intercept every a[href="#contact-modal"] click and open the modal
    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('a[href="#contact-modal"]');
        if (trigger) {
            e.preventDefault();
            bsModal.show();
        }
    });

    // Submit: use Bootstrap 5 native validation UI
    document.getElementById('contactSubmitBtn').addEventListener('click', function () {
        var form  = document.getElementById('contactForm');
        var email = document.getElementById('email');

        email.setCustomValidity('');

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
            email.setCustomValidity('Please enter a valid email address.');
            form.classList.add('was-validated');
            return;
        }

        form.classList.add('d-none');
        document.getElementById('formSuccess').classList.remove('d-none');
        document.getElementById('modalFooter').classList.add('d-none');
    });

});
