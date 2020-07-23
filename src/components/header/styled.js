import styled from "styled-components";

export const HeaderContainer = styled.div`
  width:100%;
  height:.38rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  z-index:99;
  position:fixed;
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
    }
  }
`