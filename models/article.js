const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  url: { type: String, required: true, unique: true },
  comment:  [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
