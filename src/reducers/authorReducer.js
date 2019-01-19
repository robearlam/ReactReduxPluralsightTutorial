import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        case types.DELETE_AUTHOR_SUCCESS:
            return [
                ...state.filter(author => author.id !== action.author.id)
            ];
        case types.DELETE_AUTHOR_FAILED:
            return state;
        default:
            return state;
    }
}