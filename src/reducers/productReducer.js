import { ADD_PRODUCT, REMOVE_PRODUCT, ADD_QUANTITY, SUBSTRACT_QUANTITY } from '../actions/productActions';
import { trasnformStringToNumber, findProduct } from '../common/ulitily';

const initialState = {
  products: [
    {
      "id": "A101",
      "description": "Screwdriver",
      "category": "1",
      "price": "9.75"
    },
    {
      "id": "A102",
      "description": "Electric screwdriver",
      "category": "1",
      "price": "49.50"
    },
    {
      "id": "B101",
      "description": "Basic on-off switch",
      "category": "2",
      "price": "4.99"
    },
    {
      "id": "B102",
      "description": "Press button",
      "category": "2",
      "price": "4.99"
    },
    {
      "id": "B103",
      "description": "Switch with motion detector",
      "category": "2",
      "price": "12.95"
    }
  ],
  totalPrice: 0,
  addedProducts: []

}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let addedProduct = state.products.find(item => item.id === action.id);
      let existedProduct = state.addedProducts.find(item => action.id === item.id);
      console.log('existedProduct', existedProduct);

      let productPrice = trasnformStringToNumber(addedProduct.price);

      if (existedProduct) {
        addedProduct.quantity += 1;
        return {
          ...state,
          totalPrice: state.totalPrice + productPrice
        };
      } else {
        addedProduct.quantity = 1;
        let totalPrice = state.totalPrice + productPrice;

        return {
          ...state,
          addedProducts: [...state.addedProducts, addedProduct],
          totalPrice
        };

      }

    case REMOVE_PRODUCT:
      let productToRemove = findProduct(state.addedProducts, action.id);
      let newProducts = state.addedProducts.filter(item => action.id !== item.id);
      let totalPriceProdRemov = state.totalPrice - (trasnformStringToNumber(productToRemove.price) * productToRemove.quantity);
      return {
        ...state,
        addedProducts: newProducts,
        totalPrice: totalPriceProdRemov
      };


    case ADD_QUANTITY:
      let addeQuantitydProduct = findProduct(state.products, action.id);
      addeQuantitydProduct.quantity += 1
      let totalPriceAddQuant = state.totalPrice + trasnformStringToNumber(addeQuantitydProduct.price);

      return {
        ...state,
        totalPrice: totalPriceAddQuant
      }

    case SUBSTRACT_QUANTITY:
      let substractedProduct = findProduct(state.products, action.id);
      //if the qt == 0 then product should be removed
      if (substractedProduct.quantity === 1) {
        let productsRemain = state.addedProducts.filter(item => item.id !== action.id);
        let toatalPriceQuantRem = state.totalPrice - trasnformStringToNumber(substractedProduct.price);

        return {
          ...state,
          addedProducts: productsRemain,
          totalPrice: toatalPriceQuantRem
        }
      }
      else {
        substractedProduct.quantity -= 1
        let newTotal = state.totalPrice - trasnformStringToNumber(substractedProduct.price);

        return {
          ...state,
          totalPrice: newTotal
        }
      }

    default:
      return state;
  }
};

export default productReducer;
