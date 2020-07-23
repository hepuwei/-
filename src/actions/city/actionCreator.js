import {cityIdType,changeCityType} from "./actionTypes";
import {cityIdApi} from "api/cityid";
import {createAction} from "redux-actions";

export const cityidAsyncAction = (hide,_time)=>{
  return async (dispatch)=>{
    let cityidAction = createAction(cityIdType,(data)=>data);
    let data = await cityIdApi(hide,_time);
    dispatch(cityidAction(data));
  }
}

export const changeCityAction=(newCity)=>{
  return (dispatch)=>{
    let changAction = createAction(changeCityType,(data)=>data);
    dispatch(changAction(newCity))
  }
}
