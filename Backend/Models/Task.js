const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Task = new Schema({taskName: {type: String}},{collection: 'task'});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Task', Task);