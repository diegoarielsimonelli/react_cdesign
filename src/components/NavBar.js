import React from 'react'
import { Icon } from 'semantic-ui-react'
import CardWidget  from './CardWidget';
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    <CardWidget width='200px' height='200px'  /><a href="https://github.com" className="navbar-brand m-3" >C-Design</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link to="/">  <li className="nav-item">
         
          <Icon link color='red' name='cart'/>
        </li></Link>  
       <Link to="/category/jewelery">  <li className="nav-item">
        <Icon link color='red' name='chess queen'/>
        </li></Link>  
        <Link to="/category/men's clothing"> <li className="nav-item">
        <Icon link color='blue' name='mars'/>
        
        </li></Link>
        <Link to="/category/women's clothing"> <li className="nav-item">
        <Icon link color='black' name='venus'/>
        
        </li></Link>
        <Link to="/category/electronics"> <li className="nav-item">
        <Icon link color='green' name='tablet'/>
        
        </li></Link>
        <Link to="/Cart">  <li className="nav-item">
         
          <Icon link color='grey' name='cart plus'/>
        </li></Link>  
      </ul>
    </div>
  </div>
</nav>
   
        
) 
    
  
  ;
    
  };
  
  export default NavBar;
  