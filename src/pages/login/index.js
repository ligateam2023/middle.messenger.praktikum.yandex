import {loginPage} from './login.js';
import {mainPage} from "../main/main.js";
import {registerPage} from "../register/register.js";

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = loginPage();

    const authButtonSelector = document.querySelector('.login-form_auth-button');
    const regButtonSelector = document.querySelector('.login-form_reg-link');

    authButtonSelector.addEventListener('click', () => {
        document.body.innerHTML = mainPage();
    });
    regButtonSelector.addEventListener('click', () => {
        document.body.innerHTML = registerPage();
        const authButtonSelector = document.querySelector('.signin-form_auth-link');
        const regButtonSelector = document.querySelector('.signin-form_reg-button');

        regButtonSelector.addEventListener('click', () => {
            document.body.innerHTML = mainPage();
        });
        authButtonSelector.addEventListener('click', () => {
            document.body.innerHTML = loginPage();
        });
    });
});