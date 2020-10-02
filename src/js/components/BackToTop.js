import $ from 'jquery';

export default class BackToTop {
    constructor(el, options) {
        this.element = $(el);
        this.init()
    }
    init() {
        const id = this.element.attr('id')
        const triggerBtn = document.querySelector(`[data-scroll-element="${id}"]`);
        triggerBtn.addEventListener('click', () => {
            this.element.animate({ scrollTop: 0 }, 400);
        })
    }
}