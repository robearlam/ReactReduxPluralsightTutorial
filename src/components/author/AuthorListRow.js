import React, { PropTypes } from 'react';
import AuthorList from './AuthorList';

const AuthorListRow = ({ author, onDelete }) => {
    const passDeleteAuthor = e => (onDelete(author));
    return (
        <tr>
            <td>{author.firstName} {author.lastName}</td>
            <td>
                <input type="button" value="Delete" onClick={passDeleteAuthor} />
            </td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default AuthorListRow;
