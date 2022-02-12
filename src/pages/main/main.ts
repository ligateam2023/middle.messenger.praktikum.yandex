import mainPageTpl from './main.hbs';
import * as styles from './main.css';
import imgAvatar from '../../../static/images/avatar.svg';
import imgDots from '../../../static/images/dots.svg';
import imgExample from '../../../static/images/example.png';
import imgAttach from '../../../static/images/attach.svg';
import imgSend from '../../../static/images/send_arrow.svg';

export function mainPage() {
    const html = mainPageTpl({styles, imgAvatar, imgDots, imgExample, imgAttach, imgSend});

    return html;
}