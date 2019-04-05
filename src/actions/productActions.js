export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = (id) => {
  return {
    type: ADD_PRODUCT,
    id
  }
}

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    id
  }
}

export const SUBSTRACT_QUANTITY = 'SUBSTRACT_QUANTITY';
export const subtractQuantity = (id) => {
  return {
    type: SUBSTRACT_QUANTITY,
    id
  }
}

export const ADD_QUANTITY = 'ADD_QUANTITY';
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}
