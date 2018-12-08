const {
  customElements,
  HTMLElement,
  registerComponent
} = require('web-components-node');

registerComponent(customElements.define('gist-embed', class extends HTMLElement {
  constructor() {
    super();
    if (this.src) this.buildIframe();
  }

  static get observedAttributes() {
    return ['height'];
  }

  get src() {
    return this.getAttribute('src').replace('.js', '') + '.js';
  }

  get height() {
    return this.getAttribute('height');
  }

  set height(value) {
    this.children[0].style.height =  String(value).replace('px', '') + 'px';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback', name, newValue);
    this[name] = newValue;
  }

  buildIframe() {
    const gistFrame = document.createElement('iframe');
    gistFrame.setAttribute('width', '100%');
    gistFrame.id = 'gistFrame';
    gistFrame.style.height = '240px';
    gistFrame.style.border = '1px solid #CCC';
    this.appendChild(gistFrame);

    // Create the iframe's document
    const gistFrameHTML = `
      <html>
        <style>
          @import 'assets/styles/gist-syntax.css';

          @import url('https://fonts.googleapis.com/css?family=Open+Sans');
          body {
            margin: -1px;
            font: 16px 'Open Sans', sans-serif;
          }
        </style>
        <body>
          <script typ="text/javascript" src="${this.src}"></script>
        </body>
      </html>
    `;

    // Set iframe's document with a trigger for this document to adjust the height
    let gistFrameDoc = gistFrame.document;
    if (gistFrame.contentDocument) gistFrameDoc = gistFrame.contentDocument;
    else if (gistFrame.contentWindow) gistFrameDoc = gistFrame.contentWindow.document;

    gistFrameDoc.open();
    gistFrameDoc.writeln(gistFrameHTML);
    gistFrameDoc.close();
  }
}));
