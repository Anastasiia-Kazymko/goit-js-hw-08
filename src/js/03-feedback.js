import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    emailEl: document.querySelector('input'),
    messageEl: document.querySelector('textarea')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
};

function populateTextarea() {
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedFormData.email) {
        refs.emailEl.value = savedFormData.email;       
        formData.email = savedFormData.email;      
        }
    if (savedFormData.message) {        
        refs.messageEl.value = savedFormData.message;        
        formData.message = savedFormData.message;
        
    }
};