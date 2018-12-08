const { html } = require('web-components-node');

module.exports = ({ title }) => html`
  <nav>
    <a href="/home" ${title === 'Home' ? 'class="current"' : ''}>Home</a>
    <a href="https://github.com/B-3PO/web-components-node" target="new">GitHub</a>
    <a href="https://www.npmjs.com/package/web-components-node" target="new">npm</a>
    <a href="/web-components" ${title === 'Web components' ? 'class="current"' : ''}>Web components</a>
  </nav>
`;
