//Require the express package and use express.Router()
const express     = require('express');
const router      = express.Router();
const bucketlist  = require('../models/list');

//GET HTTP method to /bucketlist
router.get('/', (req, res) => {
  bucketlist.getAllLists((err, lists) => {
    if (err) {
      res.status(404).json({ success: false, message: `Failed to load all lists. Error: ${err}` });
    } else {
      res.status(200).write(JSON.stringify({ success: true, lists: lists }, null, 2));
      res.end();
    }
  });
});

//GET HTTP method to /bucketlist/:id (single list item)
router.get('/:id', (req, res, next) => {
  //access the parameter which is the id of the item to be deleted
  const id = req.params.id;
  //Call the model method deleteListById
  bucketlist.getListById(id, (err, list) => {
    if (err) {
      res.status(404).json({ success: false, message: `Failed to find the list item. Error: ${err}` });
    } else if (list) {
      res.status(200).write(JSON.stringify({ success: true, lists: list }, null, 2));
      res.end();
    } else
      res.status(400).json({ success: false, message: `Bad request. Error ${err}` });
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
      res.status(400).json({ success: false, message: `Failed to create a new list. Error: ${err}` });
    } else
      res.status(201).json({ success: true, message: 'Added successfully.' });
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
      res.status(400).json({ success: false, message: `Failed to update the list. Error: ${err}` });
    } else if (list) {
      res.status(200).json({ success: true, message: 'Updated successfully' });
    } else
      res.status(400).json({ success: false });
  });
});


//DELETE HTTP method to /bucketlist/:id. Here, we pass in a param which is the object id.
router.delete('/:id', (req, res, next) => {
  //access the parameter which is the id of the item to be deleted
  const id = req.params.id;
  //Call the model method deleteListById
  bucketlist.deleteListById(id, (err, list) => {
    if (err) {
      res.status(400).json({ success: false, message: `Failed to delete the list. Error: ${err}` });
    } else if (list) {
      res.status(204).json({ success: true, message: 'Deleted successfully' });
    } else
      res.status(400).json({ success: false });
  });
});

module.exports = router;