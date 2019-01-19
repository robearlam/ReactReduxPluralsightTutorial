import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function deleteAuthorSuccess(author) {
    return { type: types.DELETE_AUTHOR_SUCCESS, author };
}

export function ajaxCallError(error) {
    return  { type: types.AJAX_CALL_ERROR, error };
}

export function deleteAuthor(author) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return AuthorApi.deleteAuthor(author.id).then(() => {
            dispatch(deleteAuthorSuccess(author));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function loadAuthors () {
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}