import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import {Card} from 'react'
import {addToCart} from './CartActions'
import {ProductConsumer} from './ProductData'
import { valueToNode } from '@babel/types'

function CartButton() {
    let history = useHistory();
    function handleClick() {
        history.push("/Cart");
      }
    return (
        <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Go to Cart</button>
    )
}
 class Product extends Component {
    addItem = (id) => {
        this.props.addToCart(id);
    }

    render() {
        const {id,name,img,mrp,discount} = this.props.product;
        return (
            <ProductWrapper className="col-6 col-md-6 col-lg-3 mx-auto px-1">
                <div className="CellView">
                    <div className="card py-5 px-2" >
                        <Link to="/" className="no-underline">
                            <span className="img-container">
                                <img src={img} alt={id} className="card-img-top"/>
                            </span>
                            <div className="card-footer justify-content-between ">
                                <span className="card-info">
                                <p className="align-self-center nb-0 card-title">
                                    {name}
                                </p>
                                <p className="align-self-center nb-0 d-flex card-price">
                                    <b className="mr-1">Rs. {mrp-parseInt(discount*mrp)}</b>
                                    <i className="mr-1 text-danger"><del>Rs. {mrp} </del></i>
                                    <i className="mr-1 d-none d-lg-block text-success"> {discount*100}% OFF</i>
                                </p>
                                <p className="align-self-center align-items-center nb-0 d-flex">
                                    <i className="d-lg-none text-success"> {discount*100}% OFF</i>
                                </p>
                                </span>
                                <center><p className="align-items-center nb-0 d-flex">
                                <button type="button" className="btn btn-cart align-self-center" data-toggle="modal" data-target="#exampleModal" onClick={
                                        () => {this.addItem(id)}
                                    }
                                    >Add to Cart</button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Item Added</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                Hurray!!, {name} has been successfully added to your cart 
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                
                                                <CartButton/>
                                                
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </p></center>
                            </div>
                        </Link>
                    </div>
                </div>

            </ProductWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      products: state.products
    }
  }

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)

const ProductWrapper = styled.div`
color: var(--textColor) !important;
.card-info{
    font-size:0.8rem;
    color: var(--textColor) !important;
}
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.btn{
    font-size:0.7rem;
    border: 0.1rem ;
    color: var(--textColor) !important;
}
.card-price{
    font-size:0.8rem;
}
.card-footer{
    font-size:0.7rem;
    border-top: transparent;
    height: calc(200px);
    color: var(--textColor) !important;
}
.card-title{
    line-height: 1.5em;
    height: 3em;      
    overflow: hidden;
    color: var(--textColor) !important;
}
@media only screen and (max-width: 600px) {
    .card-title{
        line-height: 1.5em;
        height: 4.5em;      
        overflow: hidden;
        color: var(--textColor) !important;
    }
  }
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    width:100%;
    height: calc(200px);
    object-fit: contain;
    max-height: 100%;
}

`
