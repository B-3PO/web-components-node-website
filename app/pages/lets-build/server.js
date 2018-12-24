const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('build-server', class extends HTMLElement {
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
            <h2>Build a server</h2>
            <p>
              We are going to start off by building node + <a href="https://expressjs.com/" target="new">Expressjs</a> server. We will be setting up the main app and a routes file
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
            <h4>Setup and install</h4>
            <p>Lets get the app created!</p>
            <div class="direction">Install packages</div>
            <gist-embed hide-footer height="40" no-scroll src="https://gist.github.com/B-3PO/d0c9d84502c6a2bf9f8477a57b95d238"></gist-embed>
          </article>

          <article class="sub-article" id="a-quick-note">
            <h4>Create server file</h4>
            <p>Build main express app file</p>
            <div class="direction">Create server file <b>/server.js</b></div>
            <gist-embed hide-footer height="284" no-scroll src="https://gist.github.com/B-3PO/f0c8ab86789e591e0d5a147a055940c6"></gist-embed>
          </article>
        </article>
      </render-block>
    `;
  }
});


module.exports = async () => ({
  title: 'Build a server',
  body: page.build()
});
