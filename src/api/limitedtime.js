import http from "utils/request";
export const limitedApi = (_time,tabIndex,childIndex,currentView)=>http.get({
  url:"/ajax/shopping/page/sale/list.node",
  data:{
    _:_time,
    tabIndex,
    childIndex,
    currentView
  }
})