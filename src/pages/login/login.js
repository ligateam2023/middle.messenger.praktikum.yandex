//import Handlebars from 'handlebars';
import loginTpl from './login.hbs';
import './login.css';

export function loginPage() {
    const html = loginTpl();

    return html;
}