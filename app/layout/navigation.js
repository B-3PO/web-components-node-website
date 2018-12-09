const { html } = require('web-components-node');

module.exports = ({ title }) => html`
  <nav>
    <a href="/home" ${title === 'Home' ? 'class="active"' : ''}>Home</a>
    <a href="https://github.com/B-3PO/web-components-node" target="new">GitHub</a>
    <a href="https://www.npmjs.com/package/web-components-node" target="new">npm</a>
    <a href="/web-components" ${title === 'Web components' ? 'class="active"' : ''}>Web components</a>

    <expander-container>
      <expander-header>
        <span class="expander-label">Hello World</span>
        <expander-arrow></expander-arrow>
      </expander-header>

      <expander-content>
        <a href="https://github.com/B-3PO/web-components-node" target="new">GitHub</a>
        <a href="https://www.npmjs.com/package/web-components-node" target="new">npm</a>
      </expander-content>
    </expander-container>
  </nav>
`;
