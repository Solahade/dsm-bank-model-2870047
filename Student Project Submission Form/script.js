// script.js
function validateForm(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    
    if (email !== confirmEmail) {
        alert('Email addresses do not}