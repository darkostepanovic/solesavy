export default class ScrollToggle {
    constructor(el, options) {
        this.element = el;
        this.init()
    }
    init() {
        this.element.addEventListener('scroll', () => {
            this.element.scrollTop > 0 ? this.element.classList.add('scrolled') : this.element.classList.remove('scrolled')
        })
    }
}