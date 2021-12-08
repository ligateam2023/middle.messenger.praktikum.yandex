import Handlebars from 'handlebars';
import button from './button.hbs';

//Handlebars.registerPartial('button', button);
Handlebars.registerPartial('button', (context) => button({context}));
