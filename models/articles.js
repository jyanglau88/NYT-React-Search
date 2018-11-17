const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  dateOfArticle: { type: String, required: true },
  URL: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

const Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;