import tpl404 from './404.hbs';
import * as styles from './404.css';

export function page404() {
    const html = tpl404({styles});

    return html;
}