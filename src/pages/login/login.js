import loginTpl from './login.hbs';
import '../../components/button/index.js'
import '../../components/input/index.js'
import '../../components/form/index.js'
import styles from './login.css'

export function loginPage() {
    const html = loginTpl({styles});

    return html;
}