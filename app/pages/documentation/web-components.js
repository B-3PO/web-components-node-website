const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('web-components', class extends HTMLElement {
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
            <h2>Web components</h2>
            <p>
              Below you can see how to build and package web components with your pages.
            </p>
          </article>

          <h6 style="padding-left:24px;">Quick links</h6>
          <ul>
            <li><anchor-link selector="#include-web-components" offset="56px">Include web components</anchor-link></li>
            <li><anchor-link selector="#standard-web-components" offset="56px">Standard web component</anchor-link></li>
            <li><anchor-link selector="#web-component-with-render" offset="56px">Web component with render</anchor-link></li>
          </ul>

          <article class="sub-article" id="include-web-components">
            <h4>Include web components</h4>
            <p>You can use the file handlers to include your components</p>
            <div class="direction">Include file handler in server</div>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/95585aae083dd3c6a7ef9c114d1a423c"></gist-embed>
            <div class="direction">include styles, scripts, and components in html head</div>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/c147495c0cebaa6862e8be840818b301"></gist-embed>
          </article>

          <article class="sub-article" id="standard-web-components">
            <h4>Standard web component</h4>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/de097083caa213b7331c2020ac50eb67"></gist-embed>
          </article>

          <article class="sub-article" id="web-component-with-render">
            <h4>Web component with render</h4>
            <p>We are using the 'defineWithRender' method. This will provide the component with a render method. We can now re-render when the list attribute is updated</p>
            <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/ce89a3c5ab2e7df601cb39b84ad02737"></gist-embed>
          </article>

          <a class="button" href="/lets-build/server">Next: Lets build</a>
        </article>
      </render-block>
    `;
  }
});

module.exports = async () => ({
  title: 'Web components',
  body: page.build()
});
