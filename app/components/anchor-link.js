const {
  customElements,
  HTMLElement
} = require('web-components-node');

customElements.define('anchor-link', class extends HTMLElement {
  constructor() {
    super();
    this.style.cssText = `
      display: inline-block;
      font-size: 1.6rem;
      font-weight: lighter;
      color: #7499cb;
      cursor: pointer;
    `;
    this.addEventListener('click', this.click.bind(this));
    this.addEventListener('mouseover', () => this.style.background = 'aliceblue');
    this.addEventListener('mouseout', () => this.style.background = 'none');
  }

  click() {
    let anchor = this.getAnchor();
    let scrollElement = this.getScrollElement();
    let count = anchor.offsetTop - scrollElement.scrollTop - this.offset;
    console.log(scrollElement.getBoundingClientRect())
    scrollElement.scrollBy({
      top: count,
      left: 0,
      behavior: 'smooth'
    });
  }

  get selector() {
    return this.getAttribute('selector');
  }

  get offset() {
    return (this.getAttribute('offset') || '0').replace('px', '');
  }

  getAnchor() {
    let p = this;
    while (p = p.parentNode) {
      if (p.nodeType === 11 || p.nodeType === 9) {
        return p.querySelector(this.selector);
      }
    }
  }

  getScrollElement() {
    let parent = this.parentNode;
    while (parent !== undefined && this.hasComputedStyleValue('overflowY', parent) === false) {
      if (parent.nodeType === 9) parent = undefined;
      else parent = parent.parentNode || parent.host;
    }
    return parent;
  }

  hasComputedStyleValue(key, target) {
    if (!target || target.nodeType !== 1) return false;
    let computedStyles = window.getComputedStyle(target);
    return typeof computedStyles[key] !== 'undefined' && (computedStyles[key] == 'scroll' || computedStyles[key] == 'auto');
  }
});
