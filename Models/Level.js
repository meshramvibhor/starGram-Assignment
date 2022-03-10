const mongoose = require('mongoose');
const {Schema} = mongoose;

const levelSchema = new Schema({
    Level_number:{
        type: Number,
    },
    Level_count:{
       type: String,
   }
  });

  module.exports = mongoose.model('Level',levelSchema);