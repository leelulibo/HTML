const form = document.getElementById('form');
const Name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const date = document.getElementById('date');
const time = document.getElementById('time');
const length = document.getElementById('ubude');
const type = document.getElementById('ubunjani');

form.addEventListener('submit',  e =>{
    e.preventDefault();
    validateInput();
});

const setError =(Element, message) => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = Element => {
    const inputControl = Element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () =>{
    const nameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const surnameValue = surname.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();

    if(nameValue === ''){
        setError(Name, 'Firstname is required');
    } else {
        setSuccess(Name);
    }

    if (surnameValue === ''){
        setError(surname, 'Lastname is required');
    } else {
        setSuccess(surname);
    }

    if (emailValue === ''){
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (dateValue === ''){
        setError(date, 'Input date');
    } else {
        setSuccess(date);
    }

    if (timeValue === ''){
        setError(time, 'Input time');
    } else {
        setSuccess(time);
    }
}
