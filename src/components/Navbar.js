import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/button.css';
export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
  <div className="container-fluid">
    <span className="navbar-brand" to="/">News-Pulse</span>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">  <Link className="nav-link active button mx-2" aria-current="page" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link active button mx-2" aria-current="page" to="/business">Business</Link></li>
          <li className="nav-item"><Link className="nav-link active button mx-2" aria-current="page" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link active button mx-2" aria-current="page" to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link active button mx-2" aria-current="page" to="/science">Science</Link></li>
          <li className="nav-item"><Link className="nav-link active button mx-2" aria-current="page" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link active button mx-2" aria-current="page" to="/technology">Technology</Link></li>
      </ul>
      <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={this.props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${this.props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{this.props.mode==='light'?'Enable':'Disable'} Dark Mode</label>
</div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
