import React, { Component } from "react";
import noimg from "../noimg.png";

export default class Newsitem extends Component {
  render() {
    let { title, description, urlimage, url, author, time,source } = this.props;
    return (
      <div>
        <div className="card" style={{backgroundColor: this.props.mode==='light'? 'white':'#23292f',width: "18rem" }}>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left: '90%'}}>{source}</span>
          <img
            src={urlimage ? urlimage : noimg}
            className="card-img-top"
            alt="..."
            width="500"
            height="200"
          />
          <div className="card-body" style={{color: this.props.mode==='light'? 'black':'white'}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small style={{fontSize: 'small',color: '#555555'}}>
                By {author ? author : "Unknown"} on{" "}
                {new Date(time).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
