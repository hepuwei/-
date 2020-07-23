import {cityidAsyncAction,changeCityAction} from "actions/city/actionCreator"
export const mapStateToProps = (state)=>({
  cityId:JSON.parse(localStorage.getItem('cityid')) ||state.market.cityId,
  storeId:JSON.parse(localStorage.getItem('storeId')) || state.market.storeId,
  addressName:JSON.parse(localStorage.getItem('cityName')) || state.market.addressName,
  cityList:JSON.parse(localStorage.getItem('cityList')) || state.city.cityList
})

export const mapDispatchToProps = (dispatch)=>({
  handleAsyncCityId(hide,_time){
    dispatch(cityidAsyncAction(hide,_time))
  },
  handleAsyncChangeCity(newCity){
    dispatch(changeCityAction(newCity));
  }
})
