import http from "utils/request";

export const detailApi = (id,depot,_time)=>http.get({
  url:"/ajax/product/listing/init.node",
  data:{
    id,
    depot,
    _:_time
  }
})