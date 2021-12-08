import mainPageTpl from './main.hbs';
import './main.css';

export function mainPage() {
    const html = mainPageTpl();

    return html;
}