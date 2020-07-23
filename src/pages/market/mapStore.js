import {marketAsyncAction,StoreInfoAsyncAction} from "actions/market/actionCreator";

export const mapStateToProps = (state)=>({
  cityId:JSON.parse(localStorage.getItem('cityid')) ||state.market.cityId,
  storeId:JSON.parse(localStorage.getItem('storeId')) || state.market.storeId,
  marketList:state.market.marketList,
  counterProduct:state.market.counterProduct
})

export const mapDispatchToProps = (dispatch)=>({
  handleAsyncMarket(cityId,storeId,_time){
    dispatch(marketAsyncAction(cityId,storeId,_time))
  },
  handleAsyncStore(storeId,_time){
    dispatch(StoreInfoAsyncAction(storeId,_time))
  }
  
})