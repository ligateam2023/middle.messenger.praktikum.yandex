import Handlebars from 'handlebars';
import button from './button.hbs';
import * as styles from './button.css';

Handlebars.registerPartial('button', (context) => button({context, styles}));