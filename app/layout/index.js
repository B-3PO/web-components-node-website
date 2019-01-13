const {
  html
} = require('web-components-node');
const header = require('./header');
const nav = require('./navigation');
require('../components');

module.exports = ({ head, body, title }) => html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="Cache-Control" content="no-store" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="Description" content="Build, render and serve web-components">
      <meta name="theme-color" content="#364051"/>
      <title>${title}</title>
      <link rel="manifest" href="http://localhost:3001/manifest.json">
      <link rel="stylesheet" href="http://localhost:3001/assets/styles/main.css">
      <link rel="stylesheet" href="http://localhost:3001/assets/styles/page.css">

      <link rel="stylesheet" href="http://localhost:3001/wcn.css">
      <script src="http://localhost:3001/wcn.js"></script>
      ${head}
    </head>

    <body>
      ${nav({ title })}
      <section class="page-container">
        ${header({ title })}
        <section class="body-container">
          ${body}
        </section>
      </section>
    </body>
  </html>
`;
