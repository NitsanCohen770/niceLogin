import { render, screen } from '@testing-library/react';
import NewTodoItem from './NewTodoItem';

describe('NewTodoItem tests')
render(<NewTodoItem />);

test('sd', () => {
 
  const priorityTooltip = screen.getAllByAltText(/Toggle priority/i);
  expect(priorityTooltip).to();
});
