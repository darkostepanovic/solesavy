import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

export default class Drawer {
    constructor(element, options) {
        this.element = element;
        this.init();
    }
    init() {
        const drawerId = this.element.id;
        const triggerBtn = document.querySelector(`[data-trigger-drawer="${drawerId}"]`);
        const closeDrawer = document.querySelectorAll('.js-close-drawer');
        triggerBtn.addEventListener('click', () => {
            this.openDrawer();
            disableBodyScroll(this.element)
        });
        closeDrawer.forEach(closeEl => {
            closeEl.addEventListener('click', () => {
                this.closeDrawer();
                enableBodyScroll(this.element)
            });
        })
    }
    openDrawer() {
        this.element.classList.add('is-on')
    }
    closeDrawer() {
        this.element.classList.remove('is-on')
    }
}