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

      <div id="content" class="center-container">
        <div class="disclaimer-container">
          Disclaimer: This is a beta version
        </div>

        <article>
          <div class="spacer"></div>
          <h6 style="padding-left:24px;">Quick links</h6>
          <ul>
            <li><anchor-link selector="#include-web-components" offset="56px">Include web components</anchor-link></li>
            <li><anchor-link selector="#standard-web-components" offset="56px">Standard web component</anchor-link></li>
            <li><anchor-link selector="#web-component-with-render" offset="56px">Web component with render</anchor-link></li>
          </ul>

          <article class="into-article">
            <h2>Web components</h2>
            <p>
              Below you can see how to build and package web components with your pages.
            </p>
          </article>

          <article class="sub-article" id="include-web-components">
            <h4>Include web components</h4>
            <p>You can use the 'browserScripts.includeComponents' to include webcomponents, but it is reecomended that you package them up with something like webpack</p>
            <gist-embed hide-footer height="416" no-scroll src="https://gist.github.com/B-3PO/95585aae083dd3c6a7ef9c114d1a423c"></gist-embed>
          </article>

          <article class="sub-article" id="standard-web-components">
            <h4>Standard web component</h4>
            <gist-embed hide-footer height="570" no-scroll src="https://gist.github.com/B-3PO/de097083caa213b7331c2020ac50eb67"></gist-embed>
          </article>

          <article class="sub-article" id="web-component-with-render">
            <h4>Web component with render</h4>
            <p>We are using the 'defineWithRender' method. This will provide the component with a render method. We can now re-render when thee list attribute is updated</p>
            <gist-embed hide-footer height="1034" no-scroll src="https://gist.github.com/B-3PO/ce89a3c5ab2e7df601cb39b84ad02737"></gist-embed>
          </article>

          <a class="button" href="/documentation/page-mapper">Next: Page Mapper</a>
        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Web components',
  body: page.build()
});
