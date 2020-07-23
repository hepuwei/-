import styled from "styled-components";

export const SearchContainer = styled.div`
  width:100%;
  height:0.26rem;
  margin:0.1rem 0;
  padding:0 0.06rem;
  display:flex;
  line-height:0.26rem;
  .search{
    width:87%;
    height:100%;
    background-color: #eeeff4!important;
    padding:0 0.05rem 0 0;
    display:flex;
    align-items:center;
    .fangdajing{
      color:#ccc;
      width:0.3rem;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    input{
      border:none;
      background-color: #eeeff4!important;
      flex:1;
      color:#666;
      font-size:0.12rem;
      outline:none;
    }
    .quxiao{
      width:0.15rem;
      height:0.15rem;
      border-radius:0.5rem;
      background-color:#ccc;
      display:flex;
      justify-content:center;
      color:#fff;
      font-size:0.11rem;
      align-items:center;
    }
    .mendian{
      width:0.5rem;
      span{
        font-size:0.11rem;
      }
      .sou{
        padding-left:0.02rem;
      }
    }
  }
  .cancel{
    color:#666;
    font-size:0.12rem;
    padding-left:0.1rem;
  }
`

export const SearchListContainer = styled.div`
  width:100%;
  height:100%;
  padding:0 0.2rem;
  position: absolute;
  background-color: #fff;
  z-index:99;
  ul{
    li{
      font-size:0.12rem;
      height:0.35rem;
      line-height:0.35rem;
      border-bottom:1px solid #efefef;
      span{
        float:right;
        font-size:0.25rem;
      }
    }
  }
`
export const SaleListContainer = styled.div`
  margin:0 0.1rem 0 0.1rem;
  height:1.2rem;
  border-radius:3px;
  position:relative;
  border:4px solid rgb(255, 235, 235);
  .stopTime{
    position:absolute;
    top:0;
    width:0.35rem;
    height:100%;
    font-size:0.14rem;
    color:#ff4c48;
    font-weight:bold;
    writing-mode: vertical-lr;
    background-color: rgb(255, 235, 235);
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  ul{
    height:100%;
    white-space:nowrap;
    margin-left:0.35rem;
    overflow-x:scroll;
    display:flex;
    z-index:99;
    li{
      height:100%;
      width:0.89rem;
      background-color:#fff;
      border-right:4px solid rgb(255, 235, 235);
      .timeImg{
        width:0.84rem;
        height:0.87rem;
        position:relative;
        display:flex;
        justify-content:center;
        img{
          width:100%;
          height:100%;
        }
        span{
          position:absolute;
          bottom:0;
          display:block;
          width:0.4rem;
          height:0.14rem;
          font-size:0.1rem;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius:0.2rem;
          color:#ff4c48;
          border:1px solid rgb(255, 76, 72);
          background-color:rgba(255, 255, 255, 0.8);
        }
      }
      .timePrice{
          width:100%;
          padding:0.02rem;
          span{
            font-size:0.12rem;
            font-weight:bold;
            color:#ff4c48;
          }
          i{
            font-style:normal;
            font-size:0.08rem;
            color:#999;
            text-decoration:line-through;
            padding-left:0.15rem;
          }
      }
    }    
    .more{
      width:0.8rem;
      border-right:0;
      writing-mode: vertical-lr;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:0.12rem;
      color:#999;
      letter-spacing:0.1rem;
    }
  }
`