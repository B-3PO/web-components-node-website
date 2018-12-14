const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('building-pages', class extends HTMLElement {
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
            <h2>Building pages</h2>
            <p>
            Below are a list of examples showing you how to build pages witha range of features, including server-side rendering and dynamic html
            </p>
          </article>

          <article class="sub-article">
            <h4>Basic page</h4>
            <p>Basic page that uses server-side rendering</p>
            <gist-embed hide-footer height="480" no-scroll src="https://gist.github.com/B-3PO/9cfe4b0bfbab4f386cb1158999719dda"></gist-embed>
          </article>

          <article class="sub-article">
            <h4>Interactive page</h4>
            <p>Interactive page that initially renders server-side and then rerenders on the client once the client loads the required data. The page also re-renders when the drop downs are updated</p>
            <gist-embed hide-footer height="1626" no-scroll src="https://gist.github.com/B-3PO/00a0674ad885506c5f87df580be642b5"></gist-embed>
          </article>

          <a class="button" href="/documentation/page-mapper">Next: Page Mapper</a>
        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Building pages',
  body: page.build()
});