import mainPageTpl from './main.hbs';
import * as styles from './main.css';

export function mainPage() {
    const html = mainPageTpl({styles});

    return html;
}