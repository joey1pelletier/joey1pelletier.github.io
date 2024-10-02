const form = document.getElementById('my-form');
console.log(form);
function processForm(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    console.log('in processForm function!');
}
form.addEventListener('submit', processForm);

const firstNameInput = document.getElementById('first-name-input');
firstNameInput.addEventListener('change', () => {
    console.log(firstNameInput.value);
});

const favoriteColorInput = document.getElementById('fav-color-input');

function setPageBackgroundColor() {
    console.log(favoriteColorInput.value);
    const body = document.querySelector('body');
    body.style.backgroundColor = favoriteColorInput.value;

}

favoriteColorInput.addEventListener('input', setPageBackgroundColor);
console.log(1 === "1"); // false
console.log(1 == "1"); // true