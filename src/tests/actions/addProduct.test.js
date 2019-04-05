import { addProduct, removeProduct, subtractQuantity, addQuantity } from '../../actions/productActions';

test('should set up add a new product action', () => {
  const action = addProduct('abc');
  expect(action).toEqual({
    type: 'ADD_PRODUCT',
    id: 'abc'
  });
});

test('should set up remove a product  action', () => {
  const action = removeProduct('abc');
  expect(action).toEqual({
    type: 'REMOVE_PRODUCT',
    id: 'abc'
  });
});

test('should set up substract quantity  action', () => {
  const action = subtractQuantity('abc');
  expect(action).toEqual({
    type: 'SUBSTRACT_QUANTITY',
    id: 'abc'
  });
});

test('should set up add quantity  action', () => {
  const action = addQuantity('abc');
  expect(action).toEqual({
    type: 'ADD_QUANTITY',
    id: 'abc'
  });
});