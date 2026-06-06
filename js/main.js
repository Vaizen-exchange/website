var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHCalQYetJ4uJ4DTI1R0TyoJT0bovN17Vi-9jsGJS_E0fq0XHFOUBbNFAeSF6oI38J/exec'

document.addEventListener('DOMContentLoaded', function () {

    // --- Contact modal ---
    var modalEl = document.getElementById('contactModal');
    var bsModal  = bootstrap.Modal.getOrCreateInstance(modalEl);

    modalEl.addEventListener('hidden.bs.modal', function () {
        var form    = document.getElementById('contactForm');
        var success = document.getElementById('formSuccess');
        var footer  = document.getElementById('modalFooter');
        var header  = document.getElementById('contactModalHeader');
        var btn     = document.getElementById('contactSubmitBtn');

        form.reset();
        form.classList.remove('was-validated', 'd-none');
        success.classList.add('d-none');
        footer.classList.remove('d-none');
        header.classList.remove('d-none');
        btn.disabled = false;
        btn.textContent = 'Send';
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
        var btn   = document.getElementById('contactSubmitBtn');

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

        btn.disabled = true;
        btn.textContent = 'Sending…';

        var params = new URLSearchParams({
            form:         'contact',
            name:         document.getElementById('fullname').value.trim(),
            organisation: document.getElementById('organisation').value.trim(),
            email:        email.value.trim(),
            phone:        document.getElementById('phone').value.trim(),
            type:         document.getElementById('role').value
        });

        fetch(APPS_SCRIPT_URL + '?' + params.toString(), { mode: 'no-cors' })
        .then(function () {
            form.classList.add('d-none');
            document.getElementById('formSuccess').classList.remove('d-none');
            document.getElementById('modalFooter').classList.add('d-none');
            document.getElementById('contactModalHeader').classList.add('d-none');
        })
        .catch(function () {
            btn.disabled = false;
            btn.textContent = 'Send';
            alert('Something went wrong. Please try again.');
        });
    });

    // --- Partner modal ---
    var partnerModalEl = document.getElementById('partnerModal');

    partnerModalEl.addEventListener('hidden.bs.modal', function () {
        var form    = document.getElementById('partnerForm');
        var success = document.getElementById('partnerFormSuccess');
        var footer  = document.getElementById('partnerModalFooter');
        var header  = document.getElementById('partnerModalHeader');
        var btn     = document.getElementById('partnerSubmitBtn');

        form.reset();
        form.classList.remove('was-validated', 'd-none');
        success.classList.add('d-none');
        footer.classList.remove('d-none');
        header.classList.remove('d-none');
        btn.disabled = false;
        btn.textContent = 'Send';
    });

    document.getElementById('partnerSubmitBtn').addEventListener('click', function () {
        var form  = document.getElementById('partnerForm');
        var email = document.getElementById('partnerEmail');
        var btn   = document.getElementById('partnerSubmitBtn');

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

        btn.disabled = true;
        btn.textContent = 'Sending…';

        var params = new URLSearchParams({
            form:         'partner',
            name:         document.getElementById('partnerName').value.trim(),
            organisation: document.getElementById('partnerOrganisation').value.trim(),
            email:        email.value.trim(),
            phone:        document.getElementById('partnerPhone').value.trim(),
            occupation:   document.getElementById('partnerOccupation').value.trim(),
            message:      document.getElementById('partnerMessage').value.trim()
        });

        fetch(APPS_SCRIPT_URL + '?' + params.toString(), { mode: 'no-cors' })
        .then(function () {
            form.classList.add('d-none');
            document.getElementById('partnerFormSuccess').classList.remove('d-none');
            document.getElementById('partnerModalFooter').classList.add('d-none');
            document.getElementById('partnerModalHeader').classList.add('d-none');
        })
        .catch(function () {
            btn.disabled = false;
            btn.textContent = 'Send';
            alert('Something went wrong. Please try again.');
        });
    });

});
