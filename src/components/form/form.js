import Handlebars from 'handlebars';
import form from './form.hbs';
import * as styles from './form.css';

Handlebars.registerPartial('form', (context, partials) => form({styles, context}, partials));