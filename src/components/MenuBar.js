import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import logo from "../logo.svg"
import {ButtonContainer} from './button'
import {Navigator} from "./Styledcomponents"
import {cloudinary} from 'cloudinary-react'

export default class MenuBar extends Component {
   constuctor() {
      this.routeChange = this.routeChange.bind(this);
    }
  
    routeChange(link) {
      let path = `newPath`;
      this.props.history.push(path);
    }
   uploadWidget() {
      window.cloudinary.openUploadWidget({ cloud_name: 'dlld49z2k', upload_preset: 'humw6nxm'},
          function(error, result) {
            if(!error && result && result.event === "success") { 
               let text = "Please Check the uploaded prescription at "+ encodeURIComponent(result.info.secure_url);
               let link = "http://wa.me/918248161684?text=" + text;
               window.location.href=link;
            }
          });
  }
   render() {
      return (
         <Navigator className="navbar navbar-expand-sm fixed-top navbar-dark px-sm-5 h-1 ">
            <img className="navbar-brand" src="LazyMeds Logo Final.png" />
            <button  className="navbar-toggler float-right navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
            </button>
            <span className="navbar-collapse collapse dual-nav w-1 order-1 order-md-0" id="navbarCollapse">
            <ul className="navbar-nav ">
               <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
               </li>
               <li className="nav-item">
                  <Link to="/Contact" className="nav-link">Contact</Link>
               </li>
            </ul>
            </span>
            <Link to="/Cart" className="ml-auto">
                  <ButtonContainer>
                     <span className="mr-2 fas fa-shopping-cart fa-lg"/>
                  </ButtonContainer>
            </Link>
            <span className="d-none d-lg-block">
            <button  onClick={this.uploadWidget.bind(this)} className=" cloudinary-button btn btn-primary btn-sm">Upload files</button>
            </span>
         </Navigator>
      )
   }
}