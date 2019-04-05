
export const trasnformStringToNumber = (string) => (+parseFloat(string).toFixed(2));
export const findProduct = (items, action) => (items.find(item => item.id === action));