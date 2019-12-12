import React, { Component } from 'react'
import {Products} from "./ProductData"
import Product from "./Product"
import {ProductConsumer} from "./Context"
import UploadPrescription from './UploadPrescription'
import Carousel from './Carousel'
import MenuBar from "./MenuBar"
import {connect} from "react-redux"
class ProductGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuBar/>
                <Carousel/>
                <div className="upload-widget d-lg-none container alert alert-primary">
                    <center><span>Lazy to find the right products? Upload your prescription easily and we'll get delivered at your doorstep</span></center>
                    <center><UploadPrescription/></center>
                    <br/>
                    <center><span>Call to Order : <a href="tel:+918248179620">+91 - 8248179620</a></span></center>
                    <center><span><a href="http://wa.me/918248179620">Any queries, drop a whatsapp message </a> </span></center>
                </div>
                <div className="py-lg-5">
                    <div className="container">
                        <div className="row">
                                {   
                                    this.props.products.map(product => 
                                    {
                                        return <Product key={product.id} product={product} />
                                    })
                                }
                        </div>
                    </div>

                </div>
                <div className="pb-4">
                    <center>
                        <span className="pr-3"><a href="https://www.facebook.com/lazymeds"><i class="fab fa-facebook-f facebook"></i></a></span>
                        <span className="pr-3"><a href="https://www.instagram.com/lazymeds"><i class="fab fa-instagram instagram"></i></a></span>
                        <span className="pr-3"><a href="https://www.linkedin.com/company/lazymeds"><i class="fab fa-linkedin linkedin"></i></a></span>
                        <span ><a href="https://www.twitter.com/Lazy_meds"><i class="fab fa-twitter-square twitter"></i></a></span>
                    </center>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      products: state.products
    }
  }

export default connect(mapStateToProps)(ProductGrid)

