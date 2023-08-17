import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import PreLoader from "./PreLoader";
export default class News extends Component {
  apiKey = "d3427fb2c91149fa89bb72d355f915da";
  static defaultProps = {
    pageSize: "5",
    category: "general",
    country: "in",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };
  constructor() {
    super();
    // console.log("This is the constructor of the News Component");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  updateNews = async () => {
    this.props.setProgress(25);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let parsedData = await fetch(url);
    let jsonData = await parsedData.json();
    this.props.setProgress(50);
    // console.log(jsonData);
    this.setState({
      page: this.state.page,
      articles: jsonData.articles,
      loading: false,
      totalArticles: jsonData.totalResults,
    });
    this.props.setProgress(100);
  };

  pressNext = async () => {
    // console.log(this.state.totalArticles, this.props.pageSize)
    // if (this.state.page <= Math.ceil(this.state.totalArticles / this.props.pageSize)) {
      this.setState({
        page: this.state.page+1
      });
      console.log(true)
      // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      // let parsedData = await fetch(url);
      // let jsonData = await parsedData.json();
      // console.log(url);
      // console.log(jsonData.articles);
      // this.setState({
      //   articles: jsonData.articles,
      //   page: this.state.page + 1,
      //   loading: false,
      // });
      this.updateNews();
    // }
    // }
  };
  pressPrevious = async () => {
    // console.log("Prev");
    // this.setState({
    //   page: this.state.page-1
    // });
    // this.updateNews();
    this.setState({
      page:this.state.page-1
    });

    this.updateNews();
  };

  async componentDidMount() {
    
    this.updateNews();
    // console.log("This is componentDidMount");
  }

  checkForNext = () => {
    return this.state.page >=
      Math.ceil(this.state.totalArticles / this.props.pageSize)
      ? true
      : false;
  };
  render() {
    // console.log("This is render function");
    let div_Styling = { position: "relative", left: "40px", marginTop: "15px" };
    return (
      <div className="container mt-9">
        <h2 className="my-4 text-center" style={div_Styling}>
          Worldwide News Top-HeadLines
        </h2>
        {this.state.loading && <PreLoader></PreLoader>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url} style={div_Styling}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={
                    element.description
                      ? element.description.slice(0, 90)
                      : element.description
                  }
                  url={element.url}
                  imageUrl={element.urlToImage}
                  author={element.author}
                  time={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between m-10">
          {!this.state.loading && (
            <button
              disabled={this.state.page === 1 ? true : false}
              type="button"
              className="btn btn-dark"
              style={{
                position: "relative",
                left: "50px",
                marginTop: "15px",
                marginBottom: "50px",
              }}
              onClick={this.pressPrevious}
            >
              Previous
            </button>
          )}
          {!this.state.loading && (
            <button
              disabled={this.checkForNext()}
              type="button"
              className="btn btn-dark"
              style={{
                position: "relative",
                right: "80px",
                marginTop: "15px",
                marginBottom: "50px",
              }}
              onClick={this.pressNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}
