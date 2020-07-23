import { handleActions } from "redux-actions";
import { cityIdType } from "actions/city/actionTypes";

const defaultState = {
  cityList : []
}

export default handleActions({
  [cityIdType]: (state, action) => {
    let cityIdState = JSON.parse(JSON.stringify(state));
    let cityListArr = [];
    for (var i = 0; i < action.payload.data.length; i++) {
      if (action.payload.data[i].code) {
        let letterFirst = action.payload.data[i].code.slice(0, 1).toUpperCase();
        if (isCityList(letterFirst)) {
          cityListArr.push({ index: letterFirst, list: [{ id: action.payload.data[i].id, name: action.payload.data[i].name, storeList: action.payload.data[i].storeList }] })
        } else {
          for (var j = 0; j < cityListArr.length; j++) {
            if (cityListArr[j].index === letterFirst) {
              cityListArr[j].list.push({ id: action.payload.data[i].id, name: action.payload.data[i].name, storeList: action.payload.data[i].storeList });
              break;
            }
          }
        }
      }
    }
    function isCityList(letterFirst) {
      var flag = true;
      for (var k = 0; k < cityListArr.length; k++) {
        if (cityListArr[k].index === letterFirst) {
          flag = false;
          break;
        }
      }
      return flag;
    }
    cityListArr.sort((a,b)=>{
      if(a.index>b.index){
        return 1;
      }else{
        return -1;
      }
    })
    cityIdState.cityList = cityListArr;
    localStorage.setItem('cityList',JSON.stringify(cityIdState.cityList))
    return cityIdState;
  },
  
}, defaultState)

//cityMarketList:[
//   {
//     index:A,
//     list:[
          // {
          //   id,
          //   name,
          //   storeList
          // }
//     ]
//   }
// ]