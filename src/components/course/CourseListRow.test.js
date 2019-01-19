import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

function setup() {
    const props = {
        course: {},
        onDeleteClick: {}
    };

    return shallow(<CourseListRow {...props} />);
}

// describe('CourseListRow', () => {
//     // it('Delete button is displayed in table', () => {
//     //     const wrapper = setup(false);
//     //     expect(wrapper.find('input').length).toBe(1);
//     //     expect(wrapper.find('input').props().type).toBe('button');
//     //     expect(wrapper.find('input').props().value).toBe('Delete');
//     // });
// });