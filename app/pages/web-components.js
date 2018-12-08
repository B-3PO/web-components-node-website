const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.define('web-components-page', class extends HTMLElement {
  template() {
    return html`
      <style>
        @import 'assets/styles/page.css';

        li a {
          font-size: 14px;
          color: #78849C;
        }

      </style>

      <div id="content" class="center-container">

        <article>

          <article class="into-article">
            <h3>Web Components</h3>
            <p>
              Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.
            </p>
          </article>

          <article class="sub-article">
            <h4>Links</h4>
            <ul>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="new">MDN web components</a></li>
              <li><a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements" target="new">Custom Elements SPEC</a></li>
              <li><a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element" target="new">&lt;template&gt; SPEC</a></li>
              <li><a href="https://dom.spec.whatwg.org/#shadow-trees" target="new">Shadow Dom SPEC</a></li>
            </ul>
          </article>

          <article class="sub-article">
            <h4>Custom Elements</h4>
            <p>
              One of the key features of the Web Components standard is the ability to create custom elements that encapsulate your functionality on an HTML page, rather than having to make do with a long, nested batch of elements that together provide a custom page feature. This article introduces the use of the Custom Elements API.
            </p>
            <gist-embed height="400" src="https://gist.github.com/B-3PO/02da92a8ecc099724d3b31779ea0bd1e"></gist-embed>
          </article>

          <article class="sub-article">
            <h4>&lt;template&gt;</h4>
            <p>
              The HTML Content Template (&lt;template&gt;) element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.
            </p>
            <gist-embed height="400" src="https://gist.github.com/B-3PO/9374d534193846c22a31a5900e74486f"></gist-embed>
          </article>

        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Web components',
  body: page.build()
});
