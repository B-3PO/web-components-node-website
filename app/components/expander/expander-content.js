const {
  customElements,
  HTMLElementExtended,
  css,
  html
} = require('web-components-node');

customElements.define('expander-content', class extends HTMLElementExtended {
  constructor() {
    super();
    if (this.hasAttribute('height')) this.height = this.getAttribute('height').replace('px', '');
    this.cloneTemplate();
  }

  connectedCallback() {
    this.transitionEventName = this.getTransitionEventName();
    this.parentNode.registerContent(this);
  }

  static get observedAttributes() {
    return ['height'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  get height() {
    return this._height || this.scrollHeight;
  }

  set height(value) {
    this._height = value;
  }

  open() {
    this.style.display= 'block';
    this.classList.add('show');
    this.style.maxHeight = `${this.height}px`;
    this.style.opacity = 1;
  }

  close() {
    this.classList.remove('show');
    this.style.maxHeight = 0;
    this.style.opacity = 0;
    this.onHideComplete();
  }

  onHideComplete() {
    const self = this;
    self.addEventListener(self.transitionEventName, function handler() {
      self.style.display= 'none';
      self.removeEventListener(self.transitionEventName, handler);
    });
  }

  getTransitionEventName() {
    const el = document.createElement('fakeelement');
    const transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (let t in transitions){
      if (el.style[t] !== undefined) return transitions[t];
    }
  }

  css() {
    return css`
      :host {
        display: block;
        overflow: hidden;
        opacity: 0;
        max-height: 0;
        transition: max-height 0.12s cubic-bezier(0.25, 0.8, 0.25, 1),
                    opacity 0.12s cubic-bezier(0.25, 0.8, 0.25, 1);
      }

      :host(.show) {
        display: block;
      }
    `;
  }

  html() {
    return html`
      <slot></slot>
    `;
  }

  externalCSS() {
    return css`
      expander-content {
        display: none;
      }
    `;
  }
});
