import template from './index.hbs';
import './pages/login/index.js'
import {loginPage} from './pages/login/login.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = loginPage();
});