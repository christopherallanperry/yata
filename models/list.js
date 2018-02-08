// Require mongoose package
const mongoose = require('mongoose');

// Define BucketlistSchema with title, description and category
const BucketlistSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: {
    type: String,
    required: true,
    enum: ['High', 'Medium', 'Low']
  }
}, {
  timestamps: true
});

const BucketList = module.exports = mongoose.model('BucketList', BucketlistSchema);

// BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
  BucketList.find(callback);
};

// Here we need to pass an id parameter to BucketList.find()
module.exports.getListById = (id, callback) => {
  const query = { _id: id };
  BucketList.findById(query, callback);
};

// newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
  newList.save(callback);
};

// updateList item
module.exports.updateListById = (id, changes, callback) => {
  const query = { _id: id };
  BucketList.update(query, changes, callback);
};

// Here we need to pass an id parameter to BucketList.remove
module.exports.deleteListById = (id, callback) => {
  const query = { _id: id };
  BucketList.remove(query, callback);
};