const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('introduction-page', class extends HTMLElement {
  static get title() {
    return 'Introduction';
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
            <h3>Introduction</h3>
            <p>This projects uses web components. If you are not familiar with the web-component specs then I would suggest reading them first. <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Link</a></p>

            <h5>What</h5>
            <p><b>web-components-node</b> is a set of tools to allow web pages to be built using web components. The tools add some great features including server-side rendering, dynamic client side rendering, performance (using native browser features), optimizations that reduces load times, managed client side caching, pwa compatability, and more.</p>

            <h5>Why</h5>
            <p>Browsers, javascript, css, and html are evolving in a uniform and predictable pace. Many features that are provided by frameworks(react, angular, vue, jquery) are now available in native forms in the browser. It is time to start looking at building web sites and applications the way we used to, nativly and with out loads of dependencies. With web-components spec becoming V1 we now have one of the last major features that frameworks provide in a native form (custom html with code associated to it). In short lets learn / return to javascript, css, and html at its core</p>

            <h5>Goals</h5>
            <img src="assets/images/goals-performance.png" alt="" width=100% style="padding-top:24px; padding-bottom: 32px;" />
            <div class="row">
              <div class="flex column-article">
                <h6>Perform</h6>
                <p>
                  Decrease load times. Increase developer productivity. Interact with native browsers features
                </p>
              </div>

              <div class="flex column-article">
                <h6>Simplify</h6>
                <p>
                  Simplify code and use js, html, css at its core
                </p>
              </div>

              <div class="flex column-article">
                <h6>Reduce Reduce Reduce</h6>
                <p>
                  Reduce the number of dependencies needed to create a web application
                </p>
              </div>
            </div>
          </article>

        </article>
      </render-block>
    `;
  }
});

module.exports = async () => page.build();
