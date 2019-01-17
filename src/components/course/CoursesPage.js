import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
    constructor(props, context) {
        super();
        this.redirectToAddToCoursePage = this.redirectToAddToCoursePage.bind(this);
    }

    courseRow(course, index) {
        return  <div key={index}>{course.title}</div>;
    }

    redirectToAddToCoursePage() {
        browserHistory.push('/course');
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
                <CourseList courses={courses} />
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