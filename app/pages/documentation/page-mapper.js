const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('page-mapper', class extends HTMLElement {
  template() {
    return html`
      <style>
        @import 'assets/styles/page.css';

        .indent-1 {
          padding-left: 20px;
        }

        .indent-2 {
          padding-left: 30px;
        }
      </style>

      <div id="content" class="center-container">
        <div class="disclaimer-container">
          Disclaimer: This is a beta version
        </div>

        <article>
          <article class="into-article">
            <h2>Page mapper</h2>
            <p>
            Page mapper is a module that helps with page routing. It can automatically load and route pages under a folder. You can slo set the default root page and a 404 page.
            </p>
          </article>

          <article class="sub-article">
            <h4>Using with Express</h4>
            <div class="spacer"></div>
            <h6>Application Folder structure</h6>
            <p class="direction">
              package.json<br />
              pages <b>/</b><br />
              <span class="indent-1">home.js</span><br />
              <span class="indent-1">404.js</span><br />
              <span class="indent-1">nested <b>/</b></span><br />
              <span class="indent-2">one.js</span>
            </p>

            <div class="spacer"></div>
            <h6>Page routes</h6>
            <p class="direction">
              <b>/</b> <i>this will redirect to home</i><br />
              <b>/home</b><br />
              <b>/nested/one</b><br />
              <b>/404</b><br />
              <b>/none-existing-page</b> <i>this will redirect to 404</i>
            </p>
            <gist-embed hide-footer height="702" no-scroll src="https://gist.github.com/B-3PO/c563dd945d72833b807c2e018f8daa63"></gist-embed>
          </article>

          <!-- <a class="button" href="/documentation/page-mapper">Next: Page Mapper</a> -->
        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Page mapper',
  body: page.build()
});
