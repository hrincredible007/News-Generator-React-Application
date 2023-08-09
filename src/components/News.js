import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    // console.log("This is the constructor of the News Component");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  pressNext = async () => {
    if (this.state.page+1 <= Math.ceil(this.state.totalArticles / this.props.pageSize)) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d3427fb2c91149fa89bb72d355f915da&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let parsedData = await fetch(url);
      let jsonData = await parsedData.json();
      this.setState({
        page: this.state.page + 1,
        articles: jsonData.articles,
      });
    }
  };
  pressPrevious = async () => {
    // console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d3427fb2c91149fa89bb72d355f915da&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let parsedData = await fetch(url);
    let jsonData = await parsedData.json();
    this.setState({
      page: this.state.page - 1,
      articles: jsonData.articles,
    });
  };

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=d3427fb2c91149fa89bb72d355f915da&page=1&pageSize=${this.props.pageSize}`;
    let parsedData = await fetch(url);
    let jsonData = await parsedData.json();
    // console.log(jsonData.articles);
    this.setState({
      articles: jsonData.articles,
      totalArticles: jsonData.totalResults,
    });
    // console.log("This is componentDidMount");
  }

  checkForNext = ()=>{
    return this.state.page >= Math.ceil(this.state.totalArticles / this.props.pageSize)? true: false;
  }
  render() {
    // console.log("This is render function");
    let div_Styling = { position: "relative", left: "40px", marginTop: "15px" };
    return (
      <div className="container mt-9">
        <h2 className="my-4" style={div_Styling}>
          Worldwide News Top-HeadLines
        </h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url} style={div_Styling}>
                <NewsItem
                  title={element.title.slice(0, 50)}
                  description={
                    element.description
                      ? element.description.slice(0, 90)
                      : element.description
                  }
                  url={element.url}
                  imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between m-10">
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
          <button
            disabled = {this.checkForNext()}
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
        </div>
      </div>
    );
  }
}
