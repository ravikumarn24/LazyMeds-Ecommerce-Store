import React, { Component } from 'react'
import styled from "styled-components"
import {Link} from 'react-router-dom'
import {Card} from 'react'
import {ProductConsumer} from './ProductData'
import { valueToNode } from '@babel/types'

export class Product extends Component {
    render() {
        const {id,name,img,mrp,discount} = this.props.product;
        return (
            <ProductWrapper className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-3 mx-auto">
                <div className="CellView">
                    <div className="card py-5 px-2" >
                        <Link to="/" className="no-underline">
                            <span className="img-container">
                                <img src={img} alt={id} className="card-img-top"/>
                            </span>
                            <div className="card-footer justify-content-between ">
                                <p className="align-self-center nb-0">
                                    {name}
                                </p>
                                <p className="align-self-center nb-0 d-flex ">
                                    <b className="mr-1">Rs. {mrp-discount*mrp}</b>
                                    <i className="mr-1 text-danger"><del>Rs. {mrp} </del></i>
                                    <i className="mr-1 d-none d-lg-block text-success"> {discount*100}% OFF</i>
                                </p>
                                <p className="align-self-center align-items-center nb-0 d-flex">
                                    <i className="d-lg-none text-success"> {discount*100}% OFF</i>
                                </p>
                                <p className="align-self-center nb-0 d-flex">
                                    <button type="button" className="btn btn-info align-self-center" data-toggle="modal" data-target="#exampleModal" onClick={
                                        () => {}

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
                                                
                                                <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>{
                                                    window.location.href="/Cart"
                                                }}>Go to Cart</button>
                                                
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </ProductWrapper>
        )
    }
}


const ProductWrapper = styled.div`
font-size:0.8em;
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    border-top: transparent;
    height: calc(150px);
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
