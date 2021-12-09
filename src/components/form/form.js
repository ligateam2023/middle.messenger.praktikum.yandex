import Handlebars from 'handlebars';
import form from './form.hbs';
import styles from './form.css';

Handlebars.registerPartial('form', (context, partials) => form({styles: styles, context}, partials));