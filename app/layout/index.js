const {
  browserScripts,
  html
} = require('web-components-node');
const header = require('./header');
const nav = require('./navigation');
require('../components');

module.exports = ({ body, title }) => html`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="Cache-Control" content="no-store" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="Description" content="Build, render and serve web-components">
      <title>${title}</title>
      <link rel="stylesheet" href="/assets/styles/main.css">
      <link rel="stylesheet" href="/assets/styles/page.css">
      ${browserScripts.include()}
    </head>

    <body>

      ${browserScripts.includeComponents()}

      ${nav({ title })}
      <section class="page-container">
        ${header({ title })}
        <section class="body-container">${body}<section>
      <section>

    </body>
  </html>
`;
