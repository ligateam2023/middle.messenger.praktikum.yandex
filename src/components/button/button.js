import Handlebars from 'handlebars';
import button from './button.hbs';
import styles from './button.css';

Handlebars.registerPartial('button', (context) => button({context, styles}));