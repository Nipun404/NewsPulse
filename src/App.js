import React, { Component } from 'react'
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
  render() {
    return (
      <Router>
      <Navbar mode={this.state.mode} toggle={this.togglemode}></Navbar>
      <Routes>
      <Route exact path="/" element = {<News key = "general" pagesize={8} country="in" category="general" mode={this.state.mode}/>}> </Route>
      <Route exact path="/business" element = {<News key = "business" pagesize={8} country="in" category="business" mode={this.state.mode}/>}> </Route>
      <Route exact path="/science" element = {<News key = "science" pagesize={8} country="in" category="science" mode={this.state.mode}/>}> </Route>
      <Route exact path="/sports" element = {<News  key = "sports" pagesize={8} country="in" category="sports" mode={this.state.mode}/>}> </Route>
      <Route exact path="/technology" element = {<News  key = "technology" pagesize={8} country="in" category="technology" mode={this.state.mode}/>}> </Route>
      <Route exact path="/entertainment" element = {<News key = "entertainment" pagesize={8} country="in" category="entertainment" mode={this.state.mode}/>}> </Route>
      <Route exact path="/health" element = {<News key = "health" pagesize={8} country="in" category="health" mode={this.state.mode}/>}> </Route>
      </Routes>
      </Router>
    )
  }
}
