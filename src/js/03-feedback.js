import throttle from 'lodash.throttle';

const input = document.querySelector('input[name="email"]');
const text = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button[type="submit"]');
const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const updateInput = () => {
  try {
    input.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).email;
    text.value = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)).message;
  } catch {
    console.log('Please enter your data!!!');
  }
};

const localFeedback = () => {
  let feedback = {
    email: `${input.value}`,
    message: `${text.value}`,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
};

const submitFeedback = event => {
  if (input.value !== '') {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  } else {
    event.preventDefault();
    console.log('Missing data, try again!');
  }
};

updateInput();
input.addEventListener('input', throttle(localFeedback, 500));
text.addEventListener('input', throttle(localFeedback, 500));
button.addEventListener('click', submitFeedback);