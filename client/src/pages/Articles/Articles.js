import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//  handleFormSubmit = event => {
//    event.preventDefault();
//    if (this.state.title && this.state.date) {
//      API.apiArticles({
//        title: this.state.title,
//        date: this.state.date,
 //       url: this.state.url
 //     })
  //      .then(res => this.loadArticles())
  //      .catch(err => console.log(err));
  //  }
 // };

  handleFormSubmit = event => {
    event.preventDefault();
    API.apiArticles(this.state.topic, this.state.startyear, this.state.endyear)
      .then(res => {
        this.setState({ results: res, topic: "", startyear: "", endyear: "" });
      })
      .catch(err => console.log(err));
  };

  saveArticle = targetIndex => {
    if (this.state.results[targetIndex].headline.main && this.state.results[targetIndex].pub_date && this.state.results[targetIndex].web_url) {
      API.saveArticle({
        title: this.state.results[targetIndex].headline.main,
        date: this.state.results[targetIndex].pub_date,
        url: this.state.results[targetIndex].web_url
      })
        .then(
          res => this.loadArticles()
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>NYT Articles</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
              />
              <TextArea
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="URL (Optional)"
              />
              <FormBtn
                disabled={!(this.state.date && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>

          </Col>
          
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.date}
                      </strong>
                      <button className='btn btn-primary' onClick={this.saveArticle}>
              Save Article
            </button>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
