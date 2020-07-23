import {handleActions} from "redux-actions";
import {MarketType,StoreInfoType,} from "actions/market/actionTypes"
import { changeCityType } from "actions/city/actionTypes";


const defaultState = {
  cityId:2557,
  storeId:239,
  marketList:[],
  storeName:"",
  addressName:"",
  counterProduct:[]
}

export default handleActions({
  [MarketType]:(state,action)=>{
    let marketListState = JSON.parse(JSON.stringify(state));
    marketListState.marketList=action.payload.data;
    for(var i =0;i<action.payload.data.length;i++){
      if(action.payload.data[i].key==="counterProductGroup"){
        marketListState.counterProduct.push(action.payload.data[i]);
      }
    }
    return marketListState;
  },
  [StoreInfoType]:(state,action)=>{
    let storeInfoState = JSON.parse(JSON.stringify(state));
    storeInfoState.storeName = action.payload.data.store.name;
    storeInfoState.addressName = action.payload.data.storeAddress.cityName;
    return storeInfoState;
  },
  [changeCityType]:(state,action)=>{
    let ChangeCityState = JSON.parse(JSON.stringify(state));
    ChangeCityState.cityId = action.payload.storeAddress.fkCityId;
    ChangeCityState.storeId = action.payload.id;
    localStorage.setItem('cityid',JSON.stringify(action.payload.storeAddress.fkCityId))
    localStorage.setItem('storeId',JSON.stringify(action.payload.id))
    ChangeCityState.counterProduct = []
    return ChangeCityState;
  }

},defaultState)