import styled from "styled-components";

export const MarkerContainer = styled.div`
  padding-bottom:0.43rem;
`

export const HeaderContainer = styled.div`
  width:100%;
  /* height:0.68rem; */
  /* background:url(${props => props.bgColor}); */
  .headTop{
    width:100%;
    height:0.37rem;
    display:flex;
		justify-content:space-between;
    padding:0 0.1rem;
    z-index:999;
    align-items:center;
    color:#fff;
    .TopLe{
      font-size:20px;
      i{
        margin-left:0.05rem;
        font-size:18px;
      }
    }
    .TopRi{
      width:0.8rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      span{
        font-size:22px;
      }
    }
  }
  .headBot{
      width:100%;
      padding:0 0.08rem;
      height:0.31rem;
      line-height:0.31rem;
      .search{
        background: hsla(0,0%,100%,.9);
        height:100%;
        border-radius:0.02rem;
        padding:0 0.1rem;
        i{
          font-size:0.11rem;
          color:#999;
          font-style:normal;
        }
      }
  }
`

export const TopPosterContainer = styled.div`
width:100%;
height:0.75rem;
display:flex;
justify-content:space-around;
align-items:center;
padding:0.08rem 0.1rem 0 0.1rem;
.topPostBox{
  display:flex;
  flex-direction:column;
  width:0.77rem;
  height:0.6rem;
  align-items:center;
  justify-content:space-around;
  img{
    width:0.46rem;
  }
  span{
    font-size:0.1rem;
  }
}
`

export const CenterPosterContainer = styled.div`
  width:100%;
  padding-bottom:0.1rem;
  background-color: #fff;
  height:1.3rem;
  .centerBox{
    width:100%;
    .center{
      width:33.3%;
      height:0.65rem;
      padding-top:0.1rem;
      float:left;
      text-align:center;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      img{
        display: inline-block;
        width:0.35rem;
        height:0.35rem;;
      }
      span{
        font-size:0.1rem;
        color:#666;
        line-height:2;
      }
    }
  }
`

export const SliderContainer = styled.div`
  width:100%;
  height:1.04rem;
  margin-top:0.1rem;
  padding:0.1rem 0 ;
  .slider{
    border-radius:10px;
  }
`

export const RecommendContainer = styled.div`
  width:100%;
  height:1.7rem;
  margin-top:0.1rem;
  padding-bottom:0.1rem;
  border-top:0.1rem solid rgb(238, 238, 238);
  .recomTop{
    width:100%;
    height:0.5rem;
    padding:0.1rem 0.06rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
      font-weight:bold;
      font-size:0.17rem;
    }
    i{
      font-style:normal;
      font-size:0.12rem;
    }
  }
  .recomBot{
    height:1rem;
    box-sizing:border-box;
    margin-left:0.06rem;
    margin-right:0.06rem;
    overflow:hidden;
    padding-top:0.1rem;
    background:url("//image1.51tiangou.com/tgou2/img2/store/new/bg-counter.png") center center / 100% 100% no-repeat;
    .recomBox{
      width:25%;
      height:0.81rem;
      display:flex;
      float:left;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      margin-bottom:0.05rem;
      .imgBox{
        width:0.56rem;
        height:0.56rem;
        img{
         width:100%;
         height:100%;
         border-radius:0.5rem;
        }
      }
      span{
        font-size:0.1rem;
      }
      
    }
  }
`

export const CounterContainer = styled.div`
  width:100%;
  margin-top:0.1rem;
  border-top:0.1rem solid rgb(238, 238, 238);
  .couterTop{
    width:100%;
    height:0.5rem;
    padding:0.1rem 0.06rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
      font-weight:bold;
      font-size:0.17rem;
    }
    i{
      font-style:normal;
      font-size:0.12rem;
    }
  }
  .active{
    border-top:1px solid #ccc;
    .activeTop{
      width:100%;
      height:0.76rem;
      padding:0 0.05rem;
      .brand{
        width:100%;
        height:0.58rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .brandLeft{
          padding:0.06rem 0;
          display:flex;
          .brandImg{
            width:0.4rem;
            height:0.4rem;
            img{
              width:100%;
              height:100%;
            }
          }
          .brandName{
            display:flex;
            margin-left:0.1rem;
            flex-direction:column;
            justify-content:space-between;
            .brandNameTop{
                font-size:0.14rem;
            }
            .brandNameBot{
              display:flex;
              align-items:center;
              i{
                font-size:0.12rem;
              }
              span{
                padding-left:0.03rem;
                font-size:0.1rem;
              }
            }
          }
        }
        .brandRight{
          width:0.5rem;
          height:0.22rem;
          border:1px solid #ccc;
          font-size:0.1rem;
          display:flex;
          justify-content:center;
          align-items:center;
          border-radius:0.5rem;
          i{
            font-size:0.1rem;
            padding-right:0.03rem;
          }
        }
      }
      .activeTime{
        width:100%;
        height:0.16rem;
        background-color: #ffeded;
        display:flex;
        align-items:center;
        color:#ff4c48;
        font-size:0.1rem;
        .activeName{
          width:0.4rem;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .actime{
          flex:1;
          padding-left:0.1rem;
          padding-right:0.2rem;
          display:flex;
          align-items:center;
          justify-content:space-between;
          .activeSpan{
            font-size:0.08rem;
          }
        }
      }
    }
    .activeBot{
      width:100%;
      height:1.53rem;
      display:flex;
      padding:0.05rem 0.05rem;
      .activeCon{
        width:33%;
        height:100%;
        padding:1%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        .conImg{
          width:0.93rem;
          height:0.93rem;
          img{
            width:100%;
            height:100%;
          }
        }
        .conName{
          font-size:0.12rem;
          width:100%;
          font-weight:bold;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
        .conPrice{
          font-size:0.1rem;
          span{
            color:#ff4c48;
          }
          i{
            color:#999;
            text-decoration:line-through;
            font-size:0.08rem;
            font-style:normal;
            padding-left:0.1rem;
          }
        }
      }
    }
  }
`

export const PageBot = styled.div`
width:100%;
height:0.3rem;
display:flex;
justify-content:center;
align-items:center;
font-size:0.12rem;

`

export const GoBack = styled.div`
  position:fixed;
  right:0.2rem;
  bottom:0.6rem;
  i{
    font-size:0.24rem;
  }
`