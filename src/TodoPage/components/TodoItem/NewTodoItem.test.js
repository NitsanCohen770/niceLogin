import React from 'react';
import { render } from 'react-testing-library';

import NewTodoItem from './NewTodoItem';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {

    test('renders learn react link', () => {
      render(<<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
    
});
