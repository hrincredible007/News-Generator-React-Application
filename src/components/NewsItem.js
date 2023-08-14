import React, { Component } from "react";

export default class NewsItem extends Component {

  // sty = {
  //   width : '18rem'
  // }
  render() {
    
    let {title, description, url, imageUrl} = this.props;
    return (
      <div> 
        <div className="card text-center" style={this.sty}>
          <img className="card-img-top" src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/08/600x338/11r_5g_1676953434658_1691480169340.png":imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a href= {url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More.
            </a>
          </div>
        </div>
      </div>
    ); 
  }
}
