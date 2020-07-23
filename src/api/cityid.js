import http from "utils/request";

export const cityIdApi =(hide,_time)=> http.get({
  url:"/api/publics/city/hot/store",
  data:{
    hide,
    _:_time
  }
})
