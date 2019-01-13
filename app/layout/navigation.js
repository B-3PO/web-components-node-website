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
      <a href="/lets-build/server" ${title === 'Server' ? 'class="active"' : ''}><b>1</b>&nbsp Server</a>
      <a href="/lets-build/layout" ${title === 'Layout' ? 'class="active"' : ''}><b>2</b>&nbsp Layout</a>
      <a href="/lets-build/page" ${title === 'Simple page' ? 'class="active"' : ''}><b>3</b>&nbsp Simple page</a>
      <a href="/lets-build/interactive-page" ${title === 'Interactive page' ? 'class="active"' : ''}><b>4</b>&nbsp Interactive page</a>
      <a href="/lets-build/component" ${title === 'Component' ? 'class="active"' : ''}><b>5</b>&nbsp Component</a>
      <a href="/lets-build/wrap-up" ${title === 'Wrap up' ? 'class="active"' : ''}>Wrap up</a>
    </section>

    <section>
      <span class="title">Examples</span>
      <a href="/examples/loading-client" ${title === 'Loading data on the client' ? 'class="active"' : ''}>Client side laoding</a>
      <a href="/examples/loading-server" ${title === 'Loading and rendering on the server' ? 'class="active"' : ''}>Server side loading</a>
    </section>
  </nav>
`;


// <section>
//   <span class="title">Learn</span>
//   <a href="/learn/web-components" ${title === 'Web components' ? 'class="active"' : ''}>Web components</a>
// </section>
