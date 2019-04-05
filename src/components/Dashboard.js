import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addProduct } from '../actions/productActions';
import Product from './Product';

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.user && <h2>Welcome {this.props.user.name}</h2>}
        {this.props.prod.map(product => {
          return <Product
            key={product.id}
            description={product.description}
            category={product.category}
            price={product.price}
            addProduct={() => this.props.onAddProduct(product.id)} />
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    prod: state.products.products,
    user: state.user.authUser
  }
}

const mapDispatchProps = dispatch => {
  return {
    onAddProduct: (id) => dispatch(addProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Dashboard);