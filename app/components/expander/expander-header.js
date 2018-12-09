const {
  customElements,
  HTMLElement
} = require('web-components-node');

customElements.define('expander-header', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = this.template();
  }

  connectedCallback() {
    this.parentNode.registerHeader(this);
  }

  registerArrow(arrow) {
    this.arrow = arrow;
  }

  open() {
    this.arrow.open();
  }

  close() {
    this.arrow.close();
  }

  template() {
    return html`
      <style>
        :host {
          flex-direction: row;
          box-sizing: border-box;
          display: flex;
          position: relative;
          cursor: pointer;
          min-height: 36px;
          min-width: 88px;
          vertical-align: middle;
          align-items: center;
          user-select: none;
          outline: none;
          border: 0;
          background: transparent;
          font-size: 1.5rem;
          overflow: hidden;
          transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);
          border-radius: 0;
          margin: 0;
          padding: 10px 15px;
          white-space: nowrap;
        }

        :host(:hover) {
          background-color: rgba(158,158,158,0.2);
        }

        ::slotted(.expander-label) {
          flex: 1;
          color: #b3b3b3;
          font-weight: 400;
        }

        ::slotted(.expander-label.active) {
          color: #b3b3b3;
          font-weight: 400;
        }
      </style>
      <slot></slot>
    `;
  }
});
