import Handlebars from 'handlebars';
import input from './input.hbs';
import './input.css';

Handlebars.registerPartial('input', (context) => input(context));