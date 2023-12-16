const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const username2=loginForm.username2.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev" &&username2=="admin") {
        alert("You have successfully logged in.");
        window.location.assign("home");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})