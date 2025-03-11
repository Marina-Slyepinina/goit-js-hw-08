const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    
    if (email.trim() === "" || password.trim() === "") {
        alert ("All form fields must be filled in");
    }

    const userInfo = {
        "email": email,
        "password": password,
    }

    console.log(userInfo);
    form.reset();
}