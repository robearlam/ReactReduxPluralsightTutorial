import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props,context);

        this.redirectToAddToCoursePage = this.redirectToAddToCoursePage.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    redirectToAddToCoursePage() {
        browserHistory.push('/course');
    }

    deleteCourse(course) {
        event.preventDefault();
        this.props.actions.deleteCourse(course).then(
            () => toastr.success(`Course ${course.title} deleted`)
        ).catch(error => {
            toastr.error(error);
        });
    }

    render() {
        const {courses} = this.props;
        
        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddToCoursePage} />
                <CourseList courses={courses} onCourseDelete={this.deleteCourse} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses  //the name courses on the state comes from the courseReduce!
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);