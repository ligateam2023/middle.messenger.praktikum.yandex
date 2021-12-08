import registerTpl from './register.hbs';
import './register.css';

export function registerPage() {
    const html = registerTpl();

    return html;
}