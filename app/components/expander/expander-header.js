const {
  customElements,
  HTMLElementExtended,
  css,
  html
} = require('web-components-node');

customElements.define('expander-header', class extends HTMLElementExtended {
  constructor() {
    super();
    this.cloneTemplate();
  }

  connectedCallback() {
    this.parentNode.registerHeader(this);
  }

  registerArrow(arrow) {
    this.arrow = arrow;
  }

  open() {
    if (this.arrow) this.arrow.open();
  }

  close() {
    if (this.arrow) this.arrow.close();
  }

  html() {
    return html`
      <slot></slot>
    `;
  }

  externalCSS() {
    return css`
      expander-header {
        display: block;
        position: relative;
        cursor: pointer;
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
        white-space: nowrap;
        color: #b3b3b3;

        margin: 0;
        line-height: 18px;
        padding: 12px 24px;
      }

      expander-header .expander-label {
        color: #b3b3b3;
        font-weight: 400;
      }

      expander-header .expander-label.active {
        color: #b3b3b3;
        font-weight: 400;
      }
    `;
  }
});
