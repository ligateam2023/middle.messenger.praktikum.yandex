import Handlebars from 'handlebars';
import button from './button.hbs';
import './button.css';

Handlebars.registerPartial('button', (context) => button(context));