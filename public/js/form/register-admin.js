$('form[name="register-admin"]').validate({
    rules: {
        fullName: {
            required: true,
            minlength: 10
        },
        username: {
            required: true,
            minlength: 5
        },
        password: {
            required: true,
            minlength: 5
        },
        confirmPassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        email: {
            required: true,
            email: true
        }

    },

    messages: {
        fullName: {
            required: "Enter Name",
            minlength: "Full Name must be at least 10 characters long"
        },
        username: {
            required: "Enter Username",
            minlength: "Your Username must be at least 5 characters long"
        },
        email: {
            required: "Enter email",
            email: "Email invalid"
        },
        password: {
            required: "Enter password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirmPassword: {
            required: "Enter confirm password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Passwords do not match"
        }
    }

});