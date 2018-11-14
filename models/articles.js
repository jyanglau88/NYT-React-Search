const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  url: {
    type: String,
    required: true
  },
  
  image: {
    type: String
  }
});

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;