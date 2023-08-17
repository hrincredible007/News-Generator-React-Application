import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News  from "./components/News";
import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  state= {
    progress: 25,
    pageSize: 7
  }
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#ddfd16'
            progress={this.state.progress}
            // height={3}
          />
          <Routes>
            <Route exact path="/" element = 
              {<News setProgress = {this.setProgress}  key ="general" pageSize={this.state.pageSize} country="in" category="general" />}>
            </Route>
            <Route  exact path="/business" element = {
              <News setProgress = {this.setProgress}  key = "business" pageSize={this.state.pageSize} country="in" category="business" />}>
            </Route>
            <Route path="/entertainment" element = {
              <News setProgress = {this.setProgress}  key = "entertainment" pageSize={this.state.pageSize} country="in" category="entertainment" />}>
            </Route>
            <Route exact path="/health" element = {
              <News setProgress = {this.setProgress} key = "health" pageSize={this.state.pageSize} country="in" category="health" />}>
            </Route>
            <Route exact path="/science" element = {
              <News setProgress = {this.setProgress} key = "science" pageSize={this.state.pageSize} country="in" category="science" />}>
            </Route>
            <Route exact path="/sports" element = {
              <News setProgress = {this.setProgress} key = "sports" pageSize={this.state.pageSize} country="in" category="sports" />}>
            </Route>
            <Route ke exact path="/technology" element = {
              <News setProgress = {this.setProgress} key ="technology" pageSize={this.state.pageSize} country="in" category="technology" />}>
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
