import {SearchListType} from "actions/search/actionTypes";
import {handleActions} from "redux-actions";

const defaultState = {
  searchList:[]
}

export default handleActions({
  [SearchListType]:(state,action)=>{
    let searchListState = JSON.parse(JSON.stringify(state));
    for(let i = 0;i<action.payload.data.length;i++){
      if(action.payload.data[i].key==="product"){
        searchListState.searchList.push(action.payload.data[i]);
      }
    }
    return searchListState;
  }
},defaultState)