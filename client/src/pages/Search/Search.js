import React, { Component } from "react";
import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import Panel from '../../components/UI/Panel/Panel';
import ArticlesLibrary from '../../components/ArticlesLibrary/ArticlesLibrary';
import nytAPI from "../../utils/nyt/API";
import myAPI from "../../utils/api/API";

class Search extends Component {
  state = {
    labels: [
      { id: "Topic", val: "" },
      { id: "Start Year", val: "" },
      { id: "End Year", val: "" }
    ],
    results: [],
    showResults: false,
    error: ""
  }

  handleInputChange = ( event, id ) => {
    const labelIndex = this.state.labels.findIndex(label => label.id === id);
    const label = { ...this.state.labels[labelIndex] };
    label.val = event.target.value;
    const labels = [ ...this.state.labels ];
    labels[labelIndex] = label;
    this.setState({ labels: labels });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    nytAPI.getArticles(this.state.labels[0].val, this.state.labels[1].val, this.state.labels[2].val)
      .then(res => {
        this.setState({ 
          labels: [
            { id: "Topic", val: "" },
            { id: "Start Year", val: "" },
            { id: "End Year", val: "" }
          ],
          results: res.data.response.docs,
          showResults: true 
        });
      })
      .catch(err => this.setState({ error: err.message }));
  } 

  handleArticleSaved = ( event, id ) => {
    event.preventDefault();
    const articleIndex = this.state.results.findIndex(result => result._id === id);
    const article = { ...this.state.results[articleIndex] };
    myAPI.saveArticle({
      title: article.headline.main,
      author: article.source,
      summary: article.snippet,
      dateOfArticle: article.pub_date,
      URL: article.web_url
    })
      .then(res => alert('Saved!'))
      .catch(err => console.log(err));
  }

  render() {
    let searchResults = "Please enter search parameters.";
    if (this.state.showResults) {
      searchResults = this.state.results.map((article, index) => {
        return <ArticlesLibrary
          key={article._id}
          articleId={article._id}
          headline={article.headline.main}
          author={article.source}
          date={article.pub_date}
          URL={article.web_url}
          summary={article.snippet}
          action={this.handleArticleSaved}
          title="Save Article" />
      });
    }
    return (
      <Container>
        <Panel title="Search for Articles">
        <SearchForm 
          submit={this.handleFormSubmit} 
          changed={this.handleInputChange}
          labels={this.state.labels} />
        </Panel>
        <Panel title="Results">{searchResults}</Panel>
      </Container>
    );
  }
}

export default Search;
