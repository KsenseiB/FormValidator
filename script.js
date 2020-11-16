const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//error outline
function showError(input, message)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message; // in the event listener showError the message is the 2nd param
}

//success outline
function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email validity
function checkEmail(input)
{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is invald')
    }

}

// Check password match
function checkPasswordsMatch(input1, input2)
{
    if (input1.value !== input2.value) {
        showError(input1, 'Passwords do not match');
        showError(input2, 'You shall not pass');
    }
}

// Check  required fields
function checkRequired(inputArr)
{
    inputArr.forEach(function (input)
    {
        if (input.value.trim() === '') {
            showError(input, `${ getFieldName(input) } is required yo`);
        } else {
            showSuccess(input);
        }
    });
}
const getFieldName = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1);


//check input length
function checkLength(input, min, max)
{
    if (input.value.length < min) {
        showError(input, `${ getFieldName(input) } must be at least ${ min } chars`)
    } else if (input.value.length > max) {
        showError(input, `${ getFieldName(input) } must be less then ${ max } chars`);
    } else {
        showSuccess(input);
    }
}


//EVENT LISTENERS
form.addEventListener('submit', function (e)
{
    e.preventDefault();     //prevents from the form being submitted
    checkRequired([ username, email, password, password2 ])
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);

});




//        if (username.value === '') {
//            showError(username, 'Username is required yo');
//        } else {
//            showSuccess(username);
//        }
//        if (email.value === '') {
//            showError(email, 'Email is required yo');
//        } else if (!isValidEmail(email.value)) {
//            showError(email, 'Email is not valid');
//        } else {
//            showSuccess(email);
//        }
//        if (password.value === '') {
//            showError(password, 'Password is required yo');
//        } else {
//            showSuccess(password);
//        }
//        if (password2.value === '') {
//            showError(password2, 'Password authentication is required yo');
//        } else {
//            showSuccess(password2);
//        }