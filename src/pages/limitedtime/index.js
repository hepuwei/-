import React, { useState, useContext, useEffect, Fragment } from "react";
import { PageContainer } from "common/styled";
import { HeaderContainer, LimiteContainer, ShopListContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { connect } from "react-redux";

function Limitedtime(props) {
  const history = useHistory();
  let _time = new Date().getTime();
  const [tabIndex, setTabIndex] = useState(0);
  const [childIndex, setChildIndex] = useState(0);
  const [currentView, setCurrentView] = useState(1);

  useEffect(() => {
    props.handleAsynclimited(_time, tabIndex, childIndex, currentView)
  }, [currentView]);

  useEffect(() => {
    function getScrollTop() {
      let scrollTop = document.documentElement.scrollTop;
      // console.log("距离顶部的高度：" + Math.round(scrollTop));
      return  Math.round(scrollTop);
    }

    //获取可视范围的高度
    function getClientHeight() {
      var clientHeight = 0;
      // console.log(document.body.clientHeight + ",,,,,,," + document.documentElement.clientHeight);
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
      }
      // console.log("可视区域高度：" + clientHeight);
      return clientHeight;
    }
    //获取文档高度
    function getScrollHeight() {
      var eleHeight;
      eleHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      // console.log("文档高度：" + eleHeight);
      return eleHeight;
    }
    window.onscroll = () => {
      getScrollTop();
      getClientHeight();
      getScrollHeight();
      if (getScrollTop() + getClientHeight() == getScrollHeight()) {
        if(props.limitFlag){
          setCurrentView(currentView+1)
        }
      }
    }
  })

  return (
    <PageContainer>
      <HeaderContainer>
        <div className="headLe" onClick={() => history.push("/search")}>
          <i className="iconfont">&#xe672;</i>
          <span>返回</span>
        </div>
        <div className="headCe">
          <span>限时·买必省</span>
        </div>
        <div className="headRi">
          <span className="iconfont">&#xe504;</span>
          <span className="iconfont">&#xe748;</span>
        </div>
      </HeaderContainer>
      {
        props.limitList.length > 0 ? <LimiteContainer onClick={()=>history.push("./detail/"+props.limitList[0].data.itemId)}>
          <div className="limitImg">
            <img src={props.limitList[0].data.imageUrl} />
          </div>
          <div className="limitText">
            <div className="limitTitle">
              <span>{props.limitList[0].data.title}</span>
            </div>
            <div className="limitPrice">
              <span>￥{props.limitList[0].data.originalPrice}</span>
              <i>￥{props.limitList[0].data.price}</i>
            </div>
            <div className="limitBuy">
              <span>去抢购</span>
            </div>
          </div>
        </LimiteContainer> : <Fragment></Fragment>
      }
      {
        props.limitList.length > 0 ?
          props.limitList.slice(1).map((item) => (
            <ShopListContainer key={item.data.itemId} onClick={()=>history.push("/detail/"+item.data.itemId)}>
              <div className="product">
                <div className="productImg">
                  <img src={item.data.imageUrl} />
                </div>
                <div className="productText">
                  <div className="proName">
                    <span>{item.data.title}</span>
                  </div>
                  <div className="proActive">
                    {
                      item.data.couponList.length !== 0 ?
                        item.data.couponList.map((child, index) => (
                          <span key={index}>{child}</span>
                        )) : <Fragment></Fragment>
                    }
                  </div>
                  <div className="proBuy">
                    <span>去抢购</span>
                  </div>
                  <div className="proPrice">
                    <span>￥{item.data.price}</span>
                    <i>￥{item.data.originalPrice}</i>
                  </div>
                </div>
              </div>
            </ShopListContainer>
          )) : <Fragment></Fragment>
      }
    </PageContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Limitedtime);