import Handlebars from 'handlebars';
import form from './form.hbs';
import './form.css'

Handlebars.registerPartial('form', form); //(context) => form({context})