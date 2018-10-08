var mongoose = require('mongoose');

var sggMapSchema = new mongoose.Schema({
  SD_CD: String,
  type: String,
  features: Array,
  created_at: { type:Date, default:Date.now }
});

module.exports = mongoose.model('SggMap', sggMapSchema);