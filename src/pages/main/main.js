import mainPageTpl from './main.hbs';
import styles from './main.css';

export function mainPage() {
    const html = mainPageTpl({styles});

    return html;
}