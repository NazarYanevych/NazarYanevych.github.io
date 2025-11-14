document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('validationForm');
    
    const email = document.getElementById('email');
    const fullName = document.getElementById('fullName');
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const zipcode = document.getElementById('zipcode');

    const emailIcon = document.getElementById('email-icon');
    const fullNameIcon = document.getElementById('fullName-icon');
    const loginIcon = document.getElementById('login-icon');
    const passwordIcon = document.getElementById('password-icon');
    const zipcodeIcon = document.getElementById('zipcode-icon');

    const emailError = document.getElementById('email-error');
    const fullNameError = document.getElementById('fullName-error');
    const loginError = document.getElementById('login-error');
    const passwordError = document.getElementById('password-error');
    const zipcodeError = document.getElementById('zipcode-error');


const emailRegex = /^[a-zA-Z0-9._%+-]+@pnu\.edu\.ua$/i;

const fullNameRegex = /^\p{Lu}\p{Ll}+\s\p{Lu}+$/u;
    
const loginRegex = /^[a-zA-Z0-9_]+$/;
    
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_\-!@#$%^&*])[A-Za-z\d_\-!@#$%^&*]{8,}$/;
    
const zipcodeRegex = /^\d{5}$/;

    function setFeedback(input, iconEl, errorEl, message, isValid) {
        if (isValid) {
            input.style.borderColor = 'green';
            input.style.color = 'green';
            iconEl.textContent = '+'; 
            iconEl.style.color = 'green';
            errorEl.textContent = '';
        } else {
            input.style.borderColor = 'red';
            input.style.color = 'red';
            iconEl.textContent = 'x';
            iconEl.style.color = 'red';
            errorEl.textContent = message;
            errorEl.style.color = 'red';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (emailRegex.test(email.value)) {
            setFeedback(email, emailIcon, emailError, '', true);
        } else {
            setFeedback(email, emailIcon, emailError, 'E-mail повинен закінчуватися на @pnu.edu.ua', false);
        }

        if (fullNameRegex.test(fullName.value)) {
            setFeedback(fullName, fullNameIcon, fullNameError, '', true);
        } else {
            setFeedback(fullName, fullNameIcon, fullNameError, "Формат: Імя ПРІЗВИЩЕ", false);
        }

        if (loginRegex.test(login.value) && login.value.length > 0) {
            setFeedback(login, loginIcon, loginError, '', true);
        } else {
            setFeedback(login, loginIcon, loginError, 'Логін повинен містити тільки латинські літери, цифри або _', false);
        }

        if (passwordRegex.test(password.value)) {
            setFeedback(password, passwordIcon, passwordError, '', true);
        } else {
            setFeedback(password, passwordIcon, passwordError, 'Пароль (мін. 8) має містити букву, цифру та спецсимвол (_-!@#$%^&*)', false);
        }

        if (zipcodeRegex.test(zipcode.value)) {
            setFeedback(zipcode, zipcodeIcon, zipcodeError, '', true);
        } else {
            setFeedback(zipcode, zipcodeIcon, zipcodeError, 'Поштовий індекс повинен складатися рівно з 5 цифр', false);
        }
    });
});