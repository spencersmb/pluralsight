import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import { authorsFormattedForDropdown } from '../../helpers/selectors';


describe('Author Selectors', () => {

  describe('authorsFormattedForDropdown func', () => {
    it('Should return author data formatted for use in a dropdown', () => {
        const authors = [
          {id: 'spencer-bigum', firstName: 'Spencer', lastName: 'Bigum' },
          {id: 'teela-bigum', firstName: 'Teela', lastName: 'Bigum' }
        ];

        const expected = [
          {value: 'spencer-bigum', text: 'Spencer Bigum'},
          {value: 'teela-bigum', text: 'Teela Bigum'}
        ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);

    });
  });

});