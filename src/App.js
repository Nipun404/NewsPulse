import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
       mode : 'light',
       progress: 0,
       articles : []
    }
  }
  togglemode = ()=>{
    if(this.state.mode==="light"){
      this.setState({
        mode: "dark"
      });
      document.body.style.backgroundColor = '#1c1f23';
    }
    else{
      this.setState({
        mode: "light"
      });
      document.body.style.backgroundColor = 'white';
    }
  }
  setProgress = (progress)=>{
    this.setState({
      progress : progress
    })
  }
  setArticles = (articles)=>{
    this.setState({
      articles : articles
    })
  }
  render() {
    return (
      <Router>
      <Navbar mode={this.state.mode} toggle={this.togglemode}></Navbar>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height = {2}
        waitingTime = {500}
      />
      <Routes>
      <Route exact path="/" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress} key = "general" pagesize={8} country="in" category="general" mode={this.state.mode}/>}> </Route>
      <Route exact path="/business" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress} key = "business" pagesize={8} country="in" category="business" mode={this.state.mode}/>}> </Route>
      <Route exact path="/science" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress} key = "science" pagesize={8} country="in" category="science" mode={this.state.mode}/>}> </Route>
      <Route exact path="/sports" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress}  key = "sports" pagesize={8} country="in" category="sports" mode={this.state.mode}/>}> </Route>
      <Route exact path="/technology" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress}  key = "technology" pagesize={8} country="in" category="technology" mode={this.state.mode}/>}> </Route>
      <Route exact path="/entertainment" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress} key = "entertainment" pagesize={8} country="in" category="entertainment" mode={this.state.mode}/>}> </Route>
      <Route exact path="/health" element = {<News articles={this.state.articles} setArticles = {this.setArticles} setProgress = {this.setProgress} key = "health" pagesize={8} country="in" category="health" mode={this.state.mode}/>}> </Route>
      </Routes>
      </Router>
    )
  }
}
