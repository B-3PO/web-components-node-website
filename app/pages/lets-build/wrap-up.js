const {
  Page,
  html,
  css
} = require('web-components-node');

const page = new class WrapUp extends Page {
  get title() {
    return 'Wrap up';
  }

  html() {
    return html`
      <div class="disclaimer-container">
        Disclaimer: This is a beta version
      </div>

      <article>
        <article class="into-article">
          <h2>You have completed the tutorial!</h2>
          <p></p>
        </article>
      </article>
    `;
  }
}

module.exports = async () => page.build();
