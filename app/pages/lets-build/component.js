const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('components-page', class extends HTMLElement {
  static get title() {
    return 'Component';
  }

  connectedCallback() {
    const percentProgressBar = this.shadowRoot.querySelector('#percent-progress-bar');
    let percent = 0;
    const interval = setInterval(() => {
      percent += 0.1;
      percentProgressBar.setAttribute('percent', percent);
      if (percent === 100) clearInterval(interval);
    }, 1);
  }

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
            <h2>Add a component</h2>
            <p>

            </p>
          </article>

          <h6 style="padding-left:24px;">Quick links</h6>
          <ul>
            <li><anchor-link selector="#service" offset="56px">Add service</anchor-link></li>
            <li><anchor-link selector="#route" offset="56px">Add states route</anchor-link></li>
            <li><anchor-link selector="#page" offset="56px">Build interactive page</anchor-link></li>
            <li><a href="/lets-build/warp-up">Next: Wrap up</a></li>
          </ul>

          <article class="sub-article" id="service">
            <h4>Build a component</h4>
            <p>We will be building the progress barr you see below</p>
            <progress-bar></progress-bar>
            <progress-bar id="percent-progress-bar" percent="0"></progress-bar>
            <div class="direction">
              create file: <b>progress-bar.js</b><br />
              Require <b>progress-bar.js</b> in the <b>server.js</b> file.
            </div>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/c262c72caf018bd56bce300481074cd6"></gist-embed>
          </article>

          <article class="sub-article" id="service">
            <h4>Add progress bar to page</h4>
            <p>Lets add the progress bar to the hello world page</p>
            <div class="direction">update file: <b>hello-world.js</b></div>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/c6299f37c9c0a2106d29f4406a5af17f"></gist-embed>
          </article>

          <a class="button" href="/lets-build/warp-up">Next: Lets build - Wrap up</a>
        </article>
      </render-block>
    `;
  }
});

module.exports = async () => page.build();
