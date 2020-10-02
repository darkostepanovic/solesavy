import "./scss/main.scss";

import Toggle from "./js/components/Toggle";

const components = [
    {
        selector: '.js-toggle',
        jsClass: Toggle
    }
];

components.forEach(Component => {
    if (document.querySelector(Component.selector) !== null) {
        document.querySelectorAll(Component.selector).forEach(el => new Component.jsClass(el, Component.options))
    }
})