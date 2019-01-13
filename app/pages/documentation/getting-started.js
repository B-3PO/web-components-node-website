const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('getting-started', class extends HTMLElement {
  static get title() {
    return 'Getting started';
  }

  template() {
    return html`
      <style>
        @import 'assets/styles/page.css';
        @import 'http://localhost:3001/highlightjs/styles/monokai-sublime.css';
      </style>

      <render-block class="page-container">
        <div class="disclaimer-container">
          Disclaimer: This is a beta version
        </div>

        <article>
          <article class="into-article">
            <h2>Getting Started</h2>
            <p>
              This quick start guide will show you how to get a web-page built using <a href="https://expressjs.com/" target="new">Expressjs</a>
            </p>
          </article>

          <h6 style="padding-left:24px;">Quick links</h6>
          <ul>
            <li><anchor-link selector="#structure" offset="56px">Project structure</anchor-link></li>
            <li><anchor-link selector="#installation" offset="56px">Installation</anchor-link></li>
            <li><anchor-link selector="#create-our-fist-page" offset="56px">Create our fist page</anchor-link></li>
            <li><anchor-link selector="#create-page-layout" offset="56px">Create page layout</anchor-link></li>
            <li><anchor-link selector="#create-server" offset="56px">Create server</anchor-link></li>
            <li><anchor-link selector="#lets-run-it" offset="56px">Lets run it</anchor-link></li>
            <li><a href="/documentation/pages">Next: Building pages</a></li>
          </ul>

          <article class="sub-article" id="a-quick-note">
            <h4>A quick note</h4>
            <p>
              If you looking for a real world example, you can check out the repo for this website. The web-components-node documentation website is built using itself. <a href="https://github.com/B-3PO/web-components-node-website" target="new">GitHub Repo</a>
            </p>
          </article>

          <article class="sub-article" id="structure">
            <h4>Project structure</h4>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/693ecc3816584ca67c51e0ebdf0c7922"></gist-embed>
          </article>

          <article class="sub-article" id="installation">
            <h4>Installation</h4>
            <p>You can install web-components-node through NPM</p>
            <gist-embed hide-footer no-scroll height="18" src="https://gist.github.com/B-3PO/8dd67b76eded0e6ba1d59cf6f2eb857f"></gist-embed>

            <div class="spacer"></div>
            <h5>Install Expressjs</h5>
            <p>Erpess is not required, but we are using it to server our website in this example</p>
            <gist-embed hide-footer no-scroll height="18" src="https://gist.github.com/B-3PO/16406fd959ddfbe44d15dbd2f25a9dd2"></gist-embed>
          </article>

          <article class="sub-article" id="create-our-fist-page">
            <h4>Create our fist page</h4>

            <p class="direction">Create page file <b>app/pages/hello-world.js</b></p>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/63012115e116c113c5ecbb4974905771"></gist-embed>
          </article>

          <article class="sub-article" id="create-page-layout">
            <h4>Create page layout</h4>
            <p>We are simply using a function with a template string to produce a page layout</p>

            <p class="direction">Create layout file <b>app/layout.js</b></p>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/fe53ac85669c94f884460bd89c53a68a"></gist-embed>
          </article>

          <article class="sub-article" id="create-server">
            <h4>Create server</h4>
            <p>This is an express server</p>

            <p class="direction">Create server file <b>app/server.js</b></p>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/e09a08f1af20d9a8da9943e61b699e07"></gist-embed>
          </article>

          <article class="sub-article" id="lets-run-it">
            <h4>Lets run it</h4>
            <p>You no have a fully functional site!</p>
            <gist-embed hide-footer no-scroll height="18" src="https://gist.github.com/B-3PO/03757b8d9623fec75b54499a963209ee"></gist-embed>
            <div class="direction">Navigate to <a href="http://localhost:3001/hello-world">http://localhost:3001/hello-world</a></div>
          </article>

          <a class="button" href="/documentation/pages">Next: Building pages</a>
        </article>
      </render-block>
    `;
  }
});

module.exports = async () => page.build();
