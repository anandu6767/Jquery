//login js file
$(document).ready(function() {
    // Handle form submission
    $('#login-form').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Clear previous errors
        $('.error-message').hide();
        let isValid = true;
        // Validate email
        const email = $('#email').val().trim();
        if (!validateEmail(email)) {
            $('#email-error').text('Please enter a valid email address.').show();
            $('#email').addClass('input-error');
            isValid = false;
        } else {
            $('#email').removeClass('input-error');
        }
        // Validate password
        const password = $('#password').val().trim();
        if (password.length < 6) {
            $('#password-error').text('Password must be at least 6 characters long.').show();
            $('#password').addClass('input-error');
            isValid = false;
        } else {
            $('#password').removeClass('input-error');
        }

        // If the form is valid, submit it
        if (isValid) {
            this.submit(); // Submit the form
        }
    });
    // Real-time validation for email
    $('#email').on('blur', function() {
        const email = $(this).val().trim();
        if (!validateEmail(email)) {
            $('#email-error').text('Please enter a valid email address.').show();
            $(this).addClass('input-error');
        } else {
            $('#email-error').hide();
            $(this).removeClass('input-error');
        }
    });
    // Real-time validation for password
    $('#password').on('blur', function() {
        const password = $(this).val().trim();
        if (password.length < 6) {
            $('#password-error').text('Password must be at least 6 characters long.').show();
            $(this).addClass('input-error');
        } else {
            $('#password-error').hide();
            $(this).removeClass('input-error');
        }
    });
    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Handle "Forgot Password?" click
    $('#forgot-password').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        alert('Forgot Password clicked');
    });
});
