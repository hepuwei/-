import {limitedAsyncAction} from "actions/limitedtime/actionCreator"

export const mapStateToProps = (state)=>({
  limitList:state.limite.limitedList,
  limitFlag:state.limite.limitFlag
})

export const mapDispatchToProps = (dispatch)=>({
  handleAsynclimited(_time,tabIndex,childIndex,currentView){
    dispatch(limitedAsyncAction(_time,tabIndex,childIndex,currentView))
  }
})