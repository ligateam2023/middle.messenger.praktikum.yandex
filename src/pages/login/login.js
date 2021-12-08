import loginTpl from './login.hbs';
import './login.css';
import '../../components/button/index.js'
import '../../components/input/index.js'
import '../../components/form/index.js'

export function loginPage() {
    const html = loginTpl();

    return html;
}