const shopProduct = document.querySelector('.shop-product');
const buyBtn = document.querySelector('.shop-product-buy');
const buyForm = document.querySelector('.buy-form');
const formFields = document.querySelectorAll('.form-field');
const order = document.querySelector('.order');
const orderContent = document.querySelector('.order-content');
const formSubmitBtn = document.querySelector('.form-submit-btn');

buyBtn.addEventListener('click', () => {
	buyForm.classList.add('show');
});

const userNameInput = document.querySelector('.user-name-check');
const userCityInput = document.querySelector('.user-phone-check');
const userPostInput = document.querySelector('.user-email-check');
const userNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
const userPhoneRegex = /^\+?[0-9()-]{10,13}$/;
const userEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let nameIsValid = false;
let phoneIsValid = false;
let emailIsValid = false;

function validateField(event, regex, errorClass) {
	const isValid = regex.test(event.target.value);
	const errorElement = document.querySelector(errorClass);

	if (isValid) {
		errorElement.style.display = 'none';
	} else {
		errorElement.style.display = 'block';
	}

	return isValid;
}

userNameInput.addEventListener('input', (event) => {
	nameIsValid = validateField(
		event,
		userNameRegex,
		'.name-error-text',
		nameIsValid
	);
	checkFormValidity();
});

userCityInput.addEventListener('input', (event) => {
	phoneIsValid = validateField(
		event,
		userPhoneRegex,
		'.phone-error-text',
		phoneIsValid
	);
	checkFormValidity();
});

userPostInput.addEventListener('input', (event) => {
	emailIsValid = validateField(
		event,
		userEmailRegex,
		'.email-error-text',
		emailIsValid
	);
	checkFormValidity();
});

function checkFormValidity() {
	if (nameIsValid && phoneIsValid && emailIsValid) {
		formSubmitBtn.classList.remove('disable');
	} else {
		formSubmitBtn.classList.add('disable');
	}
}

buyForm.addEventListener('submit', function (event) {
	event.preventDefault();
	shopProduct.classList.add('hide');
	buyForm.classList.remove('show');
	order.classList.add('show');
	const formData = new FormData(this);
	const formObject = {};

	formData.forEach((value, key) => {
		formObject[key] = value;
	});

	const orderName = document.createElement('div');
	const orderPhone = document.createElement('div');
	const orderEmail = document.createElement('div');

	orderName.textContent = `Ваше ім'я: ${formObject.username}`;
	orderPhone.textContent = `Ваш телефон: ${formObject.phone}`;
	orderEmail.textContent = `Ваш email: ${formObject.email}`;

	[orderName, orderPhone, orderEmail].forEach((element) => {
		orderContent.appendChild(element);
	});
});
