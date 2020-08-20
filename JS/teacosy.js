function signUp(){
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");

    if (name.length > 0 && email.length > 0){
        alert(`Thank you ${name}, we'll be in touch.`);
    } else {
        alert (`Thank you, hope you enjoy your tea time with us 😘`);
    }
}
let signUpButton = document.querySelector("button");
signUpButton.addEventListener("click", signUp);