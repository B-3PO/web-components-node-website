const { html } = require('web-components-node');

// just send some html
module.exports = async () => ({
  title: '404',
  body: html`
    <h2>Page Not Found</h2>
    <p>Sorry, but the page you were trying to view does not exist.</p>
  `
});
