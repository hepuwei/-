import {DetailTypes,detailClearType} from "./actionTypes";
import {createAction} from "redux-actions";
import {detailApi} from "api/detail";

export const detailAsyncAction = (id,depot,_time)=>{
  return async (dispatch)=>{
    let detailAction = createAction(DetailTypes,data=>data);
    let data =await detailApi(id,depot,_time);
    dispatch(detailAction(data));
  }
}

export const detailClearAction = ()=>{
  return (dispatch)=>{
    let detailClearAc = createAction(detailClearType,data=>data);
    dispatch(detailClearAc);
  }
}
