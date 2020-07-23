import React, { Component, Fragment } from 'react';
import { PageContainer } from "common/styled"
import { SearchContainer, SearchListContainer, SaleListContainer } from "./styled";
import { connect } from "react-redux";
import { searchwebApi } from "api/search"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class Search extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      titleFlag: false,
      searchList: []
    }
  }
  render() {
    let { title, titleFlag, searchList } = this.state;
    let { searchListArr } = this.props;
    return (
      <PageContainer>
        <SearchContainer>
          <div className="search">
            <div className="fangdajing">
              <span className="iconfont">&#xe63b;</span>
            </div>
            <input type="text" value={title} placeholder="搜索专柜或商品" onChange={this.handleChage.bind(this)} />
            {
              titleFlag ? <div className="quxiao" onClick={this.handleClickClear.bind(this)}>
                <span>×</span>
              </div> : <div className="mendian">
                  <span className="iconfont">&#xe713;</span>
                  <span className="sou">搜门店</span>
                </div>
            }
          </div>
          <div className="cancel" onClick={this.handleClick.bind(this)}>
            取消
          </div>
        </SearchContainer>
        {
          searchList.length > 0 ? <SearchListContainer>
            <ul>
              {
                searchList.map((item, index) => (
                  <li key={index}>{item}
                    <span className="iconfont">&#xe50e;</span>
                  </li>
                ))
              }
            </ul>
          </SearchListContainer> : <Fragment></Fragment>
        }
        <SaleListContainer>
          <div className="stopTime">
            限时·必省钱
          </div>
          <ul onClick={this.handleToLimitedtime.bind(this)}>
            {
              searchListArr.map((item) => (
                <li key={item.data.id}>
                  <div className="timeImg">
                    <img src={item.data.imageUrl}/>
                    {
                      item.data.couponList.length>0?<span>{item.data.couponList[0]}</span>:<Fragment></Fragment>
                    }
                  </div>
                  <div className="timePrice">
                  <span>￥{item.data.originalPrice}</span>
                  <i>￥{item.data.price}</i>
                  </div>
                </li>
              ))
            }
            <li className="more">
              查看更多
            </li>
          </ul>
        </SaleListContainer>
      </PageContainer>
    );
  }
  componentDidMount() {
    let _time = new Date().getTime();
    this.props.handleAsyncSearchList(_time)
  }
  handleToLimitedtime(){
    this.props.history.push("/limitedtime");
  }
  handleClick() {
    this.props.history.push("/market");
  }
  handleClickClear() {
    this.setState({
      title: "",
      titleFlag: false,
      searchList: []
    })
  }
  async handleAsyncSearch(value) {
    let data = await searchwebApi(value)
    this.setState({
      searchList: data.data.suggest
    })
  }
  handleChage(e) {
    this.handleAsyncSearch(e.target.value)
    this.setState({
      title: e.target.value,
      titleFlag: true
    })
    if (e.target.value === "") {
      this.setState({
        titleFlag: false
      })
    }
  }
}

export default Search;
