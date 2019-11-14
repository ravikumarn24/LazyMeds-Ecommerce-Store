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

