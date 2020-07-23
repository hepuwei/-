import styled from "styled-components";

export const HeaderContainer = styled.div`
  width:100%;
  height:.38rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:999;
  padding:0 0.07rem;
  background-color: #fff;
  .headLe{
    font-size:.12rem;
    i{
      font-size:.16rem;
    }

  }
  .headCe{
    font-size:0.14rem;
    span:nth-child(1){
      padding-bottom:0.06rem;
      margin-right:0.2rem;
    }
    span:nth-child(2){
      margin-left:0.35rem;
      padding-bottom:0.06rem;
    }
  }
  .headRi{
    font-size:0.16rem;
    span:nth-child(1){
      padding-right:0.1rem;
    }
    span{
      font-size:0.17rem;
      padding-left:0.1rem;
    }
  }
`
export const BgContainer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  background-color: #000;
  opacity:0.3;
`
export const UserInfoContainer = styled.div`
  position:absolute;
  bottom:0;
  right:0;
  width:100%;
  height:3.5rem;
  z-index:99;
  background-color: #fff;
  span:nth-child(1){
    position:absolute;
    font-size:0.13rem;
    top:0.1rem;
    left:0.1rem;
    color:#666;
  }
  span:nth-child(2){
    position:absolute;
    font-size:0.11rem;
    top:0.4rem;
    left:0.1rem;
    color:#000;
  }
  div{
    position:absolute;
    bottom: 0;
    right: 0;
    width:100%;
    height:.38rem;
    background-color: #ff4c48;
    color:#fff;
    font-size:0.14rem;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`
export const DetailContainer = styled.div`
  position:absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top:0.39rem;
  font-size:.16rem;
  background-color: #fff;
  .slider{
    position:relative;
    width:100%;
    height:3.2rem;
    .am-wingblank{
      width:100%;
      height:100%;
      margin:0;
      .am-carousel{
        width:100%;
        height:100% !important;
        .slider-frame{
          width:100%;
          height:100% !important;
        }
      }
    }
    .userInfo{
      position:absolute;
      right:10px;
      bottom:10px;
      background: rgba(255,255,255,.7);
      border-radius: 20px;
      z-index: 1;
      color:#666;
      border: 1px solid #ebebeb;
      padding: 4px 8px;
      font-size:0.1rem;
    }
  }
  .activityTime{
    width:100%;
    height:0.43rem;
    background-color: #ff4c48;
    padding:0.05rem 0.08rem;
    display:flex;
    justify-content:space-between;
    .activityTimeLeft{
      width:1.45rem;
      height:100%;
      display:flex;
      align-items:center;
      .activeImg{
        width:0.26rem;
        height:0.23rem;
        background: url(//image1.51tiangou.com/tgou2/img2/product/img-xianshimiaosha.png) no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
      }
      .activePrice{
        width:0.65rem;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.24rem;
        color:#fff;
        span{
          font-size:0.16rem;
          overflow: hidden;
          padding-top:0.05rem;
        }
      }
      .activeChushou{
        width:0.35rem;
        height:100%;
        font-size:0.09rem;
        display:flex;
        flex-direction:column;   
        justify-content:center;
        align-items:center; 
        span:nth-child(1){
          text-decoration:line-through;
          color:#FF888A;
        }   
        span:nth-child(2){
          color:#FFF;
        }   
      }
    }
    .activityTimeRight{
      width:1.37rem;
      height:100%;
      display:flex;
      align-items:flex-end;
      flex-direction:column;
      span{
        color:#fff;
        font-size:0.1rem;
        margin:0 0.03rem;
      }
      div{
        font-size:0.1rem;
        display:flex;
        align-items:center;
        padding-top:0.04rem;
        i{
          width:0.2rem;
          border-radius:0.02rem;
          display:inline-block;
          height:0.18rem;
          font-style:normal;
          line-height:0.18rem;
          text-align:center;
          background-color: #fff;
        }
      }
    }
  }
`
export const ProductInfoContainer = styled.div`
  width:100%;
  padding:0.1rem 0.08rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  .productPrice{
    margin-top:0.05rem;
    height:0.18rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
      font-size:0.16rem;
      color:#ff4c48;
      i{
        font-size:0.1rem;
        font-style:normal;
        color:#666;
        text-decoration:line-through;
      }
    }
    span:nth-child(2){
        font-size:0.1rem;
        font-style:normal;
        color:#666;
    }
  }
  .productName{
    width:100%;
    height:0.41rem;
    display:flex;
    flex:1;
    line-height:0.18rem;
    flex-direction:column;
    justify-content:space-around;
    span:nth-child(1){
      color:#222;
      font-size:0.12rem;
    }
    span:nth-child(2){
      color:#666;
      font-size:0.1rem;
    }
  }
  .productGroup{
    width:100%;
    height:0.3rem;
    display:flex;
    padding-top:0.08rem;
    flex-direction:row;
    span{
      width:0.12rem;
      display:block;
      height:0.12rem;
      img{
        width:100%;
        height:100%;
      }
    }
    i{
      font-size:0.11rem;
      color:#666;
      font-style:normal;
      padding-left:0.1rem;
    }
  }
`

export const IntroListContainer = styled.div`
  width:100%;
  height:0.5rem;
  padding:0.1rem;
  position:relative;
  font-size:0.1rem;
  color:#666;
  display:flex;
  align-items:center;
  border-top:0.08rem solid #ebebeb;
  border-bottom:0.08rem solid #ebebeb;
  span{
    padding-right:0.15rem;
  }
  i{
    position:absolute;
    right:0.1rem;
    font-size:0.25rem;
    font-weight:100;
  }
`

export const IntroFlagContainer = styled.div`
   position:absolute;
    bottom:0;
    right:0;
    width:100%;
    height:3.5rem;
    z-index:99;
    background-color: #fff;
    .introTitle{
    font-size:0.13rem;
    width:100%;
    height:0.3rem;
    color:#666;
    padding-top:0.15rem;
    padding-left:0.12rem;
  }
  .introBox{
    display:flex;
    border-bottom:1px solid #ccc;
    margin:0 0.12rem;
    padding:0.15rem 0;
    i{
      display:block;
      width:0.16rem;
      height:0.2rem;
      padding-top:0.04rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .introRight{
      flex:1;
      padding-left:0.1rem;
      display:flex;
      flex-direction:column;
      span:nth-child(1){
        color:#222;
        font-size:0.12rem;
      }
      span:nth-child(2){
        color:#666;
        font-size:0.1rem;
        padding-top:0.06rem;
        line-height:0.16rem;
      }
    }
  }
    .trueBut{
    position:absolute;
    bottom: 0;
    right: 0;
    width:100%;
    height:.38rem;
    background-color: #ff4c48;
    color:#fff;
    font-size:0.14rem;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`

export const SkuContainer = styled.div`
  width:100%;
  height:0.35rem;
  padding:0.08rem;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  display:flex;
  align-items:center;
  justify-content:space-between;
  span:nth-child(1){
    font-size:0.12rem;
    color:#666;
    i{
      font-style:normal;
      color:#222;
      font-size:0.1rem;
      padding-left:0.1rem;
    }
  }
  span:nth-child(2){
    font-size:0.25rem;
    color:#666;
  }
`

export const SkuSliderContainer = styled.div`
  width:100%;
  position:absolute;
  bottom:0.5rem;
  padding:0.08rem; 
  background-color: #fff;
  .skuSlider{
    width:100%;
    height:0.74rem;
    position: relative;
    .skuImg{
      width:0.77rem;
      height:0.77rem;
      position: absolute;
      top:-0.3rem;
      border: 1px solid #ebebeb;
      left:0;
      img{
        width:100%;
        height:100%;
      }
    }
    .skuPrice{
      padding-top:0.1rem;
      margin-left:0.87rem;
      span:nth-child(1){
        font-size:0.16rem;
        color:#ff4c48;
        display:block;
      }
      span:nth-child(2){
        font-size:0.1rem;
        color:#000;
        padding-top:0.03rem;
        display:block;
      }
      span:nth-child(3){
        font-size:0.1rem;
        padding-top:0.03rem;
        color:#000;
        display:block;
      }
    }
  }
`