const {
  customElements,
  HTMLElement,
  html
} = require('web-components-node');

const page = customElements.export('introduction-page', class extends HTMLElement {
  template() {
    return html`
      <style>
        @import 'assets/styles/page.css';
      </style>

      <div id="content" class="center-container">
        <article>

          <article class="into-article">
            <h3>Introduction</h3>
            <p>
              This project is meant to serve as a way to use web components in place of a framework. By no means is this meant to act as a replacement for frameworks (React, Angular, Vue, ...). If you are looking for something simple, performant, with server-side rendering support then this project may interest you.
            </p>
          </article>

          <article class="sub-article">
            <h4>Goals</h4>

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
                <h6>Reduce</h6>
                <p>
                  Reduce the number of dependencies needed to create a web application
                </p>
              </div>
            </div>
          </article>

          <article class="sub-article">
            <h4>Why?</h4>
            <p>
              At the time I created this repo I was in the process of interviewing for a new job. Almost every company asked me what frameworks I preferred. My development experience in the web started prior to frameworks being available, so when I thought about the question of which framework, the only answer I could confidently say was "I don't prefer any of them". This does not mean I do not see value in frameworks or do not enjoy working in them, because I do see value and have built some great projects with some of them. But now you can find native alternatives to many of the features that frameworks fulfilled.
            </p>
            <p>
              I decided to take a hard look at how I might build my next web application. What you see here is the fruits of my research. I realized that web components solve one of the biggest problems that could not be achieved without a framework in the past. The ability to scope code to a block of HTML. Almost all the other features needed to work in the web (querySelector, template literals, ...) are available natively in the majority of browsers today.
            </p>
          </article>

        </article>
      </div>
    `;
  }
});

module.exports = async () => ({
  title: 'Introduction',
  body: page.build()
});
