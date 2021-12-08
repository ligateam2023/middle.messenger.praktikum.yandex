import tpl404 from './404.hbs';
import './404.css';

export function page404() {
    const html = tpl404();

    return html;
}