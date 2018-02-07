const express = require('express');
const router = express.Router();

const list = require('../controllers/bucketlist');

router.route('/bucketlist')
  .get(list.index)
  .post(list.create);
router.route('/bucketlist/:id')
  .put(list.update)
  .patch(list.update)
  .delete(list.delete);

module.exports = router;