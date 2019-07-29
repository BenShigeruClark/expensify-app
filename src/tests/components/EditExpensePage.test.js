import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense, removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1]);
}); 

// test('should handle removeExpense', () => {

// });

// Refactor EditExpensePage to be a class based component
// Setup mapDispatchToProps editExpense and removeExpense

// should render EditExpensePage
// snapshot

// should handle editExpense
// spies

// should handle removeExpense
// spies
