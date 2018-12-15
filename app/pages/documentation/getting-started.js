const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('getting-started', class extends HTMLElement {
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
            <h2>Getting Started</h2>
            <p>
              This quick start guide will show you how to get a web-page built using <a href="https://expressjs.com/" target="new">Expressjs</a>
            </p>
          </article>

          <h6 style="padding-left:24px;">Quick links</h6>
          <ul>
            <li><anchor-link selector="#installation" offset="56px">Installation</anchor-link></li>
            <li><anchor-link selector="#create-our-fist-page" offset="56px">Create our fist page</anchor-link></li>
            <li><anchor-link selector="#create-page-layout" offset="56px">Create page layout</anchor-link></li>
            <li><anchor-link selector="#create-server" offset="56px">Create server</anchor-link></li>
            <li><anchor-link selector="#lets-run-it" offset="56px">Lets run it</anchor-link></li>
          </ul>

          <article class="sub-article" id="a-quick-note">
            <h4>A quick note</h4>
            <p>
              If you looking for a real world example, you can check out the repo for this website. The web-components-node documentation website is built using itself. <a href="https://github.com/B-3PO/web-components-node-website" target="new">GitHub Repo</a>
            </p>
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
            <p>
              we are going to create our first page. In the next step we will create the page layout and routes to serve this page.
            </p>

            <p class="direction">Create page file <b>app/pages/hello-world.js</b></p>
            <p>This is the code for the first page. Please copy it into the file</p>
            <gist-embed hide-footer no-scroll height="500" src="https://gist.github.com/B-3PO/63012115e116c113c5ecbb4974905771"></gist-embed>
          </article>

          <article class="sub-article" id="create-page-layout">
            <h4>Create page layout</h4>
            <p>Create a template for the webpage layout</p>

            <p class="direction">Create layout file <b>app/layout.js</b></p>
            <p>This is the code for the layout. Please copy it into the file</p>
            <gist-embed hide-footer no-scroll height="370" src="https://gist.github.com/B-3PO/fe53ac85669c94f884460bd89c53a68a"></gist-embed>
          </article>

          <article class="sub-article" id="create-server">
            <h4>Create server</h4>
            <p>Create express server with page router</p>

            <p class="direction">Create server file <b>app/server.js</b></p>
            <p>This is the code for the server. Please copy it into the file</p>
            <gist-embed hide-footer no-scroll height="330" src="https://gist.github.com/B-3PO/e09a08f1af20d9a8da9943e61b699e07"></gist-embed>
          </article>

          <article class="sub-article" id="lets-run-it">
            <h4>Lets run it!</h4>
            <p>We can now run this code. In the next steps we will create pages with different features</p>
            <gist-embed hide-footer no-scroll height="18" src="https://gist.github.com/B-3PO/03757b8d9623fec75b54499a963209ee"></gist-embed>
            <div class="direction">Navigate to <a href="http://localhost:3001/hello-world">http://localhost:3001/hello-world</a></div>
          </article>

          <a class="button" href="/documentation/pages">Next: Advanced Pages</a>
        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Getting started',
  body: page.build()
});
