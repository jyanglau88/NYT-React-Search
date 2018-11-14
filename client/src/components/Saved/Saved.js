import React from "react";

const Saved = (props) => {
  return (
    <div className="card mb-3 container results-box">
      <div className="card-header">
        <h4>Saved Articles</h4>
      </div>
      <div className="card-body">
        {props.savedArticles.map((article) => {
          return (
            <div key={article._id}>
              <div className="article-display row">
                <a href={article.url} target="_blank" className="col-md-4"><img src={article.image} className="img-responsive" alt="thumbnail" /></a>
                <div className="col-md-3">
                  <h4>Title: {article.title}</h4>
                </div>
                <div className="col-md-3">
                  <h4>Saved Date: {article.date}</h4>
                </div>
                <button onClick={() => props.deleteArticle(article._id)} className="btn btn-sm btn-danger col-md-2">Delete</button>
              </div>
              <hr />
            </div>
          )
        }) || <h4>Loading~</h4>}
      </div>
    </div>
  )
};

export default Saved;