const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { setConfig } = require('web-components-node');
const IP = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const PORT = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3001;

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
  minify: true
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('*/assets', express.static(path.join(__dirname, './app/public')));
app.use('/images', express.static(path.join(__dirname, './app/public/images')));
app.use('/robots.txt', express.static(path.join(__dirname, './app/public/robots.txt')));
app.use('/manifest.json', express.static(path.join(__dirname, './app/public/manifest.json')));
app.use('/favicon.ico', express.static('./app/public/images/favicon.ico'));

app.use('/', require('./app/router'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send({ error: err.message });
});

app.listen(PORT, IP, () => console.log(`Example app running on port ${PORT}`));

module.exports = app;
