import registerTpl from './register.hbs';
import styles from './register.css';

export function registerPage() {
    const html = registerTpl({styles: styles});

    return html;
}