import './pages/login/index.js';
import './pages/main/index.js';
import './pages/register/index.js';
import './pages/settings/index.js';
import {loginPage} from './pages/login/login';
import {mainPage} from './pages/main/main';
import {registerPage} from './pages/register/register';
import {settingsPage} from './pages/settings/settings';

document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        login: loginPage,
        main: mainPage,
        register: registerPage,
        settings: settingsPage
    }
    function render(name) {
        document.body.innerHTML = pages[name]();

        const buttons = document.body.querySelectorAll('[data-link]');

        Array.from(buttons).forEach(button => {
            button.addEventListener('click', () => {
                render(button.dataset.link);
            });
        })
    }
    render('login');

});
