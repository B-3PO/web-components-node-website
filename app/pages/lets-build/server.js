const {
  Page,
  html,
  css
} = require('web-components-node');

const page = new class Server extends Page {
  get title() {
    return 'Server';
  }

  template() {
    return html`
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
          <li><anchor-link selector="#setup-install" offset="56px">Setup and install</anchor-link></li>
          <li><anchor-link selector="#create-server-file" offset="56px">Create server file</anchor-link></li>
          <li><a href="/lets-build/layout">Next: 3. Main layout</a></li>
        </ul>

        <article class="sub-article" id="setup-install">
          <h4>Setup and install</h4>
          <p>Lets get the app created!</p>
          <div class="direction">Install packages</div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/d0c9d84502c6a2bf9f8477a57b95d238"></gist-embed>
        </article>

        <article class="sub-article" id="create-server-file">
          <h4>Create server file</h4>
          <p>Build main express app file</p>
          <div class="direction">Create server file <b>/server.js</b></div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/f0c8ab86789e591e0d5a147a055940c6"></gist-embed>
        </article>

        <a class="button" href="/lets-build/layout">Next: Lets build - 2. Layout</a>
      </article>
    `;
  }
}

module.exports = async () => page.build();
