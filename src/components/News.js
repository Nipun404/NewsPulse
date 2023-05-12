import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  captializefirstletter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  };
  async update() {
    this.props.setProgress(20);
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bbcd59b0d26c46b9b4cdc701399921c8&page=${this.state.page}&pageSize=${this.props.pagesize}`);
    this.props.setProgress(50);
    let parseddata = await data.json();
    this.props.setProgress(80);
    this.props.setArticles(parseddata.articles);
    this.setState({
      totalResults : parseddata.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
     this.update();
  }
 
  fetchMoreData = async() => {
    this.setState({
       page: this.state.page+1
      });
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=bbcd59b0d26c46b9b4cdc701399921c8&page=${this.state.page+1}&pageSize=${this.props.pagesize}`);
    let parseddata = await data.json();
    this.props.setArticles(this.props.articles.concat(parseddata.articles));
    this.setState({
      totalResults : parseddata.totalResults,
    });
  };
  render() {
    return (
      <>
          <h2 align="center" style={{color: this.props.mode==='light'? 'black':'white',margin: '35px 0px'}}>Top {this.captializefirstletter(this.props.category)} Headlines</h2>
      
            <InfiniteScroll
          dataLength={this.props.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults!==this.props.articles.length}
           loader={<Spinner/>}
        >
        <div className="container">
          <div className="row">
            {
              this.props.articles.map((element) => {
                return <div className="col-md-3 my-3" key={element.url}>
                  <Newsitem mode = {this.props.mode} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 70) : ""} urlimage={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                </div>
              })
            }
          </div>
          </div>
          </InfiniteScroll>
      </>
    );
  }
}
