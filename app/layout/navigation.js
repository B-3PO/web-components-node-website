const { html } = require('web-components-node');

module.exports = ({ title }) => html`
  <nav>
    <span class="main-title">Web</span>
    <span class="main-title">Components</span>
    <span class="main-title">Node</span>

    <section>
      <span class="title">Welcome</span>
      <a href="/introduction" ${title === 'Introduction' ? 'class="active"' : ''}>Introduction</a>
      <expander-container>
        <expander-header>
          <span class="expander-label">Links</span>
          <expander-arrow></expander-arrow>
        </expander-header>

        <expander-content>
          <a href="https://github.com/B-3PO/web-components-node" target="new">GitHub</a>
          <a href="https://www.npmjs.com/package/web-components-node" target="new">npm</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="new">MDN Web components</a>
          <a href="https://www.w3.org/standards/techs/components#w3c_all" target="new">Web components spec</a>
        </expander-content>
      </expander-container>
    </section>

    <section>
      <span class="title">Documentation</span>
      <a href="/documentation/getting-started" ${title === 'Getting started' ? 'class="active"' : ''}>Getting started</a>
      <a href="/documentation/pages" ${title === 'Building pages' ? 'class="active"' : ''}>Building Pages</a>
      <a href="/documentation/page-mapper" ${title === 'Page mapper' ? 'class="active"' : ''}>Page mapper</a>
      <a href="/documentation/web-components" ${title === 'Web components' ? 'class="active"' : ''}>Web componenets</a>
    </section>


    <section>
      <span class="title">Lets build a site</span>
      <a href="/lets-build/server" ${title === 'Build a server' ? 'class="active"' : ''}>Build a server</a>
      <a href="/lets-build/layout" ${title === 'Add the layout' ? 'class="active"' : ''}>Add the layout</a>
    </section>
  </nav>
`;


// <section>
//   <span class="title">Learn</span>
//   <a href="/learn/web-components" ${title === 'Web components' ? 'class="active"' : ''}>Web components</a>
// </section>
