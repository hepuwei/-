import {handleActions} from "redux-actions";
import {LimiteTimeType,LimitClearType} from "actions/limitedtime/actionTypes";

const defaultState = {
  limitedList:[],
  limitFlag:true
}

export default handleActions({
  [LimiteTimeType]:(state,action)=>{
    let limiteTimeListState = JSON.parse(JSON.stringify(state));
    if(action.payload.data.length<=1){
      limiteTimeListState.limitFlag=false
    }
    var limitArr = [];
    for(var i =0;i<action.payload.data.length;i++){
      if(action.payload.data[i].key==="product"){
        limitArr.push(action.payload.data[i]);
        limiteTimeListState.limitedList = limiteTimeListState.limitedList.concat(limitArr);

      }
    }
    for(var i =0;i<limiteTimeListState.limitedList.length-1;i++){
      for(var j = i+1;j<limiteTimeListState.limitedList.length;j++){
        if(limiteTimeListState.limitedList[i].data.id === limiteTimeListState.limitedList[j].data.id){
          limiteTimeListState.limitedList.splice(j--,1);
        }
      }
    }
    console.log(limiteTimeListState.limitedList);
    return limiteTimeListState;
  },
  [LimitClearType]:(state,action)=>{
    let LimiteClearState = JSON.parse(JSON.stringify(state));
    LimiteClearState.limitedList = [];
    return LimiteClearState;
  }
},defaultState)