const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('wrap-up', class extends HTMLElement {
  template() {
    return html`
      <style>
        @import 'assets/styles/page.css';
      </style>

      <render-block class="page-container">
        <div class="disclaimer-container">
          Disclaimer: This is a beta version
        </div>

        <article>
          <article class="into-article">
            <h2>You have completed the tutorial!</h2>
            <p></p>
          </article>
        </article>
      </render-block>
    `;
  }
});

module.exports = async () => ({
  title: 'Wrap up',
  body: page.build()
});
