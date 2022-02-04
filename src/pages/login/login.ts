import loginTpl from './login.hbs';
import '../../components/button/index'
import '../../components/input/index'
import '../../components/form/index'
import * as styles from './login.css'

export function loginPage() {
    const html = loginTpl({styles});

    return html;
}