//Require the express package and use express.Router()
const express     = require('express');
const router      = express.Router();
const bucketlist  = require('../models/list');

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
  bucketlist.getAllLists((err, lists) => {
    if (err) {
      res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
    } else {
      res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
      res.end();
    }
  });
});

//POST HTTP method to /bucketlist
router.post('/', (req, res, next) => {
  const newList = new bucketlist({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category
  });
  bucketlist.addList(newList, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });

    } else
      res.json({ success: true, message: 'Added successfully.' });

  });
});

//PUT HTTP method to /bucketlist/:id
router.put('/:id', (req, res, next) => {
  // Access the id parameter
  const id = req.params.id;
  const changes = req.body;
  //call the model method updateListById
  bucketlist.updateListById(id, changes, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to update the list. Error: ${err}` });
    } else if (list) {
      res.json({ success: true, message: 'Updated successfully' });
    } else
      res.json({ success: false });
  });
});


//DELETE HTTP method to /bucketlist/:id. Here, we pass in a param which is the object id.
router.delete('/:id', (req, res, next) => {
  //access the parameter which is the id of the item to be deleted
  const id = req.params.id;
  //Call the model method deleteListById
  bucketlist.deleteListById(id, (err, list) => {
    if (err) {
      res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
    } else if (list) {
      res.json({ success: true, message: 'Deleted successfully' });
    } else
      res.json({ success: false });
  });
});

module.exports = router;