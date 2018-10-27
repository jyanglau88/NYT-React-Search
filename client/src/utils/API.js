import axios from "axios";

export default {
  apiArticles: function(topic, startYear, endYear) {
    //TODO UPDATE .ENV???
    let apikey = `e192b6f601414bcbbf9074963fcd24a7`;
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231&fl=web_url,headline,pub_date`;
    return axios.get(url)
      .then(res => {
        return res.data.response.docs;
      });
  },    
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id !!!!!!!
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
};