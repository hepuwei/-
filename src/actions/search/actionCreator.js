import {SearchListType} from "./actionTypes";
import {createAction} from "redux-actions";
import {searchListApi} from "api/search";

export const searchListAsyncAction = (_time)=>{
  
  return async (dispatch)=>{
    let searchListAction = createAction(SearchListType,(data)=>data);
    let data = await searchListApi(_time);
    dispatch(searchListAction(data));
  }
}