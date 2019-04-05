import React from 'react';

import classes from './Product.css';

const Product = (props) => {
  const { description, price } = props;
  return (
    <div className={classes.Product} onClick={props.addProduct}>
      <h3>{description}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Product;