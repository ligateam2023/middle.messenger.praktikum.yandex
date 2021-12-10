import Handlebars from 'handlebars';
import input from './input.hbs';
import styles from './input.css';

Handlebars.registerPartial('input', (context) => input({styles: styles, context}));