import {LimitClearAsyncAction} from "actions/limitedtime/actionCreator"
import {detailAsyncAction,detailClearAction} from "actions/detail/actionCreator"

export const mapStateToProps = (state)=>({
  slider:state.detail.slider,
  useInfo:state.detail.useInfo,
  activityTime:state.detail.activityTime,
  productInfo:state.detail.productInfo,
  introList:state.detail.introList,
  sku:state.detail.sku,
  skuSlider:state.detail.skuSlider
  
})

export const mapDispatchToProps = (dispatch)=>({
  handleClearlimited(){
    dispatch(LimitClearAsyncAction())
  },
  handleAsyncDetail(id,depot,_time){
    dispatch(detailAsyncAction(id,depot,_time));
  },
  handleClear(){
    dispatch(detailClearAction())
  }
})