$('form[name="register-form"]').validate({
    rules: {
        username: {
            required: true,
            minlength: 5
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 5
        },
        confirmPassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        }

    },

    messages: {
        username: {
            required: "Please enter your Username",
            minlength: "Your Username must be at least 5 characters long"
        },
        email: {
            required: "Please enter your email",
            email: "Email invalid"
        },
        password: {
            required: "Please enter your password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirmPassword: {
            required: "Please enter confirm password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Passwords do not match"
        }
    }

});