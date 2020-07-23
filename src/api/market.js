import http from "utils/request"

export const marketApi= (cityId,storeId,_time)=>http.get({
  url:"/ajax/shopping/mall/index/init.node",
  data:{
    cityId:cityId,
    storeId:storeId,
    _:_time
  }
})

export const storeInfoApi = (storeId,_time) =>http.get({
  url:"/api/publics/store/queryStoreInfoById",
  data:{
    storeId,
    _:_time
  }
})

