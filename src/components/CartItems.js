import React, { Component } from 'react'
import CartItem from "./CartItem"
import {connect} from 'react-redux'
import {ProductConsumer} from "./Context"

class CartItems extends Component {
    getCart = () => {
        if(this.props.cart.length == 0){
            return <CartItem/>
        }
        else {
        let cnt = 0;
         return this.props.cart.map(cartItem => {
                return <CartItem key={cartItem.id} cartItem={cartItem} />
            cnt += 1;
        })
    }
}
    render() {
        return (
            <div className="cart-position container-fluid w-100">
                    <div className="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th class="col-xs-5">Product</th>
                                        <th class="col-xs-4">Quantity</th>
                                        <th class="col-xs-1 text-center">Price</th>
                                        <th class="col-xs-1 text-center">SubTotal</th>
                                        <th class="col-xs-1"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {  
                                    this.getCart()
                                }
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      cart: state.cart,
      state: state
    }
  }

export default connect(mapStateToProps)(CartItems)
