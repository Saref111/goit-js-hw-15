const formElement = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const inputs = Array.from(formElement.querySelectorAll('input'));

    if (inputs.some((input) => input.value === '')) {
        alert('Всі поля повинні бути заповнені.');
        return;
    };

    const formData = new FormData(event.currentTarget);
    formElement.reset();
    formData.forEach((value, name) => {
        console.log({ name, value });
    });
};

formElement.addEventListener('submit', onFormSubmit);
