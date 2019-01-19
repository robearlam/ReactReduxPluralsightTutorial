import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import CourseApi from '../api/mockCourseApi';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function deleteAuthorSuccess(author) {
    return { type: types.DELETE_AUTHOR_SUCCESS, author };
}

export function deleteAuthorFailed(author) {
    return { type: types.DELETE_AUTHOR_FAILED, author };
}

export function ajaxCallError(error) {
    return  { type: types.AJAX_CALL_ERROR, error };
}

export function deleteAuthor(author) {
    return function(dispatch) {
        dispatch(beginAjaxCall());

        return CourseApi.getAllCourses().then(courses => {
            const authorCourses = courses.filter(course => course.authorId == author.id);
            if(authorCourses.length > 0) {
                const error = `Unable to delete author ${author.firstName} ${author.lastName} as they have courses remaining`;
                dispatch(ajaxCallError(error));
                dispatch(deleteAuthorFailed(author));
                throw(error);
            }
            else {
                dispatch(deleteAuthorSuccess(author));
            }
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