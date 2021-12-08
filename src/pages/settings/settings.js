//import Handlebars from 'handlebars';
import settingsTpl from './settings.hbs';
import './settings.css';
import imgBack from '../../../static/images/back.svg';
import imgAvatar from '../../../static/images/noimage.svg';

export function settingsPage() {
    const html = settingsTpl({ imgBack: imgBack, imgAvatar: imgAvatar });

    return html;
}