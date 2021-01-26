$('form[name="register-client"]').validate({
    rules: {
        username: {
            required: true,
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
        username: {
            required: "Vui lòng nhập Username",
        },
        password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        confirmPassword: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Comfirm Password Ivl"
        },
        email: {
            required: "Vui lòng nhập email",
            email: "Email không hợp lệ"
        }
    }

});