import React, { Component, Fragment } from 'react';
import { SkuSliderContainer, HeaderContainer, DetailContainer, BgContainer, UserInfoContainer, ProductInfoContainer, IntroListContainer, IntroFlagContainer, SkuContainer } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { NewsText } from "utils/dataTime";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { Carousel, WingBlank } from 'antd-mobile';
@connect(mapStateToProps, mapDispatchToProps)
@withRouter

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagOne: true,
      bgFlag: false,//背景蒙版
      useFlag: false,//使用说明,
      endtimes: 0,
      introFlag: false,//天狗权益标志
      skuSliderFlag: false,//数量标志
      skuNum: "11",//库存数量
      skuPrice: 0,//价钱
      skuClass: ""//分类
    }
  }
  render() {
    let { skuClass, skuPrice, skuNum, flagOne, bgFlag, useFlag, endtimes, introFlag, skuSliderFlag } = this.state;
    let { slider, useInfo, activityTime, productInfo, introList, sku, skuSlider } = this.props;
    endtimes = activityTime.endTime;
    // console.log(sku);
    // console.log(skuSlider);

    return (
      <Fragment>
        <HeaderContainer>
          <div className="headLe" onClick={this.handleGoBack.bind(this)}>
            <i className="iconfont">&#xe672;</i>
          </div>
          <div className="headCe">
            <span style={{ borderBottom: flagOne ? "1px solid #000" : "" }} onClick={this.handleToSome.bind(this)}>商品</span>
            <span style={{ borderBottom: flagOne ? "" : "1px solid #000" }} onClick={this.handleToDetailimg.bind(this)}>详情</span>
          </div>
          <div className="headRi">
            <span className="iconfont">&#xe504;</span>
            <span className="iconfont">&#xe748;</span>
          </div>
        </HeaderContainer>
        <DetailContainer>
          {
            flagOne ?
              <Fragment>
                <div className="slider">
                  <WingBlank>
                    <Carousel
                      autoplay={false}
                      dotActiveStyle={{ background: "#ff4c48" }}
                    >
                      {slider.length > 0 ? slider.map(val => (
                        <img key={val.scpCD}
                          src={val.imageUrl}
                        />
                      )) : <Fragment></Fragment>}
                    </Carousel>
                  </WingBlank>
                  {
                    useInfo !== "" ?
                      <div className="userInfo" onClick={this.handleUseInfo.bind(this)}>
                        使用说明
                  </div> : <Fragment></Fragment>
                  }
                </div>
                {
                  activityTime.length !== 0 ? <div className="activityTime">
                    <div className="activityTimeLeft">
                      <div className="activeImg">
                      </div>
                      <div className="activePrice">
                        <span>￥</span>{activityTime.price}
                      </div>
                      <div className="activeChushou">
                        <span>￥{activityTime.originalPrice}</span>
                        <span>{activityTime.sold}</span>
                      </div>
                    </div>
                    <div className="activityTimeRight">
                      <span>距结束仅剩</span>
                      <div>
                        <i>{NewsText(endtimes).day}</i>
                        <span>天</span>
                        <i>{NewsText(endtimes).hour}</i>
                        <span>:</span>
                        <i>{NewsText(endtimes).minutes}</i>
                        <span>:</span>
                        <i>{NewsText(endtimes).seconds}</i>
                      </div>
                    </div>
                  </div> :
                    <ProductInfoContainer>
                      <div className="productPrice">
                        <span>
                          ￥{productInfo.price}
                          <i>
                            ￥{productInfo.originalPrice}
                          </i>
                        </span>
                        <span>
                          {productInfo.soldStr}
                        </span>
                      </div>
                      <div className="productName">
                        <span>{productInfo.title}</span>
                        <span>{productInfo.promotion}</span>
                      </div>
                      <div className="productGroup">
                        <span>
                          <img src="//image1.51tiangou.com/tgou2/img2/product/default-store.png" />
                        </span>
                        <i>{productInfo.provider}</i>
                      </div>
                    </ProductInfoContainer>
                }
                {
                  activityTime.length !== 0 ?
                    <ProductInfoContainer>
                      <div className="productName">
                        <span>{productInfo.title}</span>
                        <span>{productInfo.promotion}</span>
                      </div>
                      <div className="productGroup">
                        <span>
                          <img src={productInfo.countryImageUrl} />
                        </span>
                        <i>{productInfo.provider}</i>
                      </div>
                    </ProductInfoContainer> : <Fragment></Fragment>
                }
                {
                  introList.length !== 0 ?
                    <IntroListContainer onClick={this.handleintroRightFlag.bind(this)}>
                      {
                        introList.map((item) => (
                          <span key={item.id}>
                            {item.title}
                          </span>
                        ))
                      }
                      <i className="iconfont">&#xe50e;</i>
                    </IntroListContainer> : <Fragment></Fragment>
                }
                {
                  sku ? <SkuContainer onClick={this.handleSkuSliderFlag.bind(this)}>
                    <span>
                      选择
                      {
                        sku.length !== 0 && sku[0].skuAttributeStr ?
                          sku[0].skuAttributeStr.split("；").map((item, index) => (
                            <i key={index}>{item.slice(0, item.indexOf("："))}</i>
                          )) : <i>数量</i>
                      }
                    </span>
                    <span className="iconfont">&#xe50e;</span>
                  </SkuContainer> : <Fragment></Fragment>
                }
              </Fragment> :
              <Fragment>2</Fragment>
          }
        </DetailContainer>
        {
          bgFlag ? <BgContainer onClick={this.handleBgClick.bind(this)}>
          </BgContainer> : <Fragment></Fragment>
        }
        {
          useFlag ? <UserInfoContainer>
            <span>使用说明</span>
            <span>{useInfo}</span>
            <div onClick={this.handleUserInfo.bind(this)}>
              确定
          </div>
          </UserInfoContainer> : <Fragment></Fragment>
        }
        {
          introFlag ? <IntroFlagContainer>
            <div className="introTitle">天狗权益</div>
            {
              introList.map((item) => (
                <div className="introBox" key={item.id}>
                  <i>
                    <img src={item.imageUrl} />
                  </i>
                  <div className="introRight">
                    <span>{item.title}</span>
                    <span>{item.subTitle}</span>
                    <span>{item.subTitle}</span>
                  </div>
                </div>
              ))

            }
            <div className="trueBut" onClick={this.handleintroFlag.bind(this)}>
              确定
          </div>
          </IntroFlagContainer> : <Fragment></Fragment>
        }
        {
          skuSliderFlag ? <SkuSliderContainer>
            <div className="skuSlider">
              <div className="skuImg">
                <img src={skuSlider.length !== 0 ? skuSlider[0].imageUrl : ""} />
              </div>
              <div className="skuPrice">
                <span>￥{skuPrice}</span>
                <span>{skuNum}</span>
                <span>{skuClass}</span>


              </div>
            </div>
          </SkuSliderContainer> : <Fragment></Fragment>
        }

      </Fragment>
    );
  }

  handleSkuSliderFlag() {
    this.setState({
      bgFlag: true,
      skuSliderFlag: true
    }, () => {
      this.handleGetSku();
    })
  }
  handleintroRightFlag() {
    this.setState({
      bgFlag: true,
      introFlag: true
    })
  }
  handleintroFlag() {
    this.setState({
      bgFlag: false,
      introFlag: false
    })
  }
  handleBgClick() {
    this.setState({
      bgFlag: false,
      useFlag: false,
      introFlag: false,
      skuSliderFlag: false
    })
  }
  handleUserInfo() {
    this.setState({
      bgFlag: false,
      useFlag: false
    })
  }
  handleUseInfo() {
    this.setState({
      bgFlag: true,
      useFlag: true
    })
  }
  handleToDetailimg() {
    this.setState({
      flagOne: false,
    })
  }
  handleToSome() {
    this.setState({
      flagOne: true,
    })
  }
  handleGoBack() {
    this.props.history.push("/limitedtime");
  }
  componentDidMount() {
    let id = this.props.location.pathname.split("/detail/")[1];
    let _time = new Date().getTime();
    this.props.handleAsyncDetail(id, true, _time)
    this.handleGetTime();
  }
  handleGetSku() {
    let { sku } = this.props;
    var num = 0;
    var priceS = sku[0].price;
    this.setState({
      skuPrice: priceS
    })
    for (let i = 0; i < sku.length; i++) {
      num += sku[i].remainQty;
    }
    if (num > 50) {
      this.setState({
        skuNum: "库存充足"
      })
    } else if (num < 50 && num > 0) {
      this.setState({
        skuNum: "库存" + num + "件"
      })
    }
    if (sku.length !== 0 && sku[0].skuAttrMap) {
      var str = [];
      for (var key in sku[0].skuAttrMap) {
        str.push(key);
      }
      this.handleGetSkuList()
    }
  }
  
  handleGetTime() {
    this.timer = setInterval(() => {
      this.setState({
        endtimes: this.endtimes - 1
      })
    }, 1000)
  }
  
  handleGetSkuList(){
    let {sku} =this.props;
    console.log(sku);
    for(let i =0;i<sku.length;i++){
      // let skuLetter = sku[i].
    }
  }
  componentWillUnmount() {
    // this.props.handleClear()
    clearInterval(this.timer)
  }
}

export default Detail;

// [
//   {
//     "黑色":[
//       {
//         id:productSkuId,
//         img:imageUrl,
//         size:[]
//       }
//     ]
//   }
// ]