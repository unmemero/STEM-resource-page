const firstName = document.getElementById('userFirstName');
const lastName = document.getElementById('userLastName');
const email = document.getElementById('userEmail');
const password = document.getElementById('userPassword');
const passwordConfirmation = document.getElementById('userPasswordConfirm');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(firstName.value,lastName.value,email.value,password.value,passwordConfirmation.value);
});

const passwordToggle = document.getElementById('password-toggle');
passwordToggle.addEventListener('click',(e) => {
    e.preventDefault();
    if(password.type == "password"){
        password.type = "text";
        password.innerHTML = "<span class=\"material-symbols-outlined\">visibility_off</span>";
    }else{
        password.type = "password";
        password.innerHTML = "<span class=\"material-symbols-outlined\">visibility</span>";
    }
});

const confirmToggle = document.getElementById('confirm-toggle');
confirmToggle.addEventListener("click",(e)=>{
    e.preventDefault();
    if(passwordConfirmation.type == "password"){
        passwordConfirmation.type = "text";
        passwordConfirmation.innerHTML = "<span class=\"material-symbols-outlined\">visibility_off</span>";
    }else{
        passwordConfirmation.type = "password";
        passwordConfirmation.innerHTML = "<span class=\"material-symbols-outlined\">visibility</span>";
    }
});