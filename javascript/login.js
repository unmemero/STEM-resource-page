const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const submitButton = document.getElementById("submitButton");
const emailText = emailInput.value;
const passwordText = passwordInput.value;
const passwordToggle = document.getElementById("password-toggle");

emailInput.addEventListener("mouseover", ()=> {
    emailInput.focus();
});

passwordInput.addEventListener("mouseover", ()=> {
    passwordInput.focus();
});

passwordToggle.addEventListener("click", (e)=>{
    e.preventDefault();
    if(passwordInput.type=="password"){
        passwordInput.type="text"
        passwordToggle.innerHTML = "<span class=\"material-symbols-outlined\">visibility_off</span>";
    }
    else{ 
        passwordInput.type="password";
        passwordToggle.innerHTML = "<span class=\"material-symbols-outlined\">visibility</span>";
    }
});