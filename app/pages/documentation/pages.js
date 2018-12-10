const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('advanced-pages', class extends HTMLElement {
  template() {
    return html`
      <style>
        @import 'assets/styles/page.css';
      </style>

      <div id="content" class="center-container">
        <div class="disclaimer-container">
          Disclaimer: This is a beta version
        </div>

        <article>
          <article class="into-article">
            <h2>Advanced pages</h2>
            <p>
              
            </p>
          </article>

          <article class="sub-article">
            <h4>Create Page Layout</h4>
            <p>Create a template for the webpage layout</p>

            <p class="direction">Create layout file <b>app/layout.js</b></p>
            <p>This is the code for the layout. Please copy it into the file</p>
            <gist-embed hide-footer height="370" src="https://gist.github.com/B-3PO/fe53ac85669c94f884460bd89c53a68a"></gist-embed>
          </article>

          <a class="button" href="/pages">Next: Advanced Pages</a>
        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Advanced pages',
  body: page.build()
});
