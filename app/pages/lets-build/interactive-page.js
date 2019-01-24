const {
  Page,
  html,
  css
} = require('web-components-node');

const page = new class InteractivePage extends Page {
  get title() {
    return 'Interactive page';
  }

  html() {
    return html`
      <div class="disclaimer-container">
        Disclaimer: This is a beta version
      </div>

      <article>
        <article class="into-article">
          <h2>Add a interactive page</h2>
          <p>
            This page will contain functionality. We will send it down tot the cleint pr-rendered and then the client will re-render when the user interacts with the page.
          </p>
        </article>

        <h6 style="padding-left:24px;">Quick links</h6>
        <ul>
          <li><anchor-link selector="#service" offset="56px">Add service</anchor-link></li>
          <li><anchor-link selector="#route" offset="56px">Add states route</anchor-link></li>
          <li><anchor-link selector="#page" offset="56px">Build interactive page</anchor-link></li>
          <li><a href="/lets-build/component">Next: 5. build a component</a></li>
        </ul>

        <article class="sub-article" id="service">
          <h4>Add service</h4>
          <p>We will add a simple service to provide a small list of states and cities</p>
          <div class="direction">create file: <b>service.js</b></div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/f5137683c43f76377136301f1921f7cb"></gist-embed>
        </article>

        <article class="sub-article" id="route">
          <h4>Add states endpoint</h4>
          <p>We will add a simple endpoint to the server.js file and provide a small hard coded list of states with cities.</p>
          <div class="direction">
            open file: <b>server.js<b><br />
            Insert new endpoint before page router on line <a href="https://gist.github.com/B-3PO/f0c8ab86789e591e0d5a147a055940c6#file-web-components-node-create-server-js-L19">19</a>
          </div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/e11349108b974e118572673578c15f12"></gist-embed>
        </article>

        <article class="sub-article" id="page">
          <h4>Build interactive page</h4>
          <p>Lets get interactive!</p>
          <div class="direction">create file: <b>state-city-page.js</b></div>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/7065796eb749b894ae402fe3616d6177"></gist-embed>
        </article>

        <a class="button" href="/lets-build/component">Next: Lets build - 5. Component</a>
      </article>
    `;
  }
}

module.exports = async () => page.build();
