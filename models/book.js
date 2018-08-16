const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
name: {
  type: String,
  required: true,
  max: 100
},
price: {
  type: Number,
  required: true
},
author: {
  type: String,
  required: true
},
author: {
  type: new Date
  required: true
  max: 100
},

date: {
  type: Date,
  set: function(v) {
    return new Date(v.getFullYear(), v.getMonth(), v.getDate());
  }
}
});


module.exports = mongoose.model('Product', bookSchema);
