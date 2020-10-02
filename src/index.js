import "./scss/main.scss";
import components from './js/components';

// Bind JS Components to DOM elements
components.forEach(Component => {
    if (document.querySelector(Component.selector) !== null) {
        document.querySelectorAll(Component.selector).forEach(el => new Component.jsClass(el, Component.options))
    }
})