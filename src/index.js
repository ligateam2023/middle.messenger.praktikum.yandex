import template from './index.hbs';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = template({ firstname: 'John', lastname: 'Smith' });
});