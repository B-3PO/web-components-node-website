const express = require('express');
const router = express.Router();
const layout = require('./layout');
const { PageMapper, Page } = require('web-components-node');
const pageMapper = new PageMapper('app/pages');
pageMapper.pageNotFount = '404';
pageMapper.root = 'introduction';

// Page route
router.get('/*', async (req, res) => {
  const page = pageMapper.findPage(req.path);
  if (page instanceof Page) {
    res.send(layout(page.build()));
    return;
  }
  const { body, title, head } = await page();
  res.send(layout({ body, title, head }));
});

module.exports = router;
