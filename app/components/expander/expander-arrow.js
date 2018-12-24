const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

customElements.define('expander-arrow', class extends HTMLElement {
  connectedCallback() {
    this.parentNode.registerArrow(this);
  }

  open() {
    this.classList.add('open');
  }

  close() {
    this.classList.remove('open');
  }

  template() {
    return html`
      <style>
        :host(:first-child) {
          margin: auto 0;
          margin-right: 18px;
        }

        :host(:last-child) {
          margin-right: 0;
        }

        i {
          border: solid #b3b3b3;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(-135deg);
          -webkit-transform: rotate(-135deg);
          transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        :host(.open) i {
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
        }
      </style>

      <i></i>
    `;
  }
})
