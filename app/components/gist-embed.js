// TODO hide scroll bar when user has a mouse wheel
const {
  customElements,
  HTMLElement
} = require('web-components-node');

customElements.define('gist-embed', class extends HTMLElement {
  constructor() {
    super();
    this.style.background = '#282c34';
    this.style.display = 'block';
    this.style.border = '1px solid #CCC';
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

  get noScroll() {
    return this.hasAttribute('no-scroll');
  }

  get hideFooter() {
    return this.hasAttribute('hide-footer');
  }

  set height(value) {
    this.children[0].style.height =  String(value).replace('px', '') + 'px';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  buildIframe() {
    const gistFrame = document.createElement('iframe');
    gistFrame.setAttribute('width', '100%');
    gistFrame.title = "code";
    gistFrame.style.border = 'none';
    this.appendChild(gistFrame);

    // Create the iframe's document
    const gistFrameHTML = `
      <html>
        <style>
          @import 'assets/styles/gist-syntax.css';
          @import url('https://fonts.googleapis.com/css?family=Open+Sans');

          body {
            margin: -1px;
          }

          body.no-scroll {
            overflow-y: hidden;
            overflow-x: hidden;
          }

          .gist {
            opacity: 0;
            background: #282c34;
            overflow-x: scroll;
            -webkit-transition: opacity 0.3s ease-in-out;
               -moz-transition: opacity 0.3s ease-in-out;
                 -o-transition: opacity 0.3s ease-in-out;
                    transition: opacity 0.3s ease-in-out;
          }

          .gist.load {
            opacity: 1;
          }
        </style>
        <body>
          <script>
            function load() {
              setTimeout(function () {
                var gist = document.querySelector('.gist');
                if (gist) gist.classList.add('load');
                ${this.hideFooter ? 'hideFooter();' : ''}
                ${this.noScroll ? 'document.querySelector("body").classList.add("no-scroll");' : ''}

                setTimeout(function () {
                  if (!gist) gist = document.querySelector('.gist');
                  if (!gist.classList.contains('load')) gist.classList.add('load');
                  ${this.hideFooter ? 'hideFooter();' : ''}
                  ${this.noScroll ? 'document.querySelector("body").classList.add("no-scroll");' : ''}

                  setTimeout(function () {
                    if (!gist) gist = document.querySelector('.gist');
                    if (!gist.classList.contains('load')) gist.classList.add('load');
                    ${this.hideFooter ? 'hideFooter();' : ''}
                    ${this.noScroll ? 'document.querySelector("body").classList.add("no-scroll");' : ''}
                  }, 400);
                }, 400);
              }, 0);
            }

            function hideFooter() {
              var meta = document.querySelector('.gist-meta');

              if (meta) {
                document.querySelector('.gist-meta').remove();
              }
            }
          </script>
          <script id="gist-script" typ="text/javascript" src="${this.src}" onload="load()"></script>
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
});
