import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import logo from "../logo.svg"
import {ButtonContainer} from './button'
import {Navigator} from "./Styledcomponents"
import {cloudinary} from 'cloudinary-react'
import UploadPrescription from './UploadPrescription'

export default class MenuBar extends Component {
   constuctor() {
      this.routeChange = this.routeChange.bind(this);
    }
  
    routeChange(link) {
      let path = `newPath`;
      this.props.history.push(path);
    }
   render() {
      return (
         <Navigator className="navbar navbar-expand-md fixed-top navbar-dark px-sm-5 h-1 ">
            <img className="navbar-brand d-none d-md-block" src="LazyMeds Logo Final.png" />
            <button  className="navbar-toggler float-left navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
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
                     <span className="float-right fas fa-shopping-cart fa-lg"/>
                  </ButtonContainer>
            </Link>
            <span className="d-none d-lg-block">
               <UploadPrescription/>
            </span>
         </Navigator>
      )
   }
}