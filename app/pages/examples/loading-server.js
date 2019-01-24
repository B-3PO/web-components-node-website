const {
  Page,
  html
} = require('web-components-node');

const page = new class LoadingServer extends Page {
  constructor() {
    super();
    this.data = [];
  }

  // Page title. Returnes from build()
  get title() {
    return 'Loading data on the client';
  }

  html() {
    return html`
      <div class="disclaimer-container">
        Disclaimer: This is a beta version
      </div>

      <article>
        <article class="into-article">
          <h2>Load data client side</h2>
          <p>In this example we will pre render the page with a progress bar. The client will then load data and re render the page to show the data</p>
        </article>

        <article class="sub-article">
          <h4>Data</h4>

          <ol class="styled-list">
            ${this.data.map(d => (html`
              <li id="list-id-${d.id}">
                <span class="list-text">${d.label}</span>
              </li>
            `)).join('\n')}
          </ol>
        </article>

        <article>
          <h4>Page code</h4>
          <gist-embed hide-footer no-scroll src="https://gist.github.com/B-3PO/b92a43b1ed94b390b2b5f197b0bb5d5f"></gist-embed>
        </article>
      </article>
    `;
  }

  // This is a convinience method. It is suggested you load your css in a file
  css() {
    return `
      .styled-list {
        padding: 0;
        margin: 0;
      }

      .styled-list li {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 16px;
        flex-direction: row-reverse;
        justify-content: space-around;
        line-height: 48px;
      }

      .styled-list li .list-text {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        padding: 0;
      }

      .styled-list li:hover {
        background: #DDDDDD;
      }
    `;
  }
};

async function theData() {
  // use timeout to simulate an endpoint loading
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    { id: 1,
      label: 'one' },
    { id: 2,
      label: 'two' },
    { id: 3,
      label: 'three' },
    { id: 4,
      label: 'four' },
    { id: 5,
      label: 'five' },
    { id: 6,
      label: 'six' },
    { id: 7,
      label: 'seven' },
    { id: 8,
      label: 'eight' } ];
}

module.exports = async () => {
  const data = await theData();
  return page.build({ data }); // { title, head, body }
};
