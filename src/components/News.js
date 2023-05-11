import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
var totalres;
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      routers: ['Home',
        'Business',
        'Entertainment',
        'Health',
        'Science',
        'Sports',
        'Technology'],
      loading: true,
      page: 1,
      pagereq: 1
    };
  }
  async update(pageno) {
    this.setState({
      loading: true
    })
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=2157d1af4d2247f6a65a3aaaff40eff5&page=${pageno}&pageSize=${this.props.pagesize}`);
    let parseddata = await data.json();
    totalres = parseddata.totalResults;
    this.setState({
      articles: parseddata.articles,
      loading: false,
    });
  }
  async componentDidMount() {
    await this.update(1);
    let p = Math.ceil(totalres / this.props.pagesize);
    this.setState({
      pagereq: p - 1,
    });
  }
  nextpage = async () => {
    this.setState({
      page: this.state.page + 1,
      pagereq: this.state.pagereq - 1,
    });
    this.update(this.state.page + 1);
  }
  prevpage = async () => {
    this.setState({
      page: this.state.page - 1,
      pagereq: this.state.pagereq + 1,
      loading: false
    });
    this.update(this.state.page - 1);
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 align="center" style={{color: this.props.mode==='light'? 'black':'white'}}>Top Headlines</h1>
          {this.state.loading && <Spinner mode={this.props.mode}></Spinner>}
          <div className="row">
            {
              !this.state.loading && this.state.articles.map((element) => {
                return <div className="col-md-3 my-3" key={element.url}>
                  <Newsitem mode = {this.props.mode} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 70) : ""} urlimage={element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                </div>
              })
            }
          </div>
        </div>
        <div className="container d-flex justify-content-between my-2">
          <button type="button" disabled={this.state.page === 1} onClick={this.prevpage} className="btn btn-primary">&larr; Prev</button>
          <button type="button" disabled={this.state.pagereq <= 0} onClick={this.nextpage} className="btn btn-primary">Next &rarr;</button>
        </div>
      </>
    );
  }
}
