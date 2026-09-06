const title = document.getElementById("title");
const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const message = document.getElementById("message");

title.textContent = "User Registration Form";
title.style.color = "blue";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    message.innerHTML = `
        <strong>Hello ${name}!</strong><br>
        Your email is ${email}.
    `;

    message.classList.add("success");
    message.style.marginTop = "20px";
});