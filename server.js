const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {
  setConfig,
  fileHandler
} = require('web-components-node');
const PORT = process.env.PORT || 3001;

setConfig({
  /*
   * default: 'template'
   * The default method name for templates used by the template renderer
   */
  templateMethod: 'template',

  /*
   * default: true
   * This will memoize certain methods to prevent unnecessary processing
   * This is essantially equal to static file performance after the first request
   * you can turn off memoization for individual components
   */
  memoize: true,

  /*
   * default: true
   * This will minify the js in component script tags and the component tmeplate html
   * This can help redice file size
   */
  minify: true,

  /*
   * default: true
   * user built in service worker to manage cache
   */
  serviceWorker: false
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('*/assets', express.static(path.join(__dirname, './app/public'), { maxAge: '1d' }));
app.use('/images', express.static(path.join(__dirname, './app/public/images'), { maxAge: '1d' }));
app.use('/robots.txt', express.static(path.join(__dirname, './app/public/robots.txt')));
app.use('/manifest.json', express.static(path.join(__dirname, './app/public/manifest.json'), { maxAge: '1d' }));
app.use('/favicon.ico', express.static('./app/public/images/favicon.ico', { maxAge: '1d' }));

app.use(fileHandler.expressFileHandler);

app.use('/', require('./app/router'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send({ error: err.message });
});

app.listen(PORT, () => console.log(`Example app running on port ${PORT}`));

module.exports = app;
