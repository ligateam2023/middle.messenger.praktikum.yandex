import settingsTpl from './settings.hbs';
import styles from './settings.css';
import imgBack from '../../../static/images/back.svg';
import imgAvatar from '../../../static/images/noimage.svg';

export function settingsPage() {
    const html = settingsTpl({styles, imgBack, imgAvatar});

    return html;
}