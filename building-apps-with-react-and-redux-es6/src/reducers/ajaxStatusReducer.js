import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Check if the actionType ends with Success
function actionTypeEndsInSuccess( type  ) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export const ajaxStatusReducer = (state = initialState.ajaxCallsInProgress, action) => {
  if(action.type === types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if( actionTypeEndsInSuccess(action.type) || action.type == types.AJAX_CALL_ERROR ){

    //if true, subtract one from state
    return state - 1;
  }

  return state;
};