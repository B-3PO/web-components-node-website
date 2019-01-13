const express = require('express');
const router = express.Router();
const layout = require('./layout');
const { PageMapper } = require('web-components-node');
const pageMapper = new PageMapper('app/pages');
pageMapper.pageNotFount = '404';
pageMapper.root = 'introduction';

// Page route
router.get('/*', async (req, res) => {
  const { body, title, head } = await pageMapper.findPage(req.path)();
  res.send(layout({ body, title, head }));
});

module.exports = router;
