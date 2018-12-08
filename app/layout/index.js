const {
  browserScripts,
  html
} = require('web-components-node');
const header = require('./header');
const nav = require('./navigation');
require('../components');

module.exports = ({ body, title }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${title}</title>
      <meta http-equiv="Cache-Control" content="no-store" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
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
