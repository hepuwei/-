import http from "utils/request";

export const searchwebApi = (word)=>http.post({
  url:"/search/mall/queryCompleteWords",
  data:{
    word
  }
})


export const searchListApi = (_time)=>http.get({
  url:"/ajax/shopping/page/sale/list.node",
  data:{
    _:_time
  }
})