import {MarketType,StoreInfoType} from "./actionTypes";
import {marketApi,storeInfoApi} from "api/market";
import {createAction} from "redux-actions";

export const marketAsyncAction = (cityId,storeId,_time)=>{
  return async (dispatch)=>{
    let marketAction = createAction(MarketType,(data)=>data)
    let data = await marketApi(cityId,storeId,_time);
    dispatch(marketAction(data))
  }
}

export const StoreInfoAsyncAction = (storeId,_time)=>{
  return async (dispatch)=>{
    let storeInfoAction = createAction(StoreInfoType,(data)=>data);
    let data = await storeInfoApi(storeId,_time);
    localStorage.setItem('cityName',JSON.stringify(data.data.storeAddress.cityName))
    localStorage.setItem('cityid',JSON.stringify(data.data.storeAddress.fkCityId))
    localStorage.setItem('storeId',JSON.stringify(data.data.storeAddress.fkStoreId))
    dispatch(storeInfoAction(data));
  }
}