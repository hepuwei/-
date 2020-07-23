import {DetailTypes,detailClearType} from "actions/detail/actionTypes";
import {handleActions} from "redux-actions";

const defaultState = {
  slider:[],//轮播图
  useInfo:"",//使用说明
  activityTime:[],//活动倒计时
  productInfo:[],//商品名称
  introList:[],//大商狗承诺
  sku:[],//数量或分类
  skuSlider:[],//颜色图片
}

export default handleActions({
  [DetailTypes]:(state,action)=>{
    let detailListState = JSON.parse(JSON.stringify(state));
    console.log(action.payload);
    detailListState.slider=[];
    detailListState.useInfo="";
    detailListState.activityTime=[];
    detailListState.productInfo=[];
    detailListState.introList=[];
    detailListState.sku=[];
    for(var i =0;i<action.payload.data.length;i++){
      if(action.payload.data[i].key==="slider"){
        detailListState.slider=action.payload.data[i].data.items;
      }
      else if(action.payload.data[i].key==="useInfo"){
        detailListState.useInfo=action.payload.data[i].data.desc;
      }
      else if(action.payload.data[i].key==="activityTime"){
        detailListState.activityTime=action.payload.data[i].data;
      }
      else if(action.payload.data[i].key==="productInfo"){
        detailListState.productInfo=action.payload.data[i].data;
      }
      else if(action.payload.data[i].key==="introList"){
        detailListState.introList=action.payload.data[i].data.items;
      }
      else if(action.payload.data[i].key==="sku"){
        detailListState.sku=action.payload.data[i].data.items;
      }
      else if(action.payload.data[i].key==="skuSlider"){
        detailListState.skuSlider=action.payload.data[i].data.items;
      }
    }
    return detailListState
  },
  [detailClearType]:(state,action)=>{
    let detailClearListState = JSON.parse(JSON.stringify(state));
    detailClearListState.slider = [];
    detailClearListState.useInfo = "";
    return detailClearListState;

  }
},defaultState)