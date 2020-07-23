import styled from "styled-components";

export const PageContainer = styled.div`
  position:absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size:.16rem;
  background-color: rgb(238, 238, 238);`

export const NowCityContainer = styled.div`
  width:100%;
  height:0.28rem;
  background-color: #fff;
  margin-top:0.38rem;
  font-size:0.1rem;
  line-height:0.28rem;
  padding-left:0.12rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 4px 0px;
  span{
    margin-left:0.1rem;
    color:#ff4c48;
  }
`

export const CityMarketContainer = styled.div`
  position:absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top:0.66rem;
  margin-top:0.1rem;
  bottom:0;
  z-index:2;
  display:flex;
  .city{
    width:0.98rem;
    padding:0 0.07rem;
    overflow-y:scroll;
    background-color:#fafafa;
    .cityBox{
      width:100%;
      font-size:0.12rem;
      p{
        padding:0.05rem 0;
      }
      .cityName{
        padding:0.05rem 0 ;
        span{
          width:100%;
          display:block;
        }
      }
    }
  }
  .market{
    width:100%;
    background-color: #fff;
    padding:0.1rem 0.1rem 0 0.25rem;
    .marketTop{
      width:100%;
      display:flex;
      font-size:.1rem;
      height:0.2rem;
      border:1px solid #ff4c48;
      color:#ff4c48;
      span{
        width:50%;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .active{
        color:#fff;
        background-color: #ff4c48;
      }
    }
    .marketBot{
      width:100%;
      height:100%;
      .marketOne{
        padding:0.1rem 0;
        span{
          font-size:0.12rem;
        }
      }
    } 
  }
`