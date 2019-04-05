import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { addQuantity, removeProduct, subtractQuantity } from '../actions/productActions';
import { trasnformStringToNumber } from '../common/ulitily';
import classes from './MyCart.css';

class MyCart extends Component {
  sendOrderHandler = () => {
    const newOrder = {
      id: uuid(),
      customer_id: this.props.user.id,
      items: [...this.props.products],
      total: trasnformStringToNumber(this.props.totalPrice)
    }
    console.log('newOrder', newOrder)
  }

  render() {
    let addedProducts = this.props.products.length ?
      (
        this.props.products.map(item => {
          return (

            <li key={item.id} className={classes.MyCart}>

              <div>
                <span>{item.title}</span>
                <p>{item.description}</p>
                <p><b>Price: {item.price}</b></p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div>
                  <Link to="/mycart" onClick={() => this.props.onAddQuantity(item.id)}>+</Link>
                  <Link to="/mycart" onClick={() => this.props.onSubtractQuantity(item.id)}>-</Link>
                </div>
                <button onClick={() => this.props.onRemoveProduct(item.id)}>Remove</button>
              </div>

            </li>
          )
        })
      ) :

      (
        <p>Your cart is empty</p>
      )
    return (
      <div>
        {this.props.totalPrice > 0 && <h2>Total price: {trasnformStringToNumber(this.props.totalPrice)}</h2>}
        <h3>Your order:</h3>
        <ul>
          {addedProducts}
        </ul>
        <div className={classes.OrderNow}>
          {this.props.products.length > 0 && <button onClick={this.sendOrderHandler}>Order Now</button>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.addedProducts,
    totalPrice: state.products.totalPrice,
    user: state.user.authUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveProduct: (id) => { dispatch(removeProduct(id)) },
    onAddQuantity: (id) => { dispatch(addQuantity(id)) },
    onSubtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)