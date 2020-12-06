import getExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses'


test('should return 0 if no expenses', () => {
    const res = getExpensesTotal([]);
    expect(res).toEqual(0);
});
test('should correctly add up a single expense', () => {
    const res = getExpensesTotal([expenses[0]]);
    expect(res).toEqual(195);
});
test('should correctly add up a multiple expenses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toEqual(114195);
});