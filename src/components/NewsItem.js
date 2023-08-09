import React, { Component } from "react";

export default class NewsItem extends Component {

  sty = {
    width : '18rem'
  }
  render() {
    
    let {title, description, url, imageUrl} = this.props;
    return (
      <div> 
        <div className="card" style={this.sty}>
          <img className="card-img-top" src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href= {url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    ); 
  }
}
