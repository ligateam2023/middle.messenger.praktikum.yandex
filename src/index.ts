import {loginPage} from './pages/login/login';
import {mainPage} from './pages/main/main';
import {registerPage} from './pages/register/register';
import {settingsPage} from './pages/settings/settings';
import {page404} from "./pages/error/404";
import {page500} from "./pages/error/500";

document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        login: loginPage,
        main: mainPage,
        register: registerPage,
        settings: settingsPage,
        404: page404,
        500: page500
    }
    function render(name) {
        document.body.innerHTML = pages[name]();

        const buttons = document.body.querySelectorAll('[data-link]');

        Array.from(buttons).forEach((button: HTMLButtonElement) => {
            button.addEventListener('click', () => {
                render(button.dataset.link);
            });
        })
    }
    render('login');

});
