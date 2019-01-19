import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, onAuthorDelete}) => {
  return (
    <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author =>
                    <AuthorListRow key={author.id} author={author} onDelete={onAuthorDelete} />
                )}
            </tbody>
        </table>
  );
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
    onAuthorDelete: PropTypes.func.isRequired
};

export default AuthorList;
