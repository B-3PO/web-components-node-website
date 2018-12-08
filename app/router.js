const express = require('express');
const router = express.Router();
const layout = require('./layout');
const { PageMapper } = require('web-components-node');
const pageMapper = new PageMapper('app/pages');

// Page route
router.get('/*', async (req, res) => {
  const { body, title } = await pageMapper.findPage(req.path)();
  res.send(layout({ body, title }));
});

module.exports = router;
