const express = require('express');
const router = express.Router();

const list = require('../controllers/bucketlist');

router.route('/bucketlist')
  .get(list.index)
  .post(list.create);
router.route('/bucketlist/:id')
  .get(list.show)
  .put(list.update)
  .patch(list.update)
  .delete(list.delete);

module.exports = router;