import tpl500 from './500.hbs';
import * as styles from './500.css';

export function page500() {
    const html = tpl500({styles});

    return html;
}