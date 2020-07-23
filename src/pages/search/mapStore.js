import {searchListAsyncAction} from "actions/search/actionCreator";

export const mapStateToProps = (state)=>({
  searchListArr : state.search.searchList
})

export const mapDispatchToProps = (dispatch)=>({
  handleAsyncSearchList(_time){
    dispatch(searchListAsyncAction(_time))
  }
})