import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AuthorsList from './AuthorList';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';


export class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.deleteAuthor = this.deleteAuthor.bind(this);
    }

    deleteAuthor(author) {
        event.preventDefault();
        this.props.actions.deleteAuthor(author).then(
            () => toastr.success(`Author ${author.firstName} ${author.lastName} deleted`)
        ).catch(error => {
            toastr.error(error);
        });
    }

    render() {
        const { authors } = this.props;

        return (
            <div>
                <h1>Authors</h1>
                <AuthorsList authors={authors} onAuthorDelete={this.deleteAuthor} />
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);