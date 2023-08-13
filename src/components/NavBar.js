import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{marginLeft: '50px'}}>
            News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./about">About </a>
              </li>
              <li className="nav-item">
                <a href="./business" className="nav-link active">Business</a>
              </li>

              <li className="nav-item">
                <a href="./entertainment" className="nav-link active">Entertainment</a>
              </li>

              <li className="nav-item">
                <a href="./health" className="nav-link active">Health</a>
              </li>

              <li className="nav-item">
                <a href="./science" className="nav-link active">Science</a>
              </li>

              <li className="nav-item">
                <a href="./sports" className="nav-link active">Sports</a>
              </li>

              <li className="nav-item">
                <a href="./technology" className="nav-link active">Technology</a>
              </li>
            </ul>
            <div className='form-check form-switch text-dark'>
                <input className="mr-40 form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                <label style={
                  {
                    color: "white"
                  }
                } className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
