import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length -8) == '_SUCCESS';
}

export default (state = initialState.ajaxCallsInProgress, { type, payload }) => {
    if(type == types.BEGIN_AJAX_CALL) {
        return state +1;
    } else if(actionTypeEndsInSuccess(type) || type == types.AJAX_CALL_ERROR) {
        return state -1;
    }

    return state;
};