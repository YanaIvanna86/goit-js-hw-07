const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value.trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
    }
    const info = {
        email,
        password,
    };
    console.log(info);
    event.currentTarget.reset()
 }



