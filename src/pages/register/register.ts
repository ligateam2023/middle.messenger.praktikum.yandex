import registerTpl from './register.hbs';
import * as styles from './register.css';

export function registerPage() {
    const html = registerTpl({styles});

    return html;
}