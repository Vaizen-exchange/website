document.addEventListener('DOMContentLoaded', function () {

    // --- Contact modal ---
    var modalEl = document.getElementById('contactModal');
    var bsModal  = bootstrap.Modal.getOrCreateInstance(modalEl);

    modalEl.addEventListener('hidden.bs.modal', function () {
        var form    = document.getElementById('contactForm');
        var success = document.getElementById('formSuccess');
        var footer  = document.getElementById('modalFooter');
        var header  = document.getElementById('contactModalHeader');

        form.reset();
        form.classList.remove('was-validated', 'd-none');
        success.classList.add('d-none');
        footer.classList.remove('d-none');
        header.classList.remove('d-none');
    });

    document.addEventListener('click', function (e) {
        var trigger = e.target.closest('a[href="#contact-modal"]');
        if (trigger) {
            e.preventDefault();
            bsModal.show();
        }
    });

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
        document.getElementById('contactModalHeader').classList.add('d-none');
    });

    // --- Partner modal ---
    var partnerModalEl = document.getElementById('partnerModal');

    partnerModalEl.addEventListener('hidden.bs.modal', function () {
        var form    = document.getElementById('partnerForm');
        var success = document.getElementById('partnerFormSuccess');
        var footer  = document.getElementById('partnerModalFooter');
        var header  = document.getElementById('partnerModalHeader');

        form.reset();
        form.classList.remove('was-validated', 'd-none');
        success.classList.add('d-none');
        footer.classList.remove('d-none');
        header.classList.remove('d-none');
    });

    document.getElementById('partnerSubmitBtn').addEventListener('click', function () {
        var form  = document.getElementById('partnerForm');
        var email = document.getElementById('partnerEmail');

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
        document.getElementById('partnerFormSuccess').classList.remove('d-none');
        document.getElementById('partnerModalFooter').classList.add('d-none');
        document.getElementById('partnerModalHeader').classList.add('d-none');
    });

});
