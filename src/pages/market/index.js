import React, { Component, Fragment } from 'react';
import { PageContainer } from "common/styled";
import { MarkerContainer,HeaderContainer, TopPosterContainer, RecommendContainer, CenterPosterContainer, SliderContainer, CounterContainer,PageBot,GoBack } from "./styled";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Carousel, WingBlank } from 'antd-mobile';
import { scrollAnimation } from "utils/scrollTo";
import { thorttle } from "utils/throttle.js";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Market extends Component {
  constructor() {
    super();
    this.state = {
      storeName: "",//超市名字
      searchName: "",//搜索框内容
      adPoster: "#FF4C48",//图片
      topPoster: [],//4个图标
      centerPoster: [],//6个导航图标
      slider: [],//轮播图
      recommendCounter: [],//专柜推荐
      counterProductGroup: [],//专柜活动,
      homeFlag: false,//轮播图bug,
      sliderFlag: false,//轮播图小圆点是否显示,
      headFlag: false,//头部滚动标记
      goBackFlag:false//回到顶部
    }
  }
  render() {
    let { marketList, counterProduct } = this.props;
    let { goBackFlag,headFlag, sliderFlag, homeFlag, storeName, searchName, adPoster, topPoster, centerPoster, slider, recommendCounter, counterProductGroup } = this.state;
    if (marketList.length !== 0) {
      for (var i = 0; i < marketList.length; i++) {
        if (marketList[i].key === "baseInfo") {
          storeName = marketList[i].data.storeName;
        } else if (marketList[i].key === "searchBar") {
          searchName = marketList[i].data.placeholder
        } else if (marketList[i].key === "cu_adPoster") {
          if (marketList[i].data.items[0].imageUrl !== "") {
            adPoster = marketList[i].data.items[0].imageUrl;
          }
        } else if (marketList[i].key === "topPoster") {
          topPoster = marketList[i].data;
        } else if (marketList[i].key === "centerPoster") {
          centerPoster = marketList[i].data.items;
        } else if (marketList[i].key === "slider") {
          slider = marketList[i].data.items;
          homeFlag = true;
          if (slider.length > 1) {
            sliderFlag = true;
          }
        } else if (marketList[i].key === "recommendCounter") {
          recommendCounter = marketList[i].data.items;
        }
        // else if (marketList[i].key === "counterProductGroup") {

        //   // counterProductGroup = marketList[i].data
        //   arr.push(marketList[i].data);
        //   // counterProductGroup = counterProductGroup.slice(0, 3);
        //   console.log(arr);
        // }
      }
    }
    return (
      <PageContainer>
        <MarkerContainer>
        <HeaderContainer style={{ background: adPoster === '#FF4C48' ? '#FF4C48' : "url(" + adPoster + ") 0% 0% / 100%", height: adPoster === '#FF4C48' ? '0.68rem' : '3.41rem' }}>
          <div className="headTop"  style={{ background: headFlag ? '#fff' : '', position: headFlag ? 'fixed' : '', color: headFlag ? '#000' : '' }}>
            <div className="TopLe" style={{ fontSize: headFlag ? '16px' : '' }} onClick={this.handleToCity.bind(this)}>
              <span>{storeName}</span>
              <i className="iconfont">&#xe605;</i>
            </div>
            <div className="TopRi">
              <span className="iconfont" style={{ visibility: headFlag ? '' : 'hidden' }}>&#xe63b;</span>
              <span className="iconfont">&#xe504;</span>
              <span className="iconfont">&#xe503;</span>
            </div>
          </div>
          <div className="headBot" onClick={this.handleToSearch.bind(this)}>
            <div className="search">
              <i>{searchName}</i>
            </div>
          </div>
        </HeaderContainer>
        <TopPosterContainer ref="scrolls" style={{ background: topPoster.backColor ? topPoster.backColor : '#FF4C48', color: topPoster.color ? topPoster.color : '#fff' }}>
          {
            topPoster.items ? topPoster.items.map((item) => (
              <div className="topPostBox" key={item.title}>
                <img src={item.imageUrl} />
                <span>{item.title}</span>
              </div>
            )) : <Fragment></Fragment>

          }

        </TopPosterContainer>
        <CenterPosterContainer>
          <div className="centerBox">
            {
              centerPoster.map((item) => (
                <div className="center" key={item.title}>
                  <img src={item.imageUrl} />
                  <span>{item.title}</span>
                </div>
              ))
            }
          </div>
        </CenterPosterContainer>
        {
          homeFlag ? <SliderContainer>
            <WingBlank>
              <Carousel
                autoplay={homeFlag}
                infinite
                dots={sliderFlag}
              >
                {slider.map(val => (
                  <img key={val.id}
                    src={val.imageUrl}
                    alt={val.title}
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                ))}
              </Carousel>
            </WingBlank>
          </SliderContainer> : <Fragment></Fragment>
        }
        {
          recommendCounter.length >= 1 ?
            <RecommendContainer>
              <div className="recomTop">
                <span>
                  专柜推荐
                </span>
                <i onClick={this.handleRecommendClick.bind(this, recommendCounter)}>
                  换一换
                </i>
              </div>
              <div className="recomBot">
                {
                  recommendCounter.map((item) => (
                    <div className="recomBox" key={item.traceId}>
                      <div className="imgBox">
                        <img src={item.logoImageUrl} />
                      </div>
                      <span>
                        {item.subTitle}
                      </span>
                    </div>
                  ))
                }
              </div>
            </RecommendContainer> : <Fragment></Fragment>
        }
        {
          counterProduct.length >= 1 ?
            <CounterContainer>
              <div className="couterTop">
                <span>
                  专柜活动
                </span>
                <i className="iconfont">
                  更多&#xe50e;
                </i>
              </div>
              {
                counterProduct.map((item, index) => (
                  <div className="active" key={index}>
                    <div className="activeTop">
                      <div className="brand">
                        <div className="brandLeft">
                          <div className="brandImg">
                            <img src="//img1.tg-img.com/product/201504/10/AB86E2E6-6FEF-44F6-BADC-7279A463671E.JPG!m" />
                          </div>
                          <div className="brandName">
                            <div className="brandNameTop">
                              {item.data.title}
                            </div>
                            <div className="brandNameBot">
                              <i className="iconfont">&#xe6bd;</i>
                              <span>
                                {item.data.subTitle}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="brandRight">
                          <i className="iconfont">&#xe602;</i>
                      订阅
                    </div>
                      </div>
                      <div className="activeTime">
                        <div className="activeName">
                          活动
                    </div>
                        <div className="actime">
                          <span>{item.data.activityObj.title}</span>
                          <span className="activeSpan">{item.data.activityObj.subTitle}</span>
                        </div>
                      </div>
                    </div>
                    <div className="activeBot">
                      {
                        item.data.items.slice(0, 3).map((ite) => (
                          <div className="activeCon" key={ite.id}>
                            <div className="conImg">
                              <img src={ite.imageUrl} />
                            </div>
                            <div className="conName">
                              {ite.title}
                            </div>
                            <div className="conPrice">
                              <span>￥{ite.originalPrice}</span>
                              <i>￥{ite.price}</i>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </CounterContainer> : <Fragment></Fragment>
        }
        <PageBot>
          哎呀~一不小心就到底了！  
        </PageBot>
        {
          goBackFlag?
          <GoBack>
          <i  onClick={this.handleGoBack.bind(this)} className="iconfont">&#xe677;</i>
        </GoBack>:<Fragment></Fragment>
        }
        
        </MarkerContainer>
      </PageContainer>
    );
  }
  handleToSearch(){
    this.props.history.push("/search");
  }
  handleGoBack(){
    // window.scrollTo(0,0)
    const currentY = document.documentElement.scrollTop || document.body.scrollTop
    scrollAnimation(currentY, 0)
  }
  handleRecommendClick(recommendCount) {
    let arr = recommendCount;
    for (let i = 1; i < arr.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    this.setState({
      recommendCounter: arr
    })
  }
  handleToCity() {
    this.props.history.push("/city");
  }
  componentDidMount() {
    let { cityId, storeId } = this.props;
    let _time = new Date().getTime();
    // !this.props.marketList[0] && this.props.handleAsyncMarket(cityId, storeId, _time);
    this.props.handleAsyncMarket(cityId, storeId, _time);
    this.props.handleAsyncStore(storeId, _time)
    //监听滚动条滚动
    thorttle(()=>{
      window.addEventListener('scroll', this.handleScroll.bind(this));
    },300)
  }
  handleScroll(event) {
    if (event.target.scrollingElement.scrollTop > 2) {
      this.setState({
        headFlag: true
      })
    } else {
      this.setState({
        headFlag: false
      })
    }
    if (event.target.scrollingElement.scrollTop > 100) {
      this.setState({
        goBackFlag: true
      })
    } else {
      this.setState({
        goBackFlag: false
      })
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    this.setState({
      headFlag: false,
      goBackFlag: false,
    })
  }
}

export default Market;
