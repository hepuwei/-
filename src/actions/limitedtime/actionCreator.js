import {LimiteTimeType,LimitClearType} from "./actionTypes";
import {limitedApi} from "api/limitedtime";
import {createAction} from "redux-actions";

export const limitedAsyncAction = (_time,tabIndex,childIndex,currentView)=>{
  return async (dispatch)=>{
    let limiteAction = createAction(LimiteTimeType,data=>data);
    let data = await limitedApi(_time,tabIndex,childIndex,currentView);
    dispatch(limiteAction(data));
  }
}

export const LimitClearAsyncAction = ()=>{
  return (dispatch)=>{
    let limitClearAction = createAction(LimitClearType,data=>data);
    dispatch(limitClearAction())
  }
}