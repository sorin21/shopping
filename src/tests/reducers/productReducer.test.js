import productReducer from '../../reducers/productReducer';
import products from '../../common/products';

test('should test default state', () => {
  const state = productReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({ products: [...products], totalPrice: 0, addedProducts: [] });
});

test('should add a product by id', () => {
  const action = {
    type: 'ADD_PRODUCT',
    id: products[0].id
  }
  const state = productReducer(products, action);
  console.log('state', products[0].id)
  expect(state).toEqual([products[1], products[2], products[3], products[4]]);
});