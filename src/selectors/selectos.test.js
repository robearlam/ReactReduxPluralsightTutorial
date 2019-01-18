import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Authors Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'eric-cantona', firstName:'Eric', lastName: 'Cantona'},
                {id: 'paul-scholes', firstName:'Paul', lastName: 'Scholes'}
            ];

            const expected = [
                {value: 'eric-cantona', text:'Eric Cantona'},
                {value: 'paul-scholes', text:'Paul Scholes'}
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});
