import styled from "styled-components";

export const HeaderContainer = styled.div`
  width:100%;
  height:.38rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:99;
  padding:0 0.07rem;
  background-color: #fff;
  .headLe{
    font-size:.12rem;
    i{
      font-size:.12rem;
    }
    span{
      padding-left:0.03rem;
    }
  }
  .headCe{
    font-size:0.14rem;
  }
  .headRi{
    span{
      font-size:0.16rem;
      padding-left:0.1rem;
    }
  }
`
export const LimiteContainer = styled.div`
  width:100%;
  height:1.45rem;
  background-color: #FFF0F0;
  padding:0.07rem;
  display:flex;
  .limitImg{
    width:1.28rem;
    height:1.28rem;
    img{
      width:100%;
      height:100%;
    }
  }
  .limitText{
    width:1.7rem;
    margin-left:0.08rem;
    height:1.28rem;
    padding-top:0.03rem;
    .limitTitle{
      width:1.7rem;
      display: -webkit-box;
  　　-webkit-box-orient: vertical;
  　　-webkit-line-clamp: 2;
  　　overflow: hidden;
      height:0.4rem;
      margin-bottom:0.18rem;
      line-height:0.18rem;
      span{
        font-size:0.13rem;
        font-weight:bolder;

      }
    }
    .limitPrice{
      width:100%;
      height:0.28rem;
      padding-top:0.06rem;
      line-height:0.28rem;
      span{
        color:#ff4c48;
        font-weight:bolder;
        font-size:0.2rem;
      }
      i{
        font-style:normal;
        font-size:0.12rem;
        text-decoration:line-through;
        color:#666;
      }
    }
    .limitBuy{
      width:100%;
      margin-top:0.05rem;
      height:0.3rem;
      span{
        display:flex;
        background-color: #ff4c48;
        width:0.7rem;
        height:0.26rem;
        justify-content:center;
        align-items:center;
        font-weight:bolder;
        color:#fff;
        border-radius:0.5rem;
        font-size:0.12rem;
      }
    }
  }
`

export const ShopListContainer = styled.div`
  background-color: #fff;
  border-top:1px solid #ccc;
  .product{
    width:100%;
    height:1.25rem;
    padding:0.08rem;
    display:flex;
    .productImg{
      width:0.86rem;
      height:0.86rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .productText{
      flex:1;
      padding-left:0.1rem;
      .proName{
        width:2rem;
        display: -webkit-box;
    　　-webkit-box-orient: vertical;
    　　-webkit-line-clamp: 2;
    　　overflow: hidden;
        height:0.33rem;
        line-height:0.14rem;
        span{
          font-size:0.1rem;
          font-weight:bolder;
        }
      }
      .proActive{
        width:100%;
        height:0.2rem;
        span{
          border:1px solid #FF4C48;
          background-color: #FFF6F6;
          padding:0.01rem 0.05rem;
          font-size:0.08rem;
          color:#FF4C48;
          margin-right:0.06rem;
          border-radius:0.02rem;
        }
      }
      .proBuy{
        width:100%;
        margin-top:0.05rem;
        height:0.2rem;
        display:flex;
        justify-content:flex-end;
        span{
          display:flex;
          background-color: #ff4c48;
          width:0.6rem;
          height:0.2rem;
          justify-content:center;
          align-items:center;
          font-weight:bolder;
          color:#fff;
          border-radius:0.5rem;
          font-size:0.11rem;
        }
      }
      .proPrice{
        width:100%;
        height:0.28rem;
        padding-top:0.06rem;
        line-height:0.28rem;
        span{
          color:#ff4c48;
          font-weight:bolder;
          font-size:0.16rem;
        }
        i{
          font-style:normal;
          font-size:0.1rem;
          text-decoration:line-through;
          color:#666;
        }
      }
    }
  }
`