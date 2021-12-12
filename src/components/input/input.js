import Handlebars from 'handlebars';
import input from './input.hbs';
import * as styles from './input.css';

Handlebars.registerPartial('input', (context) => input({styles, context}));