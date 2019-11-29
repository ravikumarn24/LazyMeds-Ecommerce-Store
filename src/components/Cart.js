import React, { Component } from 'react'
import MenuBar from './MenuBar'
import CartItems from './CartItems.js'
import {completeOrder, setOriginalState} from "./CartActions.js"
import {connect} from "react-redux"
import $ from "jquery"

export class Cart extends Component {


    displayTotal = () => {
        if(this.props.state.cart.length === 0){
            return null;
        }
        var total = 0,discountedPrice = 0;
        
        for(var cartIndex in this.props.state.cart)
        {
            var cartItem = this.props.state.cart[cartIndex]
            discountedPrice = cartItem.mrp-parseInt((cartItem.discount)*(cartItem.mrp));
            total += cartItem.cartQuantity * discountedPrice;
        }
        return (
            <div className="text-center cart-position">
                <strong>Total :  {total}</strong>
            </div>
        )
    }

    displayPlaceOrder = () => {
        if(this.props.state.cart.length === 0){
            return null;
        }
        return (
            <div>
                <div className="text-center">
                 <button className="btn btn-cart btn-rounded mb-4" data-toggle="modal" data-target="#modalForm">Place Order</button>
                </div>
                {
                    this.getInfo()
                }
        </div>
        )

    }
    changeName = (event) => {
        this.name = event.target.value;
    }
    changeMobile = (event) => {
        this.mobile = event.target.value;
    }
    changeAddress = (event) => {
        this.address = event.target.value;
    }


    getInfo = () => {
        return (
            <div show={true} class="modal fade" id="modalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title w-100 font-weight-bold">Placing Order</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body mx-3">
                            <div class="md-form mb-4">
                                <label data-error="wrong" data-success="right" for="defaultForm-name">Name</label>
                                <input type="text" id="defaultForm-name" class="form-control validate" onChange={this.changeName} />
                            </div>

                        <div class="md-form mb-4">
                            <label data-error="wrong" data-success="right" for="defaultForm-number">Mobile number</label>
                            <input type="number" id="defaultForm-number" class="form-control validate" onChange={this.changeMobile}/>
                        </div>
                        <div class="md-form mb-4">
                            <label data-error="wrong" data-success="right" for="defaultForm-address">Delivery Address</label>
                            <textarea id="defaultForm-address" class="form-control validate" onChange={this.changeAddress}/>
                        </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                        {
                            this.displayCompleteOrder()
                        }
                    </div>
                </div>
            </div>
        </div>
        )
    }
    getCartDetails = () => {
        var cart_details = "";
        var total = 0;
        var itemIndex = -1;
        for(itemIndex in this.props.state.cart){
            let item = this.props.state.cart[itemIndex];
            let discountedPrice = item.mrp-parseInt((item.discount)*(item.mrp));
            cart_details += "\n Item Number : " + (itemIndex+1);
            cart_details += "\n Item Name : " + item.name;
            cart_details += "\n Item Quantity : "+ item.cartQuantity;
            cart_details += "\n Per Item Price : " + discountedPrice;
            total += item.cartQuantity * discountedPrice;
            cart_details += "\n \n";
        }
        if(itemIndex != -1){
            cart_details += "\n Total : "+ total;
        }
        return cart_details;
    }
    sendToWhatsapp = () => {
        let whatsapp_msg = "ORDER DETAILS "
        if(!(this.name === null || this.name === "" )){
            whatsapp_msg +=  "\n Name : "+ this.name;
        }
        if(!(this.mobile === null || this.mobile === 0)){
            whatsapp_msg += "\n Mobile Number : "+this.mobile;
        }
        if(!(this.address === null || this.address === "")){
            whatsapp_msg += "\n Delivery Address : "+this.address;
        }
        whatsapp_msg += "\n ORDER ITEMS %0a";
        whatsapp_msg += this.getCartDetails();
        let final_wp_msg = "";
        fetch('http://api.textuploader.com/v1/posts', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-TextUploader-API-Key': 'btNohQAJlGlqlOwZx9xdPgjnS+2aptos',
                },
        body: JSON.stringify({
            title: "New order from Mr. /Mrs. /Ms. "+this.name,
            content: whatsapp_msg,
            type: "public",
            })
        }).then((response) => response.json())
        .then((responseJson) => {
            final_wp_msg = responseJson.results[0].longurl;
            let link = "http://wa.me/918248179620?text=" + "order_link: " + whatsapp_msg;
            window.location.href=link;
        })
        
        this.props.state.orderComplete = false;
        this.props.setOriginalState();
        $("#modalForm").modal("hide");
    }
    completeOrder = () => {
        if(typeof this.name === undefined || this.name === ""){
            
            return;
        }
        if(typeof this.mobile === undefined || this.mobile === 0){
            return;
        }
        if(typeof this.address === undefined || this.address === ""){
            return;
        }
        this.props.completeOrder();
        setTimeout(this.sendToWhatsapp,9000);
    }
    displayCompleteOrder = () => {
        let btncls = "";
        if(this.props.state.orderComplete === true){
            btncls = "animate";
        }
        return (
            <div>
                <button className={"btn btn-cart order "+btncls} onClick={()=> {this.completeOrder()}}><span className="default">Complete Order</span><span className="success">Order Placed
                <svg viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg></span>
                <div className="box"></div>
                <div className="truck">
                <div className="back"></div>
                <div className="front">
                <div className="window"></div>
                </div>
                <div className="light top"></div>
                <div className="light bottom"></div>
                </div>
                <div className="lines"></div>
                </button>
            </div>
        )
    }
    render() {
        return (
            <React.Fragment>
                <MenuBar/>
                <CartItems/>
                {
                    this.displayTotal()
                }
                <br/>
                {
                    this.displayPlaceOrder()
                }
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      state: state
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        completeOrder: () => {dispatch(completeOrder())},
        setOriginalState: () => {dispatch(setOriginalState())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


