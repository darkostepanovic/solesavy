export default class Toggle {
    constructor(element, options) {
        this.element = element;
        this.init()
    }
    init() {
        this.element.addEventListener('click', () => {
            this.element.classList.toggle('is-on');
        })
    }
}