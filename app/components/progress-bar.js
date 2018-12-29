const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

customElements.define('progress-bar', class extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.percent === null) this.classList.add('query')
  }

  static get observedAttributes() {
    return ['percent'];
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    this[name] = newValue;
  }

  get type() {
    return this.hasAttribute('type') ? this.getAttribute('type') : 'query';
  }

  get bar() {
    if (!this._bar) this._bar = this.shadowRoot.querySelector('.bar');
    return this._bar;
  }

  get percent() {
    return this.getAttribute('percent');
  }

  set percent(value) {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    this.bar.style.width = `${value}%`;
  }

  template() {
    return html`
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 6px;
          padding-top: 0;
          margin-bottom: 0;
          background-color: #d4e5ff;
        }

        .bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 6px;
          background-color: #7499cb;
        }

        :host(.query) .bar {
          transition: all 0.2s linear;
          animation: query .8s infinite cubic-bezier(0.390, 0.575, 0.565, 1.000);
        }

        @keyframes query {
          0% {
            opacity: 1;
            transform: translateX(35%) scale(.3, 1);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) scale(0, 1);
          }
        }
      </style>
      <div class="bar"></div>
    `;
  }
});
