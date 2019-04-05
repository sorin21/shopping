import productReducer from '../../reducers/productReducer';
import products from '../../common/products';

test('should test default state', () => {
  const state = productReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({ products: [...products], totalPrice: 0, addedProducts: [] });
});

test('should add a product by id', () => {

  const action = {
    type: 'ADD_PRODUCT',
    id: products[1].id
  }
  const state = productReducer({ products: products, addedProducts: [products[1]], totalPrice: 0 }, action);
  expect(state).toEqual({ products: [...products], addedProducts: [products[1]], totalPrice: 49.50 });
});