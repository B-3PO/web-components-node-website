const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('build-page', class extends HTMLElement {
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
            <h2>Add a simple page</h2>
            <p>
              We will now add our first page. This will be a simple server-side renderd page with no functionality
            </p>
          </article>

          <h6 style="padding-left:24px;">Quick links</h6>
          <ul>
            <li><anchor-link selector="#page" offset="56px">Build simple page</anchor-link></li>
            <li><a href="/lets-build/interactive-page">Next: 4. build an interactive page</a></li>
          </ul>

          <article class="sub-article" id="page">
            <h4>Build simple page</h4>
            <p>Its time to say "hello world"</p>
            <div class="direction">create file: <b>hello-world.js</b></div>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/14da54e322380020997358d9259938a9"></gist-embed>
          </article>

          <a class="button" href="/lets-build/interactive-page">Next: Lets build - 4. Interactive page</a>
        </article>
      </render-block>
    `;
  }
});


module.exports = async () => ({
  title: 'Simple page',
  body: page.build()
});
